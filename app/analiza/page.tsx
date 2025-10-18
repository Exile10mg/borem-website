'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faShieldAlt,
  faRocket,
  faMobileAlt,
  faCheckCircle,
  faExclamationTriangle,
  faSpinner,
  faArrowRight,
  faArrowLeft,
  faExclamationCircle,
  faLightbulb,
  faGlobe,
  faInfoCircle,
  faTimes,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

type AnalysisData = {
  url: string;
  seo: {
    score: number;
    title: { status: 'good' | 'warning' | 'error'; message: string };
    description: { status: 'good' | 'warning' | 'error'; message: string };
    headings: { status: 'good' | 'warning' | 'error'; message: string };
    keywords: string[];
    issues: string[];
    recommendations: string[];
  };
  performance: {
    score: number;
    loadTime: number;
    pageSize: number;
    requests: number;
    issues: string[];
    recommendations: string[];
  };
  security: {
    score: number;
    https: boolean;
    headers: string[];
    issues: string[];
    recommendations: string[];
  };
  mobile: {
    score: number;
    responsive: boolean;
    viewport: boolean;
    issues: string[];
    recommendations: string[];
  };
  aiSummary: string;
};

export default function AnalizaPage() {
  const [currentView, setCurrentView] = useState<'home' | 'analyzing' | 'report'>('home');
  const [url, setUrl] = useState('');
  const [analysisStep, setAnalysisStep] = useState(0);
  const [error, setError] = useState('');
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const analysisSteps = [
    { text: 'Pobieranie strony...', icon: faGlobe },
    { text: 'Analiza SEO...', icon: faChartLine },
    { text: 'Test wydajności...', icon: faRocket },
    { text: 'Sprawdzanie bezpieczeństwa...', icon: faShieldAlt },
    { text: 'Generowanie rekomendacji AI...', icon: faLightbulb },
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

    setCurrentView('analyzing');
    setAnalysisStep(0);

    try {
      // Simulate progress through steps
      for (let i = 0; i < analysisSteps.length; i++) {
        setAnalysisStep(i);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Call API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Błąd podczas analizy');
      }

      const data = await response.json();
      setAnalysisData(data);
      setAnalysisStep(analysisSteps.length);

      await new Promise(resolve => setTimeout(resolve, 500));
      setCurrentView('report');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas analizy');
      setCurrentView('home');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  const resetAnalysis = () => {
    setCurrentView('home');
    setUrl('');
    setError('');
    setAnalysisStep(0);
    setAnalysisData(null);
  };

  const downloadReport = async () => {
    setIsDownloading(true);
    try {
      // Dynamic import html2canvas
      const html2canvas = (await import('html2canvas')).default;

      const reportElement = document.getElementById('report-content');
      if (!reportElement) return;

      const canvas = await html2canvas(reportElement, {
        backgroundColor: '#0a0a0a',
        scale: 2,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `raport-${analysisData?.url.replace(/https?:\/\//, '').replace(/\//g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Błąd podczas pobierania raportu:', error);
      alert('Wystąpił błąd podczas pobierania raportu. Spróbuj ponownie.');
    } finally {
      setIsDownloading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-600 to-emerald-600';
    if (score >= 50) return 'from-yellow-600 to-orange-600';
    return 'from-red-600 to-rose-600';
  };

  const getStatusIcon = (status: 'good' | 'warning' | 'error') => {
    if (status === 'good') return faCheckCircle;
    if (status === 'warning') return faExclamationTriangle;
    return faExclamationCircle;
  };

  const getStatusColor = (status: 'good' | 'warning' | 'error') => {
    if (status === 'good') return 'text-green-400';
    if (status === 'warning') return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>

      {/* Logo - tylko na home view */}
      {currentView === 'home' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 pt-8 pb-4 container mx-auto px-4"
        >
          <div className="flex justify-center">
            <a href="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                  <span className="text-white font-black text-2xl relative z-10 drop-shadow-lg">B</span>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-40 group-hover:opacity-80 transition-opacity"></div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black text-white tracking-tight">Borem</span>
                  <span className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
                </div>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <p className="text-[9px] text-gray-400 font-semibold tracking-[0.15em] uppercase whitespace-nowrap">
                    Agencja Marketingowa
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-4">
        <AnimatePresence mode="wait">
          {/* HOME VIEW */}
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
              >
                {[
                  { icon: faChartLine, text: 'SEO Score', desc: 'Optymalizacja', color: 'from-blue-600 to-cyan-600' },
                  { icon: faRocket, text: 'Performance', desc: 'Wydajność', color: 'from-purple-600 to-pink-600' },
                  { icon: faShieldAlt, text: 'Security', desc: 'Bezpieczeństwo', color: 'from-green-600 to-emerald-600' },
                  { icon: faMobileAlt, text: 'Mobile', desc: 'Responsywność', color: 'from-orange-600 to-red-600' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-bold text-white mb-0.5">{feature.text}</div>
                      <div className="text-[10px] text-gray-500">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Input section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative mb-6"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-5">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="https://twoja-strona.pl"
                        className="w-full bg-gray-900/50 text-white rounded-xl px-5 py-3 text-base border-2 border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder:text-gray-600"
                      />
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-7 left-0 text-red-400 text-xs flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3" />
                          {error}
                        </motion.div>
                      )}
                    </div>
                    <button
                      onClick={handleAnalyze}
                      className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto touch-manipulation"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Analizuj
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Example links - rozbudowane */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold">Popularne:</span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { url: 'nike.com', badge: 'Sport' },
                          { url: 'apple.com', badge: 'Tech' },
                          { url: 'amazon.com', badge: 'E-commerce' },
                        ].map((example) => (
                          <button
                            key={example.url}
                            onClick={() => setUrl(`https://${example.url}`)}
                            className="group flex items-center gap-1.5 px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all touch-manipulation"
                          >
                            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">{example.url}</span>
                            <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded">{example.badge}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold">Więcej:</span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { url: 'wikipedia.org', badge: 'Edukacja' },
                          { url: 'spotify.com', badge: 'Muzyka' },
                          { url: 'netflix.com', badge: 'Streaming' },
                        ].map((example) => (
                          <button
                            key={example.url}
                            onClick={() => setUrl(`https://${example.url}`)}
                            className="group flex items-center gap-1.5 px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500/50 rounded-lg transition-all touch-manipulation"
                          >
                            <span className="text-purple-400 group-hover:text-purple-300 transition-colors">{example.url}</span>
                            <span className="text-[9px] px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded">{example.badge}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center mb-4"
              >
                <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-xs">
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-400" />
                    <span>100% darmowe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-400" />
                    <span>Bez rejestracji</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-400" />
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-400" />
                    <span>Instant Results</span>
                  </div>
                </div>
              </motion.div>

              {/* Info button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <button
                  onClick={() => setShowInfoModal(true)}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-xs touch-manipulation"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="w-3 h-3" />
                  Jak to działa? Regulamin
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* ANALYZING VIEW */}
          {currentView === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto flex flex-col justify-center min-h-[70vh]"
            >
              {/* Header with animated icon */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="inline-block mb-4"
                >
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-50"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Analizuję: <span className="text-blue-400 break-all text-xl md:text-2xl">{url}</span>
                </h2>
                <p className="text-gray-500 text-sm">To zajmie tylko chwilę...</p>
              </div>

              {/* Circular progress */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-800"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 352" }}
                      animate={{
                        strokeDasharray: `${(analysisStep / analysisSteps.length) * 352} 352`
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Percentage text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      key={analysisStep}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      {Math.round((analysisStep / analysisSteps.length) * 100)}%
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Steps as Cards - Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {analysisSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative group h-full`}
                  >
                    {/* Card */}
                    <div className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center h-full flex flex-col justify-between ${
                      index < analysisStep
                        ? 'border-green-500/50 bg-green-500/10 shadow-lg shadow-green-500/20'
                        : index === analysisStep
                        ? 'border-blue-500 bg-blue-500/10 shadow-xl shadow-blue-500/30 scale-105'
                        : 'border-gray-700/50 bg-gray-800/20'
                    }`}>
                      <div>
                        {/* Icon */}
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          index < analysisStep
                            ? 'bg-green-500 shadow-lg shadow-green-500/50'
                            : index === analysisStep
                            ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                            : 'bg-gray-700'
                        }`}>
                          <FontAwesomeIcon
                            icon={index < analysisStep ? faCheckCircle : index === analysisStep ? faSpinner : step.icon}
                            className={`w-6 h-6 text-white ${index === analysisStep ? 'animate-spin' : ''}`}
                          />
                        </div>

                        {/* Text */}
                        <div className={`font-semibold text-xs leading-tight min-h-[32px] flex items-center justify-center ${
                          index < analysisStep
                            ? 'text-green-400'
                            : index === analysisStep
                            ? 'text-blue-400'
                            : 'text-gray-500'
                        }`}>
                          {step.text}
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className="mt-2 flex justify-center h-6">
                        {index < analysisStep && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="text-green-400 text-xl font-bold"
                          >
                            ✓
                          </motion.div>
                        )}
                        {index === analysisStep && (
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex gap-1 items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          </motion.div>
                        )}
                      </div>

                      {/* Active glow effect */}
                      {index === analysisStep && (
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-50 blur -z-10"
                        />
                      )}
                    </div>

                    {/* Step number badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index < analysisStep
                        ? 'bg-green-500 text-white'
                        : index === analysisStep
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fun fact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
                  <span className="text-xl">💡</span>
                  <span className="text-xs text-gray-400 italic">
                    {analysisStep < 2 && "Sprawdzam strukturę Twojej strony..."}
                    {analysisStep === 2 && "Analizuję szybkość ładowania..."}
                    {analysisStep === 3 && "Testuję zabezpieczenia..."}
                    {analysisStep >= 4 && "AI generuje rekomendacje..."}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* REPORT VIEW */}
          {currentView === 'report' && analysisData && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto py-4"
            >
              {/* Report Container for Screenshot */}
              <div id="report-content" className="bg-gradient-to-br from-gray-950 via-gray-900 to-black">
                {/* Logo - tylko w raporcie */}
                <div className="flex justify-center pt-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 blur-sm"></div>
                      <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                        <span className="text-white font-black text-xl relative z-10 drop-shadow-lg">B</span>
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full opacity-40"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-lg font-black text-white tracking-tight">Borem</span>
                        <span className="text-lg font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
                      </div>
                      <p className="text-[8px] text-gray-400 font-semibold tracking-[0.15em] uppercase">Agencja Marketingowa</p>
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="text-center mb-6 px-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Raport Analizy
                  </h2>
                  <p className="text-gray-400 text-sm break-all">{analysisData.url}</p>
                </div>

                {/* Score Cards - Inside report */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 px-4">
                  {[
                    { label: 'SEO', score: analysisData.seo.score, icon: faChartLine, gradient: getScoreGradient(analysisData.seo.score) },
                    { label: 'Performance', score: analysisData.performance.score, icon: faRocket, gradient: getScoreGradient(analysisData.performance.score) },
                    { label: 'Security', score: analysisData.security.score, icon: faShieldAlt, gradient: getScoreGradient(analysisData.security.score) },
                    { label: 'Mobile', score: analysisData.mobile.score, icon: faMobileAlt, gradient: getScoreGradient(analysisData.mobile.score) },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-3xl font-bold mb-1 ${getScoreColor(item.score)}`}>
                        {item.score}
                      </div>
                      <div className="text-gray-400 text-xs font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* AI Summary - Inside report */}
                <div className="px-4 pb-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-2">Podsumowanie AI</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{analysisData.aiSummary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - outside screenshot area */}
              <div className="flex flex-wrap justify-center gap-3 my-6">
                <button
                  onClick={downloadReport}
                  disabled={isDownloading}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/50 text-white px-6 py-3 rounded-xl transition-all text-sm flex items-center gap-2 touch-manipulation hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon={faDownload} className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  {isDownloading ? 'Pobieranie...' : 'Pobierz raport PNG'}
                </button>
                <button
                  onClick={resetAnalysis}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors text-sm flex items-center gap-2 touch-manipulation hover:scale-105"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                  Nowa analiza
                </button>
              </div>

              {/* Detailed Stats - Outside screenshot, expandable */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3">Podsumowanie AI</h3>
                      <p className="text-gray-300 text-base leading-relaxed">{analysisData.aiSummary}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Score Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                {[
                  { label: 'SEO', score: analysisData.seo.score, icon: faChartLine, gradient: getScoreGradient(analysisData.seo.score) },
                  { label: 'Performance', score: analysisData.performance.score, icon: faRocket, gradient: getScoreGradient(analysisData.performance.score) },
                  { label: 'Security', score: analysisData.security.score, icon: faShieldAlt, gradient: getScoreGradient(analysisData.security.score) },
                  { label: 'Mobile', score: analysisData.mobile.score, icon: faMobileAlt, gradient: getScoreGradient(analysisData.mobile.score) },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="relative group"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all hover:scale-105">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center`}>
                        <FontAwesomeIcon icon={item.icon} className="w-8 h-8 text-white" />
                      </div>
                      <div className={`text-4xl md:text-5xl font-bold mb-2 ${getScoreColor(item.score)}`}>
                        {item.score}
                      </div>
                      <div className="text-gray-400 text-sm font-semibold">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Detailed Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* SEO Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">SEO</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon icon={getStatusIcon(analysisData.seo.title.status)} className={`w-5 h-5 mt-0.5 ${getStatusColor(analysisData.seo.title.status)}`} />
                      <div className="flex-1">
                        <span className="text-sm text-gray-300">{analysisData.seo.title.message}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon icon={getStatusIcon(analysisData.seo.description.status)} className={`w-5 h-5 mt-0.5 ${getStatusColor(analysisData.seo.description.status)}`} />
                      <div className="flex-1">
                        <span className="text-sm text-gray-300">{analysisData.seo.description.message}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon icon={getStatusIcon(analysisData.seo.headings.status)} className={`w-5 h-5 mt-0.5 ${getStatusColor(analysisData.seo.headings.status)}`} />
                      <div className="flex-1">
                        <span className="text-sm text-gray-300">{analysisData.seo.headings.message}</span>
                      </div>
                    </div>
                  </div>

                  {analysisData.seo.recommendations.length > 0 && (
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Rekomendacje</h4>
                      <ul className="space-y-2">
                        {analysisData.seo.recommendations.slice(0, 3).map((rec, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">→</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                {/* Performance Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Performance</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-purple-400">{analysisData.performance.loadTime}s</div>
                      <div className="text-xs text-gray-500 mt-1">Czas ładowania</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-purple-400">{Math.round(analysisData.performance.pageSize / 1024)}KB</div>
                      <div className="text-xs text-gray-500 mt-1">Rozmiar</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-purple-400">{analysisData.performance.requests}</div>
                      <div className="text-xs text-gray-500 mt-1">Żądania</div>
                    </div>
                  </div>

                  {analysisData.performance.recommendations.length > 0 && (
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Rekomendacje</h4>
                      <ul className="space-y-2">
                        {analysisData.performance.recommendations.slice(0, 3).map((rec, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">→</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                {/* Security Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Security</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">HTTPS</span>
                      <span className={analysisData.security.https ? 'text-green-400' : 'text-red-400'}>
                        {analysisData.security.https ? '✓ Aktywne' : '✗ Brak'}
                      </span>
                    </div>
                    {analysisData.security.headers.length > 0 && (
                      <div>
                        <span className="text-sm text-gray-400 block mb-2">Nagłówki bezpieczeństwa:</span>
                        <div className="flex flex-wrap gap-2">
                          {analysisData.security.headers.map((header, i) => (
                            <span key={i} className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                              {header}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {analysisData.security.recommendations.length > 0 && (
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Rekomendacje</h4>
                      <ul className="space-y-2">
                        {analysisData.security.recommendations.slice(0, 3).map((rec, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">→</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                {/* Mobile Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faMobileAlt} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Mobile</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Responsywność</span>
                      <span className={analysisData.mobile.responsive ? 'text-green-400' : 'text-red-400'}>
                        {analysisData.mobile.responsive ? '✓ Tak' : '✗ Nie'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Viewport Meta</span>
                      <span className={analysisData.mobile.viewport ? 'text-green-400' : 'text-red-400'}>
                        {analysisData.mobile.viewport ? '✓ Tak' : '✗ Nie'}
                      </span>
                    </div>
                  </div>

                  {analysisData.mobile.recommendations.length > 0 && (
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Rekomendacje</h4>
                      <ul className="space-y-2">
                        {analysisData.mobile.recommendations.slice(0, 3).map((rec, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-orange-400 mt-0.5">→</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowInfoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setShowInfoModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Jak to działa?
              </h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Co analizujemy?</h3>
                  <p className="leading-relaxed">
                    Nasz darmowy audyt strony internetowej sprawdza 4 kluczowe obszary: SEO (optymalizacja pod wyszukiwarki),
                    Performance (wydajność i szybkość ładowania), Security (bezpieczeństwo) oraz Mobile (dostosowanie do urządzeń mobilnych).
                    Analizę przeprowadza sztuczna inteligencja, która generuje szczegółowy raport z rekomendacjami.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Jak z tego korzystać?</h3>
                  <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                    <li>Wpisz adres URL strony internetowej, którą chcesz przeanalizować</li>
                    <li>Kliknij przycisk "Analizuj" i poczekaj około 10 sekund</li>
                    <li>Otrzymasz szczegółowy raport z oceną 0-100 punktów w każdej kategorii</li>
                    <li>Przeczytaj rekomendacje AI i dowiedz się, co możesz poprawić</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Regulamin</h3>
                  <ul className="space-y-2 leading-relaxed text-sm">
                    <li>• Usługa jest całkowicie darmowa i nie wymaga rejestracji</li>
                    <li>• Nie przechowujemy żadnych danych osobowych użytkowników</li>
                    <li>• Wyniki analizy mają charakter informacyjny i nie stanowią gwarancji</li>
                    <li>• Nie ponosimy odpowiedzialności za decyzje podjęte na podstawie raportu</li>
                    <li>• Zastrzegamy sobie prawo do ograniczenia liczby analiz z jednego IP</li>
                    <li>• Usługa jest świadczona w stanie "jak jest" bez gwarancji dostępności</li>
                    <li>• Analizowane są tylko publicznie dostępne strony internetowe</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Prywatność</h3>
                  <p className="leading-relaxed text-sm">
                    Szanujemy Twoją prywatność. Nie zbieramy żadnych danych osobowych. Analizujemy jedynie publicznie dostępne
                    informacje ze wskazanej przez Ciebie strony internetowej. Wyniki analizy nie są przechowywane na naszych
                    serwerach po zamknięciu strony. Korzystamy z OpenAI API do generowania podsumowań AI.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-400">
                    Masz pytania? Skontaktuj się z nami przez formularz kontaktowy na stronie głównej{' '}
                    <a href="/" className="text-blue-400 hover:text-blue-300">borem.pl</a>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowInfoModal(false)}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                Rozumiem
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
