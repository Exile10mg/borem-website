import Script from 'next/script';

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Borem.pl",
    "alternateName": "Borem - Agencja Marketingowa",
    "url": "https://borem.pl",
    "logo": "https://borem.pl/logo.png",
    "description": "Profesjonalna agencja marketingowa specjalizująca się w tworzeniu stron WWW, sklepów e-commerce, aplikacji webowych, rozwiązań AI i automatyzacji oraz marketingu SEO.",
    "email": "kontakt@borem.pl",
    "telephone": "+48787041328",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressLocality": "Polska"
    },
    "sameAs": [
      "https://www.facebook.com/borem.pl",
      "https://www.linkedin.com/company/borem-pl",
      "https://twitter.com/borempl"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Polska"
    },
    "priceRange": "$$"
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Borem.pl",
    "url": "https://borem.pl",
    "description": "Tworzymy nowoczesne strony WWW, sklepy e-commerce, aplikacje webowe. Specjalizujemy się w AI, automatyzacji, marketingu i SEO.",
    "publisher": {
      "@type": "Organization",
      "name": "Borem.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://borem.pl/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://borem.pl/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Services Schema - LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Borem.pl - Agencja Marketingowa",
    "image": "https://borem.pl/og-image.jpg",
    "url": "https://borem.pl",
    "telephone": "+48787041328",
    "email": "kontakt@borem.pl",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "PL"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/borem.pl",
      "https://www.linkedin.com/company/borem-pl"
    ]
  };

  // Service Schema - Multiple Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Tworzenie Stron WWW",
        "provider": {
          "@type": "Organization",
          "name": "Borem.pl"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Projektowanie i tworzenie nowoczesnych, responsywnych stron internetowych. Strony wizytówki, landing page, strony firmowe.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Strony WWW",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Strona wizytówka",
                "description": "Profesjonalna strona wizytówka dla małych firm"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Strona firmowa",
                "description": "Rozbudowana strona korporacyjna z CMS"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing page",
                "description": "Konwersyjna strona docelowa dla kampanii marketingowych"
              }
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Sklepy E-Commerce",
        "provider": {
          "@type": "Organization",
          "name": "Borem.pl"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Profesjonalne sklepy internetowe z integracją płatności, zarządzaniem produktami i optymalizacją sprzedaży."
      },
      {
        "@type": "Service",
        "serviceType": "Aplikacje Webowe",
        "provider": {
          "@type": "Organization",
          "name": "Borem.pl"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Dedykowane aplikacje webowe, panele administracyjne, systemy CRM i ERP."
      },
      {
        "@type": "Service",
        "serviceType": "AI i Automatyzacja",
        "provider": {
          "@type": "Organization",
          "name": "Borem.pl"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Rozwiązania AI, chatboty, automatyzacja procesów biznesowych, integracje API."
      },
      {
        "@type": "Service",
        "serviceType": "Marketing i SEO",
        "provider": {
          "@type": "Organization",
          "name": "Borem.pl"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Polska"
        },
        "description": "Kompleksowy marketing internetowy, pozycjonowanie SEO, kampanie Google Ads, content marketing."
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile kosztuje stworzenie strony internetowej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Koszt stworzenia strony internetowej zależy od jej złożoności i funkcjonalności. Proste strony wizytówki zaczynają się od kilku tysięcy złotych, podczas gdy zaawansowane projekty e-commerce czy aplikacje mogą kosztować kilkadziesiąt tysięcy. Oferujemy bezpłatną konsultację i wycenę dostosowaną do Twoich potrzeb."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo trwa proces tworzenia strony WWW?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas realizacji zależy od zakresu projektu. Prosta strona wizytówka może być gotowa w 2-3 tygodnie, bardziej złożone projekty jak sklepy e-commerce czy aplikacje webowe mogą zająć od 6 do 12 tygodni. Wszystko zależy od liczby funkcjonalności i wymagań projektowych."
        }
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie wsparcie po zakończeniu projektu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy pełne wsparcie techniczne po zakończeniu projektu. Obejmuje to aktualizacje, naprawy błędów, optymalizację oraz szkolenia z obsługi systemu. Możesz wybrać pakiet opieki dostosowany do Twoich potrzeb."
        }
      },
      {
        "@type": "Question",
        "name": "Czy strony są responsywne i zoptymalizowane pod SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wszystkie nasze strony są w pełni responsywne (dostosowane do urządzeń mobilnych) i zoptymalizowane pod kątem SEO. Dbamy o szybkość ładowania, poprawną strukturę HTML, meta tagi, i inne czynniki rankingowe Google."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę samodzielnie edytować treści na stronie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, wszystkie nasze strony wyposażamy w intuicyjne panele CMS (Content Management System), które umożliwiają samodzielną edycję treści, dodawanie zdjęć, tworzenie nowych podstron bez znajomości programowania. Przeprowadzimy również szkolenie z obsługi systemu."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://borem.pl"
      }
    ]
  };

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Services Schema */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
