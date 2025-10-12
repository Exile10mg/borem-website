import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Walidacja
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Wszystkie wymagane pola muszą być wypełnione' },
        { status: 400 }
      );
    }

    // Wysyłka emaila
    const { data, error } = await resend.emails.send({
      from: 'Formularz Kontaktowy <onboarding@resend.dev>', // To będzie zmienione na Twój zweryfikowany email
      to: [process.env.CONTACT_EMAIL || 'kontakt@borem.pl'],
      replyTo: email,
      subject: `Nowa wiadomość: ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: 600;
                color: #667eea;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
                word-wrap: break-word;
              }
              .message {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #764ba2;
                margin-top: 20px;
                white-space: pre-wrap;
              }
              .footer {
                background: #1f2937;
                color: #9ca3af;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 10px 10px;
                font-size: 12px;
              }
              .badge {
                display: inline-block;
                background: #10b981;
                color: white;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nowa wiadomość z formularza kontaktowego</h1>
              <div class="badge">Borem.pl</div>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Imię i nazwisko</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Telefon</div>
                <div class="value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${company ? `
              <div class="field">
                <div class="label">🏢 Firma</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🎯 Interesująca usługa</div>
                <div class="value"><strong>${service}</strong></div>
              </div>
              
              ${budget ? `
              <div class="field">
                <div class="label">💰 Budżet</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              
              <div class="message">
                <div class="label">💬 Wiadomość</div>
                <div class="value" style="margin-top: 10px;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Ta wiadomość została wysłana z formularza kontaktowego na stronie <strong>Borem.pl</strong></p>
              <p>Odpowiedz bezpośrednio na ten email, aby skontaktować się z klientem.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Błąd podczas wysyłania emaila' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email wysłany pomyślnie', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Błąd serwera' },
      { status: 500 }
    );
  }
}
