'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChartLine,
  faShieldAlt,
  faRocket,
  faMobileAlt,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
  faSpinner,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function AnalizaPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [error, setError] = useState('');

  const analysisSteps = [
    { text: 'Pobieranie strony...', icon: faSpinner },
    { text: 'Analiza SEO...', icon: faChartLine },
    { text: 'Test wydajności...', icon: faRocket },
    { text: 'Sprawdzanie bezpieczeństwa...', icon: faShieldAlt },
    { text: 'Generowanie rekomendacji AI...', icon: faCheckCircle },
  ];

  const validateUrl = (input: string): boolean => {
    try {
      const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
      return urlPattern.test(input);
    } catch {
      return false;
    }
  };

  const handleAnalyze = async () => {
    setError('');

    if (!url.trim()) {
      setError('Proszę wpisać adres strony');
      return;
    }

    if (!validateUrl(url)) {
      setError('Nieprawidłowy format URL. Przykład: https://example.com');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisStep(0);

    // Simulate analysis steps
    for (let i = 0; i < analysisSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAnalysisStep(i + 1);
    }

    // TODO: Actual API call will go here
    setTimeout(() => {
      setIsAnalyzing(false);
      // Navigate to results
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden relative flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 w-full" style={{ maxHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          {!isAnalyzing ? (
            // Main form
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="inline-block mb-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-3">
                      <FontAwesomeIcon icon={faSearch} className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Darmowy Audyt Strony
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-2">
                  Odkryj co psuje Twoją stronę
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Profesjonalny raport w <span className="text-blue-400 font-bold">10 sekund</span> ⚡
                </p>
              </motion.div>

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
              >
                {[
                  { icon: faChartLine, text: 'SEO Score', color: 'from-blue-600 to-cyan-600' },
                  { icon: faRocket, text: 'Performance', color: 'from-purple-600 to-pink-600' },
                  { icon: faShieldAlt, text: 'Security', color: 'from-green-600 to-emerald-600' },
                  { icon: faMobileAlt, text: 'Mobile-First', color: 'from-orange-600 to-red-600' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl"
                      style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    ></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 text-center hover:border-gray-600 transition-all duration-300">
                      <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs md:text-sm text-gray-300">{feature.text}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Input section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="https://twoja-strona.pl"
                        className="w-full bg-gray-900/50 text-white rounded-xl px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder:text-gray-600"
                      />
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-8 left-0 text-red-400 text-sm flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />
                          {error}
                        </motion.div>
                      )}
                    </div>
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-full md:w-auto"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Analizuj
                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                  </div>

                  {/* Example links */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <span>Przykłady:</span>
                    {['nike.com', 'apple.com', 'tesla.com'].map((example) => (
                      <button
                        key={example}
                        onClick={() => setUrl(`https://${example}`)}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-center"
              >
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <span>100% darmowe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <span>Bez rejestracji</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <span>Wyniki w 10s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <span>AI-Powered</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // Loading state
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Analizuję: <span className="text-blue-400">{url}</span>
                </h2>
                <p className="text-gray-500">To zajmie tylko chwilę...</p>
              </div>

              {/* Progress bar */}
              <div className="mb-12">
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(analysisStep / analysisSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500">
                  {Math.round((analysisStep / analysisSteps.length) * 100)}%
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {analysisSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                      index < analysisStep
                        ? 'border-green-500 bg-green-500/10'
                        : index === analysisStep
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 bg-gray-800/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      index < analysisStep
                        ? 'bg-green-500'
                        : index === analysisStep
                        ? 'bg-blue-500 animate-pulse'
                        : 'bg-gray-700'
                    }`}>
                      <FontAwesomeIcon
                        icon={index < analysisStep ? faCheckCircle : index === analysisStep ? faSpinner : step.icon}
                        className={`w-5 h-5 text-white ${index === analysisStep ? 'animate-spin' : ''}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${
                        index < analysisStep
                          ? 'text-green-400'
                          : index === analysisStep
                          ? 'text-blue-400'
                          : 'text-gray-500'
                      }`}>
                        {step.text}
                      </div>
                    </div>
                    {index < analysisStep && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-green-400"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Fun fact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center text-gray-500 text-sm"
              >
                💡 <span className="italic">Czy wiesz, że 53% użytkowników opuszcza stronę, która ładuje się dłużej niż 3 sekundy?</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
