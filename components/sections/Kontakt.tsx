'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faRocket,
  faPaperPlane,
  faCheckCircle,
  faUser,
  faBuilding,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
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

export default function Kontakt() {
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
        toast.success('Wiadomość wysłana pomyślnie! Odpowiemy w ciągu 24h.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10b981',
            color: '#fff',
            fontWeight: 'bold',
          },
        });

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
    <>
      <Toaster />
      <section
        id="kontakt"
        className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      >
        {/* Static background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

        {/* Static blobs */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Skontaktuj się z nami
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">Rozpocznijmy współpracę</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Twój projekt czeka
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Wypełnij formularz, a odezwiemy się w ciągu <span className="font-semibold text-white">24 godzin</span>.
              <br className="hidden sm:block" />
              Darmowa konsultacja i wycena bez zobowiązań!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-black text-white mb-6">Dlaczego warto się z nami skontaktować?</h3>
                <ul className="space-y-4">
                  {[
                    'Darmowa konsultacja i analiza potrzeb',
                    'Wycena w ciągu 24 godzin',
                    'Bez ukrytych kosztów i niespodzianek',
                    'Profesjonalne doradztwo technologiczne',
                    'Elastyczne warunki współpracy',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 font-bold">Online teraz</span>
                </div>
                <p className="text-sm text-gray-300">
                  Odpowiadamy w ciągu <strong className="text-white">15 minut</strong> w godzinach pracy (9:00-18:00)
                </p>
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

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-white mb-2">
                        <FontAwesomeIcon icon={faRocket} className="mr-2 text-green-400" />
                        Interesująca usługa *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="" className="bg-gray-900">Wybierz usługę</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-900">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
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
    </>
  );
}
