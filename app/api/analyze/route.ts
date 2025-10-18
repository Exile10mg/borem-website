import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper function to fetch page content
async function fetchPageContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    return await response.text();
  } catch (error) {
    throw new Error('Nie udało się pobrać strony');
  }
}

// Helper function to analyze SEO
function analyzeSEO(html: string, url: string) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descriptionMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const h1Matches = html.match(/<h1[^>]*>.*?<\/h1>/gi);

  const title = titleMatch ? titleMatch[1] : '';
  const description = descriptionMatch ? descriptionMatch[1] : '';
  const h1Count = h1Matches ? h1Matches.length : 0;

  let score = 100;
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Title analysis
  let titleStatus: 'good' | 'warning' | 'error' = 'good';
  let titleMessage = 'Tytuł strony jest prawidłowy';

  if (!title) {
    titleStatus = 'error';
    titleMessage = 'Brak tytułu strony';
    score -= 20;
    issues.push('Brak tytułu strony');
    recommendations.push('Dodaj unikalny tytuł strony (50-60 znaków)');
  } else if (title.length < 30) {
    titleStatus = 'warning';
    titleMessage = `Tytuł jest za krótki (${title.length} znaków)`;
    score -= 10;
    recommendations.push('Wydłuż tytuł do 50-60 znaków');
  } else if (title.length > 60) {
    titleStatus = 'warning';
    titleMessage = `Tytuł jest za długi (${title.length} znaków)`;
    score -= 5;
    recommendations.push('Skróć tytuł do maksymalnie 60 znaków');
  }

  // Description analysis
  let descriptionStatus: 'good' | 'warning' | 'error' = 'good';
  let descriptionMessage = 'Meta opis jest prawidłowy';

  if (!description) {
    descriptionStatus = 'error';
    descriptionMessage = 'Brak meta opisu';
    score -= 15;
    issues.push('Brak meta opisu');
    recommendations.push('Dodaj meta opis (150-160 znaków)');
  } else if (description.length < 120) {
    descriptionStatus = 'warning';
    descriptionMessage = `Meta opis jest za krótki (${description.length} znaków)`;
    score -= 5;
    recommendations.push('Wydłuż meta opis do 150-160 znaków');
  } else if (description.length > 160) {
    descriptionStatus = 'warning';
    descriptionMessage = `Meta opis jest za długi (${description.length} znaków)`;
    score -= 5;
    recommendations.push('Skróć meta opis do maksymalnie 160 znaków');
  }

  // Headings analysis
  let headingsStatus: 'good' | 'warning' | 'error' = 'good';
  let headingsMessage = 'Struktura nagłówków jest prawidłowa';

  if (h1Count === 0) {
    headingsStatus = 'error';
    headingsMessage = 'Brak nagłówka H1';
    score -= 15;
    issues.push('Brak nagłówka H1');
    recommendations.push('Dodaj jeden główny nagłówek H1');
  } else if (h1Count > 1) {
    headingsStatus = 'warning';
    headingsMessage = `Zbyt wiele nagłówków H1 (${h1Count})`;
    score -= 10;
    recommendations.push('Użyj tylko jednego nagłówka H1 na stronie');
  }

  // Extract keywords from title and description
  const keywords = [
    ...title.toLowerCase().split(/\s+/).filter(w => w.length > 4),
    ...(description ? description.toLowerCase().split(/\s+/).filter(w => w.length > 4) : []),
  ].slice(0, 10);

  return {
    score: Math.max(0, score),
    title: { status: titleStatus, message: titleMessage },
    description: { status: descriptionStatus, message: descriptionMessage },
    headings: { status: headingsStatus, message: headingsMessage },
    keywords,
    issues,
    recommendations,
  };
}

// Helper function to analyze performance
function analyzePerformance(html: string) {
  const pageSize = Buffer.byteLength(html, 'utf8');
  const scriptMatches = html.match(/<script[^>]*>.*?<\/script>/gi);
  const styleMatches = html.match(/<style[^>]*>.*?<\/style>/gi);
  const imgMatches = html.match(/<img[^>]*>/gi);

  const scriptCount = scriptMatches ? scriptMatches.length : 0;
  const styleCount = styleMatches ? styleMatches.length : 0;
  const imgCount = imgMatches ? imgMatches.length : 0;
  const totalRequests = scriptCount + styleCount + imgCount + 1; // +1 for HTML

  let score = 100;
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Page size analysis
  if (pageSize > 2000000) {
    score -= 30;
    issues.push('Strona jest bardzo duża');
    recommendations.push('Zminifikuj HTML, CSS i JavaScript');
    recommendations.push('Użyj kompresji GZIP/Brotli');
  } else if (pageSize > 1000000) {
    score -= 15;
    recommendations.push('Rozważ optymalizację rozmiaru strony');
  }

  // Scripts analysis
  if (scriptCount > 10) {
    score -= 15;
    issues.push('Zbyt wiele skryptów');
    recommendations.push('Połącz i zminifikuj pliki JavaScript');
  }

  // Images analysis
  if (imgCount > 20) {
    score -= 10;
    recommendations.push('Rozważ lazy loading dla obrazów');
    recommendations.push('Użyj nowoczesnych formatów obrazów (WebP, AVIF)');
  }

  // Simulate load time based on page size
  const loadTime = Math.round((pageSize / 500000) * 10) / 10; // Rough estimate

  return {
    score: Math.max(0, score),
    loadTime,
    pageSize,
    requests: totalRequests,
    issues,
    recommendations,
  };
}

// Helper function to analyze security
async function analyzeSecurity(url: string, html: string) {
  let score = 100;
  const issues: string[] = [];
  const recommendations: string[] = [];
  const headers: string[] = [];

  // HTTPS check
  const https = url.startsWith('https://');
  if (!https) {
    score -= 40;
    issues.push('Brak szyfrowania HTTPS');
    recommendations.push('Włącz certyfikat SSL/TLS');
  }

  // Check for security-related meta tags
  if (html.includes('Content-Security-Policy')) {
    headers.push('CSP');
    score += 5;
  } else {
    recommendations.push('Dodaj politykę Content-Security-Policy');
  }

  if (html.includes('X-Frame-Options') || html.includes('frame-ancestors')) {
    headers.push('X-Frame-Options');
  } else {
    score -= 10;
    recommendations.push('Dodaj nagłówek X-Frame-Options');
  }

  if (html.includes('X-Content-Type-Options')) {
    headers.push('X-Content-Type');
  } else {
    score -= 10;
    recommendations.push('Dodaj nagłówek X-Content-Type-Options');
  }

  // Check for forms without HTTPS
  if (!https && html.match(/<form[^>]*>/i)) {
    score -= 20;
    issues.push('Formularze bez szyfrowania');
    recommendations.push('Wszystkie formularze powinny być chronione HTTPS');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    https,
    headers,
    issues,
    recommendations,
  };
}

// Helper function to analyze mobile-friendliness
function analyzeMobile(html: string) {
  let score = 100;
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Viewport meta tag
  const viewport = html.match(/<meta[^>]*name=["']viewport["'][^>]*>/i);
  if (!viewport) {
    score -= 30;
    issues.push('Brak viewport meta tag');
    recommendations.push('Dodaj <meta name="viewport" content="width=device-width, initial-scale=1">');
  }

  // Check for responsive indicators
  const hasMediaQueries = html.includes('@media');
  const hasFlexbox = html.includes('display: flex') || html.includes('display:flex');
  const hasGrid = html.includes('display: grid') || html.includes('display:grid');

  const responsive = hasMediaQueries || hasFlexbox || hasGrid;

  if (!responsive) {
    score -= 30;
    issues.push('Brak oznak responsywnego designu');
    recommendations.push('Użyj CSS media queries dla responsywności');
    recommendations.push('Rozważ użycie Flexbox lub CSS Grid');
  }

  // Check for fixed width
  if (html.match(/width:\s*\d+px/i) && !hasMediaQueries) {
    score -= 15;
    recommendations.push('Unikaj stałych szerokości, użyj względnych jednostek');
  }

  return {
    score: Math.max(0, score),
    responsive,
    viewport: !!viewport,
    issues,
    recommendations,
  };
}

// Helper function to generate AI summary using OpenAI
async function generateAISummary(data: any): Promise<string> {
  try {
    const prompt = `Jesteś ekspertem SEO i web developmentu. Przeanalizuj poniższe dane i stwórz krótkie (2-3 zdania) podsumowanie stanu strony internetowej po polsku. Skup się na najważniejszych problemach i mocnych stronach.

URL: ${data.url}
SEO Score: ${data.seo.score}/100
Performance Score: ${data.performance.score}/100
Security Score: ${data.security.score}/100
Mobile Score: ${data.mobile.score}/100

Główne problemy:
${[...data.seo.issues, ...data.performance.issues, ...data.security.issues, ...data.mobile.issues].join(', ') || 'Brak poważnych problemów'}

Napisz profesjonalne, zwięzłe podsumowanie:`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || 'Analiza zakończona pomyślnie.';
  } catch (error) {
    console.error('AI Summary error:', error);
    return 'Strona została przeanalizowana. Sprawdź szczegółowe wyniki poniżej.';
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL jest wymagany' },
        { status: 400 }
      );
    }

    // Normalize URL
    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = 'https://' + normalizedUrl;
    }

    // Fetch page content
    const html = await fetchPageContent(normalizedUrl);

    // Run all analyses
    const seo = analyzeSEO(html, normalizedUrl);
    const performance = analyzePerformance(html);
    const security = await analyzeSecurity(normalizedUrl, html);
    const mobile = analyzeMobile(html);

    // Prepare data for AI summary
    const analysisData = {
      url: normalizedUrl,
      seo,
      performance,
      security,
      mobile,
      aiSummary: '',
    };

    // Generate AI summary
    analysisData.aiSummary = await generateAISummary(analysisData);

    return NextResponse.json(analysisData);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Wystąpił błąd podczas analizy' },
      { status: 500 }
    );
  }
}
