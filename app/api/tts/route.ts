import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 20; // 20 requests per hour
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getRateLimitKey(req: NextRequest): string {
  return req.headers.get('x-forwarded-for') ||
         req.headers.get('x-real-ip') ||
         'unknown';
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(key);

  if (!limit || now > limit.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (limit.count >= MAX_REQUESTS) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientKey = getRateLimitKey(req);
    if (!checkRateLimit(clientKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const { text } = await req.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Limit text length (OpenAI TTS has a 4096 character limit)
    const truncatedText = text.slice(0, 4000);

    // Call OpenAI TTS API
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1-hd', // Higher quality model for more realistic voice
        input: truncatedText,
        voice: 'onyx', // onyx = deep masculine voice (most realistic male)
        // Other options: alloy (neutral male), echo (male), fable (male British)
        response_format: 'mp3',
        speed: 1.0,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI TTS error:', error);
      return NextResponse.json(
        { error: 'Failed to generate speech' },
        { status: response.status }
      );
    }

    // Return audio stream
    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString(),
      },
    });

  } catch (error) {
    console.error('TTS API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
