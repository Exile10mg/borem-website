'use client';

import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl: string;
}

export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  useEffect(() => {
    // FAQPage Schema for Google Featured Snippets
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // HowTo Schema (optional - jeśli post ma steps)
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak stworzyć branding dla lokalnej firmy',
      description: 'Kompleksowy przewodnik tworzenia brandingu dla firm w Lublinie',
      totalTime: 'P3M', // 3 months
      step: [
        {
          '@type': 'HowToStep',
          name: 'Strategia marki',
          text: 'Zdefiniuj misję, wizję, wartości i target audience Twojej firmy.',
          position: 1,
        },
        {
          '@type': 'HowToStep',
          name: 'Projektowanie logo',
          text: 'Stwórz unikalne, memorable logo które reprezentuje Twoją markę.',
          position: 2,
        },
        {
          '@type': 'HowToStep',
          name: 'Identyfikacja wizualna',
          text: 'Opracuj kompletną paletę kolorów, typografię i style guide.',
          position: 3,
        },
        {
          '@type': 'HowToStep',
          name: 'Aplikacja brandingu',
          text: 'Wdróż branding we wszystkich materiałach - print, digital, signage.',
          position: 4,
        },
        {
          '@type': 'HowToStep',
          name: 'Budowanie rozpoznawalności',
          text: 'Promuj markę lokalnie przez social media, eventy i partnerstwa.',
          position: 5,
        },
      ],
    };

    // Insert schemas
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify([faqSchema, howToSchema]);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [faqs, pageUrl]);

  return null;
}
