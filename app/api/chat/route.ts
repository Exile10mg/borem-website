import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Simple in-memory rate limiting (for edge runtime)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 10; // 10 requests
  const window = 60000; // per 1 minute

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
  // Remove HTML tags and limit length
  return content
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 500);
}

function validateMessages(messages: any[]): boolean {
  if (!Array.isArray(messages) || messages.length === 0) return false;
  if (messages.length > 50) return false; // Max 50 messages in history

  return messages.every(msg => {
    if (!msg || typeof msg !== 'object') return false;
    if (!['user', 'assistant'].includes(msg.role)) return false;
    if (typeof msg.content !== 'string') return false;
    if (msg.content.length > 1000) return false; // Max message length
    return true;
  });
}

const SYSTEM_PROMPT = `Jesteś doświadczonym konsultantem Borem.pl. Wyceniasz projekty INDYWIDUALNIE na podstawie potrzeb klienta.

# JAK DZIAŁASZ:
1. Pytasz o szczegóły projektu (NIE oferujesz gotowych pakietów)
2. Na podstawie odpowiedzi liczysz indywidualną wycenę
3. Podajesz konkretną cenę z uzasadnieniem
4. Max 2-3 zdania

# BAZY CENOWE (używaj do OBLICZENIA indywidualnej ceny):

STRONY WWW - baza: 1500-6000 zł:
- Liczba podstron: +200 zł/podstrona
- Responsywność: +300 zł
- CMS/panel: +500 zł
- Blog: +400 zł
- Wielojęzyczność: +800 zł
- Zaawansowane SEO: +600 zł
- Animacje: +400 zł

E-COMMERCE - baza: 5000-15000 zł:
- Do 50 produktów: 5000 zł
- 51-200 produktów: 9000 zł
- 201+ produktów: 14000 zł+
- Każda płatność: +400 zł
- Każdy kurier: +300 zł
- Marketing automation: +1500 zł
- Multi-waluta: +1000 zł
- B2B funkcje: +2000 zł

APLIKACJE - baza: 10000-40000 zł:
- MVP podstawowe: 10000 zł
- Każda dodatkowa funkcja: +1500-3000 zł
- API integracje: +800 zł/integracja
- Panel admin: +2000 zł
- Mobile apps: +8000 zł
- AI funkcje: +3000-8000 zł

AI & AUTOMATYZACJA - baza: 3000-15000 zł:
- Chatbot prosty: 3000 zł
- Chatbot zaawansowany: 5000 zł
- Automatyzacja procesów: 5000-8000 zł
- Custom AI model: 15000 zł+

MARKETING - miesięcznie:
- SEO (10 fraz): 1000 zł/mies
- SEO (30 fraz): 2000 zł/mies
- Google Ads: 1500-3000 zł/mies
- Social Media: 1500 zł/mies
- Kompleksowy: 4000 zł/mies

BRANDING:
- Logo: 900 zł
- Redesign: 2500 zł
- Pełny branding: 5000 zł

# PROCES WYCENY:

Krok 1: Zapytaj o TYP projektu
"Jaki projekt Cię interesuje - strona, sklep, aplikacja, marketing czy branding?"

Krok 2: Zadaj 2-3 pytania o SZCZEGÓŁY
Strona: "Ile podstron? Potrzebujesz CMS? Blog?"
Sklep: "Ile produktów? Jakie płatności i kurierzy?"
Aplikacja: "Jakie główne funkcje? Integracje z czym?"
Marketing: "SEO, reklamy czy kompleksowo? Ile fraz?"

Krok 3: OBLICZ i podaj indywidualną wycenę
"Na podstawie Twoich potrzeb: strona 5-7 podstron z CMS i blogiem to około 3500 zł, realizacja 3 tygodnie."

Krok 4: Zachęć do kontaktu
"Szczegóły omówimy - zadzwoń 787 041 328"

# PRZYKŁADY:

❌ ŹLE: "Mamy pakiet Landing Page za 1299 zł"
✅ DOBRZE: "Ile podstron potrzebujesz?"

❌ ŹLE: "Sklep Business to 8999 zł"
✅ DOBRZE: "Dla 150 produktów z PayU i InPost to około 7500 zł"

❌ ŹLE: "MVP to 9999 zł"
✅ DOBRZE: "Z autoryzacją, panelem użytkownika i płatnościami to około 12000 zł"

# ZASADY:
✅ Pytaj o szczegóły
✅ LICZ indywidualnie na podstawie potrzeb
✅ Uzasadniaj cenę
✅ 2-3 zdania max
❌ NIE podawaj gotowych pakietów
❌ NIE wymieniaj wszystkich opcji
❌ NIE pisz długo

Cel: poznać potrzeby → obliczyć indywidualną cenę → 787 041 328`;

export async function POST(req: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Za dużo żądań. Spróbuj ponownie za chwilę.' },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    // Validate messages
    if (!validateMessages(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Sanitize all messages
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

    // Call OpenAI API with streaming
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
        temperature: 0.5,
        max_tokens: 200,
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.2,
        stream: true, // Enable streaming
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    // Return the stream directly
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              controller.close();
              break;
            }

            // Decode the chunk
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n').filter(line => line.trim() !== '');

            for (const line of lines) {
              const message = line.replace(/^data: /, '');

              if (message === '[DONE]') {
                controller.close();
                return;
              }

              try {
                const parsed = JSON.parse(message);
                const content = parsed.choices[0]?.delta?.content;

                if (content) {
                  // Send each character to the client
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
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
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
