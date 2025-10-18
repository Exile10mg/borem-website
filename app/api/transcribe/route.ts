import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 30; // 30 seconds timeout

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 transcription requests
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

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // Check file size (max 25MB for Whisper API)
    if (audioFile.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Plik audio jest za duży. Maksymalny rozmiar to 25MB.' },
        { status: 400 }
      );
    }

    // Convert to buffer for Edge runtime
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Detect audio type from the file
    const audioType = audioFile.type || 'audio/webm';
    const extension = audioType.includes('mp4') ? 'audio.mp4'
                    : audioType.includes('aac') ? 'audio.aac'
                    : audioType.includes('wav') ? 'audio.wav'
                    : audioType.includes('mpeg') ? 'audio.mp3'
                    : 'audio.webm';

    console.log('[Transcribe API] Audio type:', audioType, 'Extension:', extension, 'Size:', buffer.length);

    // Create form data for OpenAI
    const whisperFormData = new FormData();
    const blob = new Blob([buffer], { type: audioType });
    whisperFormData.append('file', blob, extension);
    whisperFormData.append('model', 'whisper-1');
    whisperFormData.append('language', 'pl'); // Polish language
    whisperFormData.append('response_format', 'json');

    // Call Whisper API
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      body: whisperFormData,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Whisper API error:', error);
      return NextResponse.json(
        { error: 'Failed to transcribe audio' },
        { status: response.status }
      );
    }

    const data = await response.json();
    let transcribedText = data.text || '';

    console.log('[Transcribe API] Raw result:', transcribedText);

    // Filter out common Whisper hallucinations and spam
    const spamPhrases = [
      'napisy stworzone przez społeczność amara.org',
      'napisy stworzone przez spolecznosc amara.org',
      'subtitles by the amara.org community',
      'dziękuję za uwagę',
      'dziekuje za uwage',
      'thank you for watching',
      'thanks for watching',
      'przyłącz się do nas',
      'subscribe',
      'subskrybuj',
    ];

    // Check if transcription is just spam/hallucination
    const lowerText = transcribedText.toLowerCase().trim();
    const isSpam = spamPhrases.some(phrase => lowerText.includes(phrase.toLowerCase()));

    // Also check if it's too short (less than 2 characters) or empty
    const isTooShort = transcribedText.trim().length < 2;

    if (isSpam || isTooShort) {
      console.log('[Transcribe API] Filtering out spam/empty result');
      transcribedText = ''; // Return empty string for spam
    }

    return NextResponse.json({ text: transcribedText });

  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
