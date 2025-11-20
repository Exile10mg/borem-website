'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faRocket,
  faPaperPlane,
  faCheckCircle,
  faUser,
  faBuilding,
  faComments,
  faClock,
  faHeadset,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import toast, { Toaster } from 'react-hot-toast';

const services = [
  'Strony WWW',
  'E-commerce',
  'Aplikacje Webowe',
  'AI & Automatyzacja',
  'Marketing & SEO',
  'Redesign istniejącej strony',
  'Konsultacja',
  'Inne',
];

const budgets = [
  'Do 5 000 zł',
  '5 000 - 10 000 zł',
  '10 000 - 25 000 zł',
  '25 000 - 50 000 zł',
  'Powyżej 50 000 zł',
  'Nie wiem jeszcze',
];

const benefits = [
  {
    icon: faClock,
    title: 'Szybka odpowiedź',
    description: 'Odpowiadamy w ciągu 24 godzin',
  },
  {
    icon: faHeadset,
    title: 'Wsparcie 24/7',
    description: 'Jesteśmy zawsze dostępni',
  },
  {
    icon: faShieldAlt,
    title: 'Poufność',
    description: 'Twoje dane są bezpieczne',
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [highlightService, setHighlightService] = useState(false);

  // Check if user came from "Free Consultation" button
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('konsultacja') === 'true') {
      setFormData((prev) => ({
        ...prev,
        service: 'Konsultacja',
      }));
      setHighlightService(true);

      // Remove highlight after animation
      setTimeout(() => setHighlightService(false), 3000);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);

        // Report conversion to Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
          (window as any).gtag_report_conversion();
        }

        toast.success('Wiadomość wysłana pomyślnie! Odpowiemy w ciągu 24h.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10b981',
            color: '#fff',
            fontWeight: 'bold',
          },
        });

        // Reset after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
        }, 5000);
      } else {
        toast.error(data.error || 'Wystąpił błąd podczas wysyłania wiadomości', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#ef4444',
            color: '#fff',
            fontWeight: 'bold',
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Toaster />
      <Navbar />
      

      {/* Hero Section - STATIC */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                  <span>Strona główna</span>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-600" />
              </li>
              <li>
                <span className="text-white font-semibold">Kontakt</span>
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Bezpłatna Konsultacja
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">Skontaktuj się</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                z nami
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Wypełnij formularz, zadzwoń lub napisz. Odpowiadamy w ciągu{' '}
              <span className="font-bold text-white">24 godzin</span>.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={benefit.icon} className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - STATIC */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-white mb-4">Dane kontaktowe</h2>
                <p className="text-gray-400 leading-relaxed">
                  Preferujesz bezpośredni kontakt? Zadzwoń lub napisz na email. Jesteśmy tu dla Ciebie!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:kontakt@borem.pl"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/30 hover:translate-x-1 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-lg font-bold text-white">kontakt@borem.pl</div>
                  </div>
                </a>

                <a
                  href="tel:+48787041328"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 hover:translate-x-1 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Telefon</div>
                    <div className="text-lg font-bold text-white">+48 787 041 328</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Adres</div>
                    <div className="text-lg font-bold text-white">ul. Różana 28/66, 20-538 Lublin</div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Dane firmy</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nazwa:</span>
                    <span className="text-white font-semibold">Borem Michał Boryń</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">NIP:</span>
                    <span className="text-white font-semibold">7123429572</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">REGON:</span>
                    <span className="text-white font-semibold">520995990</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
              >
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Dziękujemy za wiadomość!</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 24 godzin.
                      <br />
                      Sprawdź swoją skrzynkę email!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                          <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-400" />
                          Imię i nazwisko *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Jan Kowalski"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-purple-400" />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                          <FontAwesomeIcon icon={faPhone} className="mr-2 text-pink-400" />
                          Telefon (opcjonalnie)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="+48 123 456 789"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                          <FontAwesomeIcon icon={faBuilding} className="mr-2 text-cyan-400" />
                          Firma (opcjonalnie)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="Nazwa firmy"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Service */}
                      <div className={`rounded-xl ${highlightService ? 'ring-2 ring-green-500/50' : ''}`}>
                        <label htmlFor="service" className="block text-sm font-bold text-white mb-2">
                          <FontAwesomeIcon icon={faRocket} className="mr-2 text-green-400" />
                          Interesująca usługa *
                        </label>
                        {highlightService && (
                          <div className="text-xs text-green-400 font-normal mb-2 -mt-1">
                            ✓ Wybrano automatycznie
                          </div>
                        )}
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                            highlightService
                              ? 'border-green-500/50 bg-green-500/10'
                              : 'border-white/10'
                          }`}
                        >
                          <option value="" className="bg-gray-900">Wybierz usługę</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-gray-900">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-sm font-bold text-white mb-2">
                          Budżet (opcjonalnie)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                        >
                          <option value="" className="bg-gray-900">Wybierz przedział budżetowy</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget} className="bg-gray-900">
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                        <FontAwesomeIcon icon={faComments} className="mr-2 text-orange-400" />
                        Wiadomość *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                        placeholder="Opisz swój projekt, cele biznesowe i oczekiwania..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Wysyłanie...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                            Wyślij wiadomość
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Wypełniając formularz akceptujesz naszą{' '}
                      <a href="/polityka-prywatnosci" className="text-blue-400 hover:text-blue-300 underline">
                        politykę prywatności
                      </a>
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
