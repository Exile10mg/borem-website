// Google Analytics & Google Ads type declarations

interface Window {
  gtag_report_conversion?: (url?: string) => boolean;
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  fbq?: (...args: any[]) => void;
  _fbq?: any;
}
