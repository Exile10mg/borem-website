import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 20;
  const window = 60000;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeMessage(content: string): string {
  return content
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 500);
}

function validateMessages(messages: any[]): boolean {
  if (!Array.isArray(messages)) return false;
  if (messages.length > 50) return false;

  return messages.every(msg => {
    if (!msg || typeof msg !== 'object') return false;
    if (!['user', 'assistant'].includes(msg.role)) return false;
    if (typeof msg.content !== 'string') return false;
    if (msg.content.length > 1000) return false;
    return true;
  });
}

const SYSTEM_PROMPT = `Jesteś asystentem generującym sugestywne pytania. Na podstawie historii rozmowy, wygeneruj 3 krótkie, konkretne pytania follow-up (max 10 słów każde), które mogą zainteresować użytkownika i są związane z usługami Borem.pl. Zwróć TYLKO tablicę JSON z pytaniami, bez dodatkowego tekstu. Format: ["pytanie1", "pytanie2", "pytanie3"]`;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Za dużo żądań. Spróbuj ponownie za chwilę.' },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!validateMessages(messages) && messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const sanitizedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: sanitizeMessage(msg.content)
    }));

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const questionsResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                {
                  role: 'system',
                  content: SYSTEM_PROMPT,
                },
                ...sanitizedMessages,
              ],
              temperature: 0.7,
              max_tokens: 100,
              top_p: 0.9,
            }),
          });

          if (questionsResponse.ok) {
            const questionsData = await questionsResponse.json();
            const questionsContent = questionsData.choices[0]?.message?.content || '';

            try {
              const questionsArray = JSON.parse(questionsContent);
              if (Array.isArray(questionsArray)) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ marker: 'QUESTIONS_START' })}\n\n`));

                for (const question of questionsArray) {
                  for (const char of question) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ question_char: char })}\n\n`));
                    await new Promise(resolve => setTimeout(resolve, 15));
                  }
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ question_sep: true })}\n\n`));
                }

                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ marker: 'QUESTIONS_END' })}\n\n`));
              }
            } catch (parseError) {
              console.error('Error parsing questions JSON:', parseError);
            }
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Questions API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
