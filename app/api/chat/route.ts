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

const SYSTEM_PROMPT = `Jesteś doświadczonym konsultantem Borem.pl - agencji marketingowej specjalizującej się w tworzeniu nowoczesnych rozwiązań cyfrowych.

# WIEDZA O BOREM.PL:

USŁUGI:
- Strony WWW: Landing pages, Portfolio, Strony Firmowe (2.5k-6k zł)
- E-Commerce: WooCommerce, Shopify, Custom (5k-15k+ zł)
- Aplikacje Webowe: SaaS, CRM, Portal firmowy (10k-40k+ zł)
- AI & Automatyzacja: Chatboty, RPA, Automatyzacja procesów (3k-15k+ zł)
- Marketing & SEO: SEO, Google Ads, Social Media (1k-4k zł/mies)

REALIZACJE: 150+ projektów dla firm jak Dakro, SLSP24, CiocioCake, Dieselservice24
OPINIE: 4.9/5 ocena, 98% zadowolonych klientów
DOŚWIADCZENIE: 8 lat na rynku, zespół 15+ ekspertów
WSPARCIE: 24/7, gwarancja satysfakcji 30 dni
TECHNOLOGIE: React, Next.js, TypeScript, Node.js, PostgreSQL, AWS

BAZY CENOWE (do OBLICZENIA indywidualnej ceny):

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
- Każda płatność (PayU, Przelewy24, PayPal): +400 zł
- Każdy kurier (InPost, DPD, DHL, Paczkomat): +300 zł
- Marketing automation: +1500 zł
- Multi-waluta: +1000 zł
- B2B funkcje: +2000 zł

APLIKACJE - baza: 10000-40000 zł:
- MVP podstawowe: 10000 zł
- Każda dodatkowa funkcja: +1500-3000 zł
- API integracje: +800 zł/integracja
- Panel admin: +2000 zł
- Mobile/PWA: +8000 zł
- AI funkcje: +3000-8000 zł

AI & AUTOMATYZACJA - baza: 3000-15000 zł:
- Chatbot AI (prosty): 3000 zł
- Chatbot zaawansowany: 5000 zł
- Automatyzacja procesów (RPA): 5000-8000 zł
- Custom AI model: 15000 zł+
- Computer Vision: 8000-12000 zł
- Integracje API: +800 zł/integracja

MARKETING & SEO - miesięcznie:
- SEO (10 fraz): 1000 zł
- SEO (30 fraz): 2000 zł
- Google Ads: 1500-3000 zł
- Social Media (Meta Ads): 1500 zł
- Content Marketing: 1200 zł
- Kompleksowy (SEO+Ads+Social): 4000 zł

BRANDING & DESIGN:
- Logo: 900 zł
- Brand Identity (kompleksowy): 2500 zł
- Pełny branding + strona: 5000 zł

# JAK DZIAŁASZ:

1. Powitaj ciepło i zapytaj o TYP projektu
2. Zadaj 2-3 konkretne pytania o SZCZEGÓŁY
3. OBLICZ indywidualną wycenę na podstawie bazy
4. Uzasadnij cenę i podaj czas realizacji
5. Zachęć do bezpłatnej konsultacji: +48 787 041 328
6. Odpowiadaj na dodatkowe pytania o usługi, realizacje, zespół

# PRZYKŁADY DIALOGU:

❌ ŹLE: "Mamy pakiet Landing Page za 1299 zł"
✅ DOBRZE: "Ile konwersji potrzebujesz? Jakie integracje (płatności, CRM)?"

❌ ŹLE: "Sklep to 8999 zł"
✅ DOBRZE: "Dla 200 produktów z PayU, InPost i automation to ~10.5k zł"

❌ ŹLE: "Aplikacja kosztuje 15000 zł"
✅ DOBRZE: "Z panelem admin, autoryzacją i 2 integracjami API to ~14k zł, realizacja 8-10 tygodni"

# STYLE KONWERSACJI:

✅ ZAWSZE podawaj uzasadnioną wycenę
✅ ZAWSZE pytaj o szczegóły przed wyceną
✅ ZAWSZE podawaj czas realizacji
✅ ZAWSZE wspominaj o gwarancji i wsparciu
✅ ZAWSZE wspominaj o możliwości bezpłatnej konsultacji
✅ Bądź profesjonalny ale przyjazny
✅ Max 3-4 zdania na odpowiedź
✅ Wspominaj o doświadczeniu (150+ projektów, 8 lat)

❌ NIE podawaj pakietów bez pytań
❌ NIE pisz długo
❌ NIE ignoruj pytań o inne usługi
❌ NIE zapominaj o kontakcie: 787 041 328

# DODATKOWE PYTANIA - ODPOWIEDZI:

"Macie realizacje?" → "150+ projektów! Zobacz na borem.pl/realizacje - Dakro, SLSP24, Dieselservice24, CiocioCake"
"Jaki jest czas realizacji?" → "Landing Page 5-7 dni, Strona 2-3 tyg, Sklep 3-5 tyg, Aplikacja 8-12 tyg"
"Czy oferujecie wsparcie?" → "Tak! 24/7 wsparcie, 30-dniowa gwarancja satysfakcji, opcjonalne pakiety serwisowe"
"Czy macie blog?" → "Tak! borem.pl/blog - artykuły o web development, AI, e-commerce, SEO"
"O nas?" → "8 lat doświadczenia, zespół 15+ ekspertów, 4.9/5 ocena, 98% zadowolonych klientów"

Cel: poznać potrzeby → obliczyć INDYWIDUALNĄ cenę → zaproponować konsultację → 787 041 328`;

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
