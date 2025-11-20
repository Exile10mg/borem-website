/**
 * Google Analytics 4 & Facebook Pixel Component
 *
 * Implements Google Consent Mode v2 - GA loads ALWAYS but in "denied" state
 * until user accepts cookies. This ensures Meta Ads clicks are tracked.
 *
 * Setup:
 * 1. Google Analytics: Already configured (G-8VMY8NJXJL)
 * 2. Facebook Pixel: Add NEXT_PUBLIC_FB_PIXEL_ID to .env.local
 *    - Find it in: https://business.facebook.com/events_manager
 *    - Look for "Pixel ID" (usually 15-16 digits)
 *
 * How it works:
 * - GA & FB Pixel load immediately on page load
 * - Initially in "denied" consent mode (privacy-safe, anonymous tracking)
 * - When user accepts cookies → switches to "granted" mode
 * - This way ALL visitors are tracked (even without accepting cookies)
 */
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  useEffect(() => {
    // Update consent when user makes a choice
    const handleStorageChange = () => {
      const savedConsent = localStorage.getItem('cookieConsent');
      if (savedConsent && typeof window !== 'undefined' && (window as any).gtag) {
        try {
          const parsed = JSON.parse(savedConsent);
          (window as any).gtag('consent', 'update', {
            'analytics_storage': parsed.analytics ? 'granted' : 'denied',
            'ad_storage': parsed.marketing ? 'granted' : 'denied',
          });

          // Update Facebook Pixel consent
          if (parsed.marketing && (window as any).fbq) {
            (window as any).fbq('consent', 'grant');
          } else if ((window as any).fbq) {
            (window as any).fbq('consent', 'revoke');
          }
        } catch (e) {
          console.error('Error parsing consent:', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Always load GA if measurement ID exists (Consent Mode v2)
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics with Consent Mode v2 */}
      <Script
        id="google-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to denied (BEFORE GA loads)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });

            gtag('js', new Date());
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              send_page_view: true
            });

            // Google Ads Conversion tracking function - Formularz kontaktowy Borem.pl
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16494963719/qyZ9CNye4MMbEIfYtLk9',
                'event_callback': callback
              });
              return false;
            };
          `,
        }}
      />

      {/* Facebook Pixel */}
      {FB_PIXEL_ID && (
        <>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('consent', 'revoke');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        </>
      )}
    </>
  );
}
