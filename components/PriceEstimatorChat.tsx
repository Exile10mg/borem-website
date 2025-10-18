'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faUser, faTrash, faMicrophone, faStop, faVolumeHigh, faVolumeXmark, faThumbsUp, faThumbsDown, faFaceSmile, faFaceMeh, faFaceFrown, faQuestionCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  rating?: 'positive' | 'neutral' | 'negative';
}

interface ChatStorage {
  messages: Message[];
  timestamp: number;
}

export default function PriceEstimatorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [showInitialTyping, setShowInitialTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [microphoneError, setMicrophoneError] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [randomQuestions, setRandomQuestions] = useState<string[]>([]);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [expandedRating, setExpandedRating] = useState<number | null>(null);
  const [showQuestionHelper, setShowQuestionHelper] = useState(false);
  const [helperQuestions, setHelperQuestions] = useState<string[]>([]);
  const [streamingQuestions, setStreamingQuestions] = useState<{ [key: number]: string }>({});
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastMessageCountRef = useRef<number>(0);

  // Pool of 50 frequently asked questions
  const questionPool = [
    "Ile kosztuje strona internetowa?",
    "Wycena sklepu online?",
    "Cennik aplikacji mobilnej?",
    "Jak długo trwa realizacja projektu?",
    "Czy oferujecie hosting i domenę?",
    "Ile kosztuje pozycjonowanie SEO?",
    "Czy robicie sklepy na WooCommerce?",
    "Jakie technologie używacie?",
    "Czy są dodatkowe koszty?",
    "Czy macie portfolio projektów?",
    "Ile kosztuje responsywna strona?",
    "Wycena landing page?",
    "Czy robicie aplikacje na iOS i Android?",
    "Ile kosztuje redesign strony?",
    "Czy oferujecie wsparcie techniczne?",
    "Ile trwa stworzenie sklepu internetowego?",
    "Czy robicie integracje z systemami?",
    "Ile kosztuje blog firmowy?",
    "Czy oferujecie content marketing?",
    "Ile kosztuje strona wizytówka?",
    "Czy robicie strony w WordPress?",
    "Ile kosztuje kampania Google Ads?",
    "Czy oferujecie copywriting?",
    "Ile kosztuje audyt SEO?",
    "Czy robicie animacje i grafiki?",
    "Ile trwa pozycjonowanie strony?",
    "Czy oferujecie szkolenia?",
    "Ile kosztuje portal internetowy?",
    "Czy robicie strony na Shopify?",
    "Ile kosztuje system rezerwacji?",
    "Czy oferujecie maintenance?",
    "Ile kosztuje integracja z Facebook?",
    "Czy robicie chatboty?",
    "Ile kosztuje panel administracyjny?",
    "Czy oferujecie migrację strony?",
    "Ile trwa uruchomienie kampanii?",
    "Czy robicie newslettery?",
    "Ile kosztuje strona wielojęzyczna?",
    "Czy oferujecie analitykę?",
    "Ile kosztuje optymalizacja?",
    "Czy robicie e-learning?",
    "Ile kosztuje system CRM?",
    "Czy oferujecie branding?",
    "Ile trwa projekt UX/UI?",
    "Czy robicie PWA?",
    "Ile kosztuje API?",
    "Czy oferujecie testy A/B?",
    "Ile kosztuje marketplace?",
    "Czy robicie integracje płatności?",
    "Jakie są formy płatności?",
  ];

  // Block body scroll when chat is open on mobile only (prevent page scroll behind fullscreen modal)
  useEffect(() => {
    // Check if we're on mobile (chat is fullscreen)
    const isMobile = window.innerWidth < 768; // md breakpoint

    if (isOpen && isMobile) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Block scrolling on body (mobile only)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else if (!isOpen) {
      // Restore scrolling when chat closes (only if it was blocked)
      const scrollY = document.body.style.top;

      if (scrollY) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        // Restore scroll position
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      if (window.innerWidth < 768) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [isOpen]);

  // Select 3 random questions on component mount
  useEffect(() => {
    const getRandomQuestions = () => {
      const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3);
    };
    setRandomQuestions(getRandomQuestions());
  }, []);

  // Animate questions when they become visible (after hasInitialized)
  useEffect(() => {
    if (hasInitialized && showSuggestions && randomQuestions.length > 0) {
      setStreamingQuestions({});
      
      // Animate all questions simultaneously
      const maxLength = Math.max(...randomQuestions.map(q => q.length));
      for (let charIndex = 0; charIndex <= maxLength; charIndex++) {
        setTimeout(() => {
          setStreamingQuestions(prev => {
            const updated = { ...prev };
            randomQuestions.forEach((question, qIndex) => {
              if (charIndex <= question.length) {
                updated[qIndex] = question.substring(0, charIndex);
              }
            });
            return updated;
          });
        }, charIndex * 30);
      }
    }
  }, [hasInitialized, showSuggestions, randomQuestions]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load chat from localStorage on mount
  useEffect(() => {
    const loadChat = () => {
      try {
        const stored = localStorage.getItem('borem-chat');
        if (stored) {
          const data: ChatStorage = JSON.parse(stored);
          const now = Date.now();
          const twentyFourHours = 24 * 60 * 60 * 1000;

          // Check if data is less than 24 hours old
          if (now - data.timestamp < twentyFourHours && data.messages.length > 0) {
            setMessages(data.messages);
            setHasInitialized(true);
            // Hide suggestions if user has already sent messages
            const hasUserMessages = data.messages.some(m => m.role === 'user');
            setShowSuggestions(!hasUserMessages);
          } else {
            // Clear expired data
            localStorage.removeItem('borem-chat');
          }
        }
      } catch (error) {
        console.error('Error loading chat:', error);
        localStorage.removeItem('borem-chat');
      }
    };

    loadChat();

    // Load voice settings
    try {
      const voiceSettings = localStorage.getItem('borem-voice-enabled');
      if (voiceSettings !== null) {
        setVoiceEnabled(JSON.parse(voiceSettings));
      }
    } catch (error) {
      console.error('Error loading voice settings:', error);
    }
  }, []);

  // Save chat to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        const data: ChatStorage = {
          messages,
          timestamp: Date.now(),
        };
        localStorage.setItem('borem-chat', JSON.stringify(data));
      } catch (error) {
        console.error('Error saving chat:', error);
      }
    }
  }, [messages]);

  useEffect(() => {
    // Scroll whenever messages change (including during streaming)
    scrollToBottom();
  }, [messages]);

  // Initialize speech synthesis voices
  useEffect(() => {
    if (window.speechSynthesis) {
      // Force load voices
      window.speechSynthesis.getVoices();

      // Some browsers need this event
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices:', voices.length);
      };
    }
  }, []);

  // Close expanded rating when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (expandedRating !== null) {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-rating-container]')) {
          setExpandedRating(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedRating]);



  // Initialize chat only once - show typing animation and stream first message
  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let streamInterval: NodeJS.Timeout;

    if (isOpen && !hasInitialized) {
      setShowInitialTyping(true);

      // Show typing animation for 1.5 seconds
      typingTimer = setTimeout(() => {
        setShowInitialTyping(false);

        // Start streaming the initial message
        const fullMessage = 'Cześć! 👋 Pomogę Ci wycenić projekt. Wybierz pytanie lub napisz własne:';

        // Add empty message
        setMessages([{ role: 'assistant', content: '' }]);
        setIsStreaming(true);

        let currentIndex = 0;
        streamInterval = setInterval(() => {
          currentIndex++;

          if (currentIndex <= fullMessage.length) {
            const currentText = fullMessage.substring(0, currentIndex);
            setMessages([{ role: 'assistant', content: currentText }]);
          } else {
            clearInterval(streamInterval);
            setIsStreaming(false);
            setHasInitialized(true);
            // Speak the initial message if voice is enabled
            speakText(fullMessage);
          }
        }, 30); // 30ms per character for smooth streaming effect
      }, 1500);
    }

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
      if (streamInterval) clearInterval(streamInterval);
    };
  }, [isOpen, hasInitialized]);

  const handleSuggestionClick = async (question: string) => {
    // Unlock audio on first interaction (mobile fix)
    if (!audioUnlocked && voiceEnabled) {
      unlockAudio();
    }
    
    setShowSuggestions(false);

    // Add user message immediately
    const userMessage: Message = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      // Create empty assistant message and get its index
      let assistantMessageIndex = -1;
      setMessages(prev => {
        assistantMessageIndex = prev.length; // Get index before adding
        return [...prev, { role: 'assistant', content: '' }];
      });
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          // Speak the completed message if voice is enabled
          if (accumulatedContent) {
            speakText(accumulatedContent);
          }
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Split by newlines and process complete lines
        const lines = buffer.split('\n');

        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();

          if (!trimmedLine) continue;

          const message = trimmedLine.replace(/^data: /, '');

          if (message === '[DONE]') {
            break;
          }

          try {
            const parsed = JSON.parse(message);
            const content = parsed.content;

            if (content) {
              accumulatedContent += content;

              // Update the last message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev];
                if (assistantMessageIndex >= 0 && assistantMessageIndex < newMessages.length) {
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedContent,
                  };
                }
                return newMessages;
              });
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev.filter((_, i) => i !== prev.length - 1 || prev[prev.length - 1].content !== ''),
        {
          role: 'assistant',
          content: 'Przepraszam, wystąpił błąd. Skontaktuj się z nami bezpośrednio: 787 041 328',
        },
      ]);
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Unlock audio on first interaction (mobile fix)
    if (!audioUnlocked && voiceEnabled) {
      unlockAudio();
    }

    // Hide suggestions after first user message
    setShowSuggestions(false);

    // Sanitize input - remove potential XSS
    const sanitizedInput = input.trim().slice(0, 500); // Max 500 characters

    const userMessage: Message = { role: 'user', content: sanitizedInput };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      // Create empty assistant message and get its index
      let assistantMessageIndex = -1;
      setMessages(prev => {
        assistantMessageIndex = prev.length; // Get index before adding
        return [...prev, { role: 'assistant', content: '' }];
      });
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          // Speak the completed message if voice is enabled
          if (accumulatedContent) {
            speakText(accumulatedContent);
          }
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Split by newlines and process complete lines
        const lines = buffer.split('\n');
        
        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          
          if (!trimmedLine) continue;

          const message = trimmedLine.replace(/^data: /, '');

          if (message === '[DONE]') {
            break;
          }

          try {
            const parsed = JSON.parse(message);
            const content = parsed.content;

            if (content) {
              accumulatedContent += content;

              // Update the last message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev];
                if (assistantMessageIndex >= 0 && assistantMessageIndex < newMessages.length) {
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedContent,
                  };
                }
                return newMessages;
              });
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev.filter((_, i) => i !== prev.length - 1 || prev[prev.length - 1].content !== ''),
        {
          role: 'assistant',
          content: 'Przepraszam, wystąpił błąd. Skontaktuj się z nami bezpośrednio: 787 041 328',
        },
      ]);
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setHasInitialized(false);
    setMicrophoneError(false);
    setShowSuggestions(true);
    setShowQuestionHelper(false);
    // Stop any ongoing speech
    stopSpeaking();
    // Generate new random questions
    const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffled.slice(0, 3));
    setHelperQuestions([]);
    localStorage.removeItem('borem-chat');
  };

  // Unlock audio for mobile browsers (must be called on user interaction)
  const unlockAudio = async () => {
    if (audioUnlocked) return;

    try {
      console.log('[iOS Audio] Attempting to unlock audio...');

      // Detect iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      if (isIOS) {
        // For iOS: Use Web Speech API initialization (works better than audio element)
        if (window.speechSynthesis) {
          console.log('[iOS Audio] Initializing Web Speech API...');

          // Prime the speech synthesis by speaking and immediately cancelling
          const utterance = new SpeechSynthesisUtterance(' ');
          utterance.volume = 0.01;
          utterance.rate = 10; // Very fast so it's instant

          utterance.onstart = () => {
            console.log('[iOS Audio] Web Speech API initialized successfully');
            // Cancel immediately after it starts
            window.speechSynthesis.cancel();
            setAudioUnlocked(true);
          };

          utterance.onerror = () => {
            console.log('[iOS Audio] Web Speech API initialization failed, but marking as unlocked');
            setAudioUnlocked(true);
          };

          // Also set timeout in case onstart doesn't fire
          setTimeout(() => {
            if (!audioUnlocked) {
              console.log('[iOS Audio] Timeout - marking as unlocked anyway');
              setAudioUnlocked(true);
            }
          }, 100);

          window.speechSynthesis.speak(utterance);
        } else {
          console.log('[iOS Audio] Web Speech API not available');
          setAudioUnlocked(true);
        }
      } else {
        // For non-iOS: Try silent audio playback
        const silentAudio = new Audio();
        silentAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADhAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAA4T/fMZKAAAAAAD/+xDEAAP8ABEBAAAAgAAA//tQxAMABAQGwFBAAAAgAAASiAAAAACEQghEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE//sQxAkABAQGwFBAAAAgAAASiAAAAACEQghEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE';
        silentAudio.volume = 0.01;

        const playPromise = silentAudio.play();
        if (playPromise !== undefined) {
          await playPromise
            .then(() => {
              console.log('[Audio] Silent audio played successfully');
              silentAudio.pause();
              silentAudio.currentTime = 0;
              setAudioUnlocked(true);
            })
            .catch((error) => {
              console.log('[Audio] Silent audio failed:', error);
              setAudioUnlocked(true);
            });
        }
      }
    } catch (error) {
      console.log('[Audio] Unlock failed:', error);
      setAudioUnlocked(true);
    }
  };

  const toggleVoice = () => {
    const newState = !voiceEnabled;
    setVoiceEnabled(newState);

    // Unlock audio on first enable
    if (newState && !audioUnlocked) {
      unlockAudio();
    }

    // Save to localStorage
    try {
      localStorage.setItem('borem-voice-enabled', JSON.stringify(newState));
    } catch (error) {
      console.error('Error saving voice settings:', error);
    }

    // Stop speaking if disabling voice
    if (!newState) {
      stopSpeaking();
    }
  };

  const speakText = async (text: string) => {
    if (!voiceEnabled) return;

    try {
      // Stop any ongoing speech
      stopSpeaking();

      setIsSpeaking(true);

      // Detect iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      console.log('[TTS] Speaking on iOS:', isIOS);

      // iOS: Use Web Speech API as primary (works better with autoplay restrictions)
      // Other platforms: Try OpenAI TTS first, fallback to Web Speech
      if (isIOS) {
        console.log('[TTS] Using Web Speech API for iOS');

        // Use browser's Web Speech API (works better on iOS)
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();

          const utterance = new SpeechSynthesisUtterance(text);

          // Try to find Polish voice, fallback to default
          const voices = window.speechSynthesis.getVoices();
          const polishVoice = voices.find(v => v.lang.includes('pl'));

          if (polishVoice) {
            utterance.voice = polishVoice;
            utterance.lang = 'pl-PL';
            console.log('[TTS] Using Polish voice:', polishVoice.name);
          } else {
            console.log('[TTS] No Polish voice found, using default');
            utterance.lang = 'pl-PL';
          }

          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          utterance.volume = 1.0;

          utterance.onstart = () => {
            console.log('[TTS] Speech started');
            setIsSpeaking(true);
          };
          utterance.onend = () => {
            console.log('[TTS] Speech ended');
            setIsSpeaking(false);
          };
          utterance.onerror = (e) => {
            console.error('[TTS] Speech synthesis error:', e);
            setIsSpeaking(false);
          };

          window.speechSynthesis.speak(utterance);
        } else {
          console.log('[TTS] Web Speech API not available');
          setIsSpeaking(false);
        }
      } else {
        // Non-iOS: Try OpenAI TTS first
        console.log('[TTS] Trying OpenAI TTS for non-iOS');

        try {
          const response = await fetch('/api/tts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
          });

          console.log('[TTS] OpenAI TTS API response:', response.status);

          if (response.ok) {
            // Create audio element and play
            const audioBlob = await response.blob();

            // Check if blob is valid
            if (audioBlob.size === 0) {
              throw new Error('Empty audio blob received');
            }

            // Create blob with explicit type
            const typedBlob = new Blob([audioBlob], { type: 'audio/mpeg' });
            const audioUrl = URL.createObjectURL(typedBlob);

            const audio = new Audio();
            audio.src = audioUrl;
            audioRef.current = audio;

            audio.onended = () => {
              setIsSpeaking(false);
              URL.revokeObjectURL(audioUrl);
            };

            audio.onerror = (e) => {
              console.error('[TTS] Audio playback error:', e);
              setIsSpeaking(false);
              URL.revokeObjectURL(audioUrl);
              // Fallback to Web Speech API
              useBrowserSpeech(text);
            };

            // Play with user gesture handling
            const playPromise = audio.play();
            if (playPromise !== undefined) {
              playPromise.catch(err => {
                console.error('[TTS] Play error:', err);
                setIsSpeaking(false);
                URL.revokeObjectURL(audioUrl);
                // Fallback to Web Speech API
                useBrowserSpeech(text);
              });
            }
            return; // Success, exit
          } else {
            // API failed, use browser speech
            useBrowserSpeech(text);
          }
        } catch (apiError) {
          console.log('[TTS] OpenAI TTS not available, using browser speech:', apiError);
          useBrowserSpeech(text);
        }
      }

    } catch (error) {
      console.error('[TTS] Error playing speech:', error);
      setIsSpeaking(false);
    }
  };

  // Helper function for browser speech synthesis
  const useBrowserSpeech = (text: string) => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Try to find Polish voice, fallback to default
      const voices = window.speechSynthesis.getVoices();
      const polishVoice = voices.find(v => v.lang.includes('pl'));

      if (polishVoice) {
        utterance.voice = polishVoice;
        utterance.lang = 'pl-PL';
      } else {
        console.log('[TTS] No Polish voice found, using default');
        utterance.lang = 'pl-PL';
      }

      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (e) => {
        console.error('[TTS] Speech synthesis error:', e);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    // Stop HTML5 Audio (OpenAI TTS)
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    // Stop Web Speech API
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
  };

  const toggleRatingExpand = (messageIndex: number) => {
    setExpandedRating(prev => prev === messageIndex ? null : messageIndex);
  };

  const toggleQuestionHelper = () => {
    if (!showQuestionHelper) {
      // Generate 3 random questions when opening
      refreshHelperQuestions();
      // Scroll to bottom to show questions
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
    setShowQuestionHelper(prev => !prev);
  };

  const refreshHelperQuestions = () => {
    setStreamingQuestions({});
    
    // Generate random questions for helper
    const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
    const newQuestions = shuffled.slice(0, 3);
    setHelperQuestions(newQuestions);
    
    // Animate helper questions with streaming (use offset 100 for helper questions)
    const maxLength = Math.max(...newQuestions.map(q => q.length));
    for (let charIndex = 0; charIndex <= maxLength; charIndex++) {
      setTimeout(() => {
        setStreamingQuestions(prev => {
          const updated = { ...prev };
          newQuestions.forEach((question, qIndex) => {
            if (charIndex <= question.length) {
              updated[100 + qIndex] = question.substring(0, charIndex);
            }
          });
          return updated;
        });
      }, charIndex * 30);
    }
  };

  const selectHelperQuestion = async (question: string) => {
    // Unlock audio on first interaction (mobile fix)
    if (!audioUnlocked && voiceEnabled) {
      unlockAudio();
    }
    
    setShowQuestionHelper(false);
    setShowSuggestions(false);

    // Add user message immediately
    const userMessage: Message = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      // Create empty assistant message and get its index
      let assistantMessageIndex = -1;
      setMessages(prev => {
        assistantMessageIndex = prev.length;
        return [...prev, { role: 'assistant', content: '' }];
      });
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          // Speak the completed message if voice is enabled
          if (accumulatedContent) {
            speakText(accumulatedContent);
          }
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Split by newlines and process complete lines
        const lines = buffer.split('\n');

        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();

          if (!trimmedLine) continue;

          const message = trimmedLine.replace(/^data: /, '');

          if (message === '[DONE]') {
            break;
          }

          try {
            const parsed = JSON.parse(message);
            const content = parsed.content;

            if (content) {
              accumulatedContent += content;

              // Update the last message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev];
                if (assistantMessageIndex >= 0 && assistantMessageIndex < newMessages.length) {
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedContent,
                  };
                }
                return newMessages;
              });
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev.filter((_, i) => i !== prev.length - 1 || prev[prev.length - 1].content !== ''),
        {
          role: 'assistant',
          content: 'Przepraszam, wystąpił błąd. Skontaktuj się z nami bezpośrednio: 787 041 328',
        },
      ]);
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const rateMessage = (messageIndex: number, rating: 'positive' | 'neutral' | 'negative') => {
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages[messageIndex] && newMessages[messageIndex].role === 'assistant') {
        // Toggle rating - if same rating clicked, remove it
        if (newMessages[messageIndex].rating === rating) {
          newMessages[messageIndex] = { ...newMessages[messageIndex], rating: undefined };
        } else {
          newMessages[messageIndex] = { ...newMessages[messageIndex], rating };
        }
      }
      return newMessages;
    });
    // Close expanded view after rating
    setExpandedRating(null);
  };

  const startRecording = async () => {
    try {
      // Detect iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      console.log('[Recording] Device detected - iOS:', isIOS);
      console.log('[Recording] User agent:', navigator.userAgent);

      // Check if browser supports getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        if (!microphoneError) {
          setMicrophoneError(true);
          setMessages(prev => [
            ...prev,
            {
              role: 'assistant',
              content: '🎤 Twoja przeglądarka nie obsługuje nagrywania audio. Spróbuj użyć Chrome, Firefox lub Safari.',
            },
          ]);
        }
        return;
      }

      console.log('[Recording] Requesting microphone access...');
      console.log('[Recording] navigator.mediaDevices available:', !!navigator.mediaDevices);
      console.log('[Recording] getUserMedia available:', !!navigator.mediaDevices?.getUserMedia);

      // Request microphone permission - this will show browser's native permission dialog if needed
      // Don't check permissions proactively as it can block the native dialog on some browsers
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });

      console.log('[Recording] Stream obtained successfully');

      // If we got here, permission was granted - reset error flag
      setMicrophoneError(false);

      // Detect Safari (isIOS already defined above)
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      let mimeType = 'audio/webm';
      let options: MediaRecorderOptions = {};

      // iOS Safari specific configuration
      if (isIOS || isSafari) {
        // Try different MIME types that Safari supports
        if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/aac')) {
          mimeType = 'audio/aac';
        } else if (MediaRecorder.isTypeSupported('audio/wav')) {
          mimeType = 'audio/wav';
        } else if (MediaRecorder.isTypeSupported('audio/mpeg')) {
          mimeType = 'audio/mpeg';
        }
        options = { mimeType };
      } else if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
        options = { mimeType };
      }

      console.log('[Recording] Using MIME type:', mimeType);

      // Setup MediaRecorder with appropriate options
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      // Setup audio visualization
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      // Visualize audio level
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateLevel = () => {
        if (!isRecording) return;
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / bufferLength;
        setAudioLevel(average / 255);
        requestAnimationFrame(updateLevel);
      };
      updateLevel();

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Use the same MIME type that was used for recording
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        stream.getTracks().forEach(track => track.stop());

        if (audioContextRef.current) {
          audioContextRef.current.close();
        }

        console.log('[Recording] Stopped. Blob size:', audioBlob.size, 'Type:', audioBlob.type);

        // Send to Whisper API
        await transcribeAudio(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Timer (max 60 seconds)
      let seconds = 0;
      recordingTimerRef.current = setInterval(() => {
        seconds++;
        setRecordingTime(seconds);

        if (seconds >= 60) {
          stopRecording();
        }
      }, 1000);

    } catch (error: any) {
      console.error('[Recording] Error accessing microphone:', error);
      console.error('[Recording] Error name:', error.name);
      console.error('[Recording] Error message:', error.message);

      // Only show error message once
      if (microphoneError) {
        return;
      }

      setMicrophoneError(true);

      // Detect if user is on iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      // Handle specific error cases
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        let message = '';

        if (isIOS) {
          // iOS - all browsers use WebKit, need system-level permissions
          message = '🎤 Brak dostępu do mikrofonu.\n\n' +
                   '📱 INSTRUKCJA DLA iOS:\n\n' +
                   '1️⃣ Ustawienia → Safari → Mikrofon → Zezwól\n' +
                   '2️⃣ Jeśli używasz Chrome/Firefox: Ustawienia → Chrome (lub Firefox) → Mikrofon → Zezwól\n' +
                   '3️⃣ Odśwież stronę i spróbuj ponownie\n\n' +
                   '💡 Możesz też kliknąć ikonę AA w pasku adresu i włączyć mikrofon.';
        } else {
          message = '🎤 Aby nagrywać wiadomości głosowe, zezwól na dostęp do mikrofonu w przeglądarce.\n\n' +
                   'Kliknij ikonę 🔒 obok adresu strony i włącz mikrofon.';
        }

        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: message,
          },
        ]);
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: '🎤 Nie znaleziono mikrofonu. Upewnij się, że mikrofon jest podłączony.',
          },
        ]);
      } else if (error.name === 'NotReadableError') {
        const message = isIOS
          ? '🎤 Mikrofon jest zajęty przez inną aplikację.\n\n' +
            'Zamknij inne aplikacje używające mikrofonu (np. Siri, nagrywanie ekranu, FaceTime) i spróbuj ponownie.'
          : '🎤 Mikrofon jest zajęty. Zamknij inne aplikacje używające mikrofonu.';

        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: message,
          },
        ]);
      } else if (error.name === 'NotSupportedError' || error.message?.includes('MIME')) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: '🎤 Twoja przeglądarka nie obsługuje nagrywania audio. Zaktualizuj przeglądarkę do najnowszej wersji.',
          },
        ]);
      } else {
        const message = isIOS
          ? '🎤 Nie udało się uruchomić mikrofonu.\n\n' +
            'Sprawdź uprawnienia w Ustawieniach iOS:\n' +
            'Ustawienia → [nazwa przeglądarki] → Mikrofon → Zezwól'
          : '🎤 Nie udało się uruchomić mikrofonu. Spróbuj ponownie.';

        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: message,
          },
        ]);
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }

    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }

    setIsRecording(false);
    setRecordingTime(0);
    setAudioLevel(0);
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Transcription failed');
      }

      const data = await response.json();
      const transcribedText = data.text;

      console.log('[Transcription] Result:', transcribedText);

      if (transcribedText && transcribedText.trim()) {
        // Set as input and send
        setInput(transcribedText);

        // Automatically send the message
        setTimeout(() => {
          const userMessage: Message = { role: 'user', content: transcribedText };
          setMessages(prev => [...prev, userMessage]);
          setInput('');
          sendMessageWithText([...messages, userMessage]);
        }, 100);
      } else {
        // Empty transcription - user didn't say anything or audio was unclear
        console.log('[Transcription] Empty result');
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: '🎤 Przepraszam, nie zrozumiałem. Spróbuj ponownie lub napisz wiadomość.\n\n💡 Upewnij się, że:\n• Mówisz wyraźnie i głośno\n• Jesteś w cichym miejscu\n• Mikrofon nie jest zasłonięty',
          },
        ]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('[Transcription] Error:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Przepraszam, nie udało się przetworzyć nagrania. Spróbuj ponownie lub napisz wiadomość.',
        },
      ]);
      setIsLoading(false);
    }
  };

  const sendMessageWithText = async (messagesHistory: Message[]) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messagesHistory,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      // Create empty assistant message and get its index
      let assistantMessageIndex = -1;
      setMessages(prev => {
        assistantMessageIndex = prev.length; // Get index before adding
        return [...prev, { role: 'assistant', content: '' }];
      });
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          // Speak the completed message if voice is enabled
          if (accumulatedContent) {
            speakText(accumulatedContent);
          }
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Split by newlines and process complete lines
        const lines = buffer.split('\n');
        
        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          
          if (!trimmedLine) continue;

          const message = trimmedLine.replace(/^data: /, '');

          if (message === '[DONE]') {
            break;
          }

          try {
            const parsed = JSON.parse(message);
            const content = parsed.content;

            if (content) {
              accumulatedContent += content;

              // Update the last message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev];
                if (assistantMessageIndex >= 0 && assistantMessageIndex < newMessages.length) {
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedContent,
                  };
                }
                return newMessages;
              });
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev.filter((_, i) => i !== prev.length - 1 || prev[prev.length - 1].content !== ''),
        {
          role: 'assistant',
          content: 'Przepraszam, wystąpił błąd. Skontaktuj się z nami bezpośrednio: 787 041 328',
        },
      ]);
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <>
      {/* Chat Modal - Full screen on mobile, bottom-left on desktop */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-6 md:left-6 md:w-[450px] md:h-[65vh] md:max-h-[600px] w-full h-full z-[9999] bg-gray-900 md:bg-gray-900/95 md:backdrop-blur-xl md:rounded-3xl shadow-2xl shadow-purple-500/20 flex flex-col overflow-hidden border-0 md:border border-gray-800 animate-in slide-in-from-bottom-4 fade-in duration-300">

          {/* Header - Site style */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* AI logo like navbar - animated */}
              <div className="relative animate-in zoom-in duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-75 blur-sm animate-pulse"></div>
                <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
                  <span className="text-white font-black text-sm relative z-10 drop-shadow-lg">AI</span>
                  <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                </div>
              </div>

              <div>
                <div className="text-white font-bold text-sm">Wirtualny Doradca</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-gray-400 text-xs">Online • Odpowiem w 5s</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Voice toggle button */}
              <button
                onClick={(e) => {
                  if (isSpeaking) {
                    stopSpeaking();
                  } else {
                    toggleVoice();
                  }
                  // Remove focus after click (prevents stuck highlight on mobile)
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  // Prevent stuck active state on mobile
                  e.currentTarget.blur();
                }}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 touch-manipulation ${
                  isSpeaking
                    ? 'bg-red-600 text-white active:bg-red-700'
                    : voiceEnabled
                      ? 'bg-green-600/20 text-green-400 active:bg-green-600/30'
                      : 'text-gray-400 active:bg-gray-800'
                } hover:scale-110 focus:outline-none`}
                aria-label={isSpeaking ? "Zatrzymaj czytanie" : (voiceEnabled ? "Wyłącz głos" : "Włącz głos")}
                title={isSpeaking ? "Zatrzymaj czytanie" : (voiceEnabled ? "Wyłącz głos" : "Włącz głos")}
              >
                <FontAwesomeIcon
                  icon={isSpeaking ? faStop : (voiceEnabled ? faVolumeHigh : faVolumeXmark)}
                  className="w-3.5 h-3.5"
                />
              </button>
              <button
                onClick={(e) => {
                  clearChat();
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.blur();
                }}
                className="w-7 h-7 hover:bg-red-900/50 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-red-400 hover:scale-110 touch-manipulation focus:outline-none active:bg-red-900/50"
                aria-label="Wyczyść czat"
                title="Wyczyść czat"
              >
                <FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  setIsOpen(false);
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.blur();
                }}
                className="w-7 h-7 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white hover:scale-110 touch-manipulation focus:outline-none active:bg-gray-800"
                aria-label="Zamknij"
              >
                <FontAwesomeIcon icon={faTimes} className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages - Dark style with smooth scroll */}
          <div className="flex-1 min-h-0 overflow-y-auto bg-gray-900 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`px-4 py-3.5 animate-in slide-in-from-bottom-2 fade-in duration-300 ${
                  message.role === 'assistant' ? 'bg-gray-800' : 'bg-black'
                } group/message`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="max-w-full flex gap-3 relative">
                  {/* Avatar with animation */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 relative transition-transform hover:scale-110 ${
                    message.role === 'assistant'
                      ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600'
                      : 'bg-gray-700'
                  }`}>
                    {message.role === 'assistant' ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-lg"></div>
                        <span className="text-white font-black text-xs relative z-10">AI</span>
                      </>
                    ) : (
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Message content with animation */}
                  <div className="flex-1 min-w-0 relative">
                    <div className="text-sm text-gray-200 whitespace-pre-wrap break-words leading-relaxed pr-8">
                      {message.content}
                      {/* Show blinking cursor if this is the last message and streaming */}
                      {isStreaming && index === messages.length - 1 && message.role === 'assistant' && (
                        <span className="inline-block w-1.5 h-4 bg-blue-500 ml-0.5 animate-pulse"></span>
                      )}
                    </div>

                    {/* Messenger-style rating - bottom right corner */}
                    {message.role === 'assistant' && message.content && !(isStreaming && index === messages.length - 1) && (
                      <div
                        data-rating-container
                        className="absolute top-0 right-0 flex items-center gap-1"
                      >
                        {/* Expanded emoji buttons - slide in from right */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          expandedRating === index ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0'
                        }`}>
                          <div className="flex items-center gap-1 bg-gray-700/60 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                          <button
                            onClick={() => rateMessage(index, 'positive')}
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                              message.rating === 'positive' ? 'bg-green-600/30' : 'hover:bg-gray-600/50'
                            }`}
                            title="Świetna odpowiedź"
                          >
                            <span className="text-xs">😊</span>
                          </button>
                          <button
                            onClick={() => rateMessage(index, 'neutral')}
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                              message.rating === 'neutral' ? 'bg-yellow-600/30' : 'hover:bg-gray-600/50'
                            }`}
                            title="Okej"
                          >
                            <span className="text-xs">😐</span>
                          </button>
                          <button
                            onClick={() => rateMessage(index, 'negative')}
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                              message.rating === 'negative' ? 'bg-red-600/30' : 'hover:bg-gray-600/50'
                            }`}
                            title="Słaba odpowiedź"
                          >
                            <span className="text-xs">☹️</span>
                          </button>
                          </div>
                        </div>

                        {/* Toggle button - always visible */}
                        <button
                          onClick={() => toggleRatingExpand(index)}
                          className="w-5 h-5 bg-gray-700/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-600/80 hover:scale-110"
                          aria-label={expandedRating === index ? "Zwiń" : "Oceń wiadomość"}
                        >
                          {message.rating ? (
                            <span className="text-xs">
                              {message.rating === 'positive' && '😊'}
                              {message.rating === 'neutral' && '😐'}
                              {message.rating === 'negative' && '☹️'}
                            </span>
                          ) : (
                            <span className="text-[10px]">➕</span>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Suggested Questions - shown after initial message, before user's first interaction */}
            {showSuggestions && hasInitialized && messages.length === 1 && !isLoading && !showInitialTyping && randomQuestions.length > 0 && (
              <div className="px-4 py-2 bg-gray-900 animate-in slide-in-from-bottom-2 fade-in duration-300">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="text-xs text-gray-400 font-semibold">Przykładowe pytania:</div>
                    <button
                      onClick={(e) => {
                        setStreamingQuestions({});
                        // Generate new random questions
                        const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
                        const newQuestions = shuffled.slice(0, 3);
                        setRandomQuestions(newQuestions);

                        // Animate all questions simultaneously
                        const maxLength = Math.max(...newQuestions.map(q => q.length));
                        for (let charIndex = 0; charIndex <= maxLength; charIndex++) {
                          setTimeout(() => {
                            setStreamingQuestions(prev => {
                              const updated = { ...prev };
                              newQuestions.forEach((question, qIndex) => {
                                if (charIndex <= question.length) {
                                  updated[qIndex] = question.substring(0, charIndex);
                                }
                              });
                              return updated;
                            });
                          }, charIndex * 30);
                        }
                        e.currentTarget.blur();
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.blur();
                      }}
                      className="w-6 h-6 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation focus:outline-none active:bg-gray-600"
                      title="Odśwież pytania"
                    >
                      <FontAwesomeIcon icon={faRefresh} className="w-3 h-3" />
                    </button>
                  </div>
                  {randomQuestions.map((question: string, index: number) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        handleSuggestionClick(question);
                        e.currentTarget.blur();
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.blur();
                      }}
                      className="group relative text-left bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl px-3 py-2 text-xs transition-all duration-200 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 touch-manipulation focus:outline-none active:bg-gray-700"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur transition-opacity opacity-0 group-hover:opacity-10"></div>
                      <div className="relative flex items-center justify-between gap-2">
                        <span>
                          {streamingQuestions[index] !== undefined ? streamingQuestions[index] : question}
                          {streamingQuestions[index] !== undefined && streamingQuestions[index].length < question.length && (
                            <span className="inline-block w-1.5 h-3 bg-blue-500 ml-0.5 animate-pulse"></span>
                          )}
                        </span>
                        <svg className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question Helper - fullscreen in chat area */}
            {showQuestionHelper && helperQuestions.length > 0 && (
              <div className="px-4 py-3.5 bg-gray-900 animate-in slide-in-from-bottom-2 fade-in duration-300">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-gray-400 font-semibold">Przykładowe pytania:</div>
                    <button
                      onClick={(e) => {
                        refreshHelperQuestions();
                        e.currentTarget.blur();
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.blur();
                      }}
                      className="w-6 h-6 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation focus:outline-none active:bg-gray-600"
                      title="Odśwież pytania"
                    >
                      <FontAwesomeIcon icon={faRefresh} className="w-3 h-3" />
                    </button>
                  </div>
                  {helperQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        selectHelperQuestion(question);
                        e.currentTarget.blur();
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.blur();
                      }}
                      className="group relative text-left bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl px-3 py-2 text-xs transition-all duration-200 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 touch-manipulation focus:outline-none active:bg-gray-700"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur transition-opacity opacity-0 group-hover:opacity-10"></div>
                      <div className="relative flex items-center justify-between gap-2">
                        <span>
                          {streamingQuestions[100 + index] !== undefined ? streamingQuestions[100 + index] : question}
                          {streamingQuestions[100 + index] !== undefined && streamingQuestions[100 + index].length < question.length && (
                            <span className="inline-block w-1.5 h-3 bg-blue-500 ml-0.5 animate-pulse"></span>
                          )}
                        </span>
                        <svg className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(isLoading || showInitialTyping) && (
              <div className="px-4 py-3.5 bg-gray-800 animate-in fade-in duration-300">
                <div className="max-w-full flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 relative animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-lg"></div>
                    <span className="text-white font-black text-xs relative z-10">AI</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-3">Pisze...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input - Dark style with animations */}
          <div className="border-t border-gray-700 p-3.5 bg-gray-900">
            {/* Recording indicator */}
            {isRecording && (
              <div className="mb-3 flex items-center justify-between bg-red-600/10 border border-red-500/30 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  {/* Pulsing red dot */}
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>

                  {/* Audio wave visualization */}
                  <div className="flex items-center gap-1 h-8">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-red-500 rounded-full transition-all duration-100"
                        style={{
                          height: `${Math.max(20, audioLevel * 100 * (0.5 + Math.random() * 0.5))}%`,
                          opacity: 0.5 + audioLevel * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  {/* Timer */}
                  <span className="text-red-400 font-mono text-sm">
                    {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Stop button */}
                <button
                  onClick={stopRecording}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faStop} className="w-3.5 h-3.5" />
                  Zatrzymaj
                </button>
              </div>
            )}

            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isLoading || showInitialTyping ? "Bot pisze..." : isRecording ? "Nagrywanie..." : "Napisz lub nagraj wiadomość..."}
                disabled={isLoading || showInitialTyping || isRecording}
                className="w-full bg-gray-800 text-white rounded-xl px-4 py-2.5 pr-28 text-base border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500 transition-all duration-200"
                style={{ fontSize: '16px' }}
              />

              {/* Question helper button - disabled on initial message, enabled after first user message */}
              <button
                onClick={(e) => {
                  toggleQuestionHelper();
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.blur();
                }}
                disabled={isLoading || showInitialTyping || isRecording || !hasInitialized || messages.length <= 1}
                className={`absolute right-20 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 touch-manipulation focus:outline-none ${
                  showQuestionHelper
                    ? 'bg-blue-600 text-white active:bg-blue-700'
                    : 'bg-gray-700 text-gray-400 hover:bg-blue-600/20 hover:text-blue-400 hover:scale-110 active:bg-blue-600/20'
                } ${(isLoading || showInitialTyping || isRecording || !hasInitialized || messages.length <= 1) ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Przykładowe pytania"
                title={!hasInitialized || messages.length <= 1 ? "Dostępne po pierwszym pytaniu" : "Przykładowe pytania"}
              >
                <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
              </button>

              {/* Microphone button */}
              <button
                onClick={(e) => {
                  if (isRecording) {
                    stopRecording();
                  } else {
                    startRecording();
                  }
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.blur();
                }}
                disabled={isLoading || showInitialTyping}
                className={`absolute right-11 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 touch-manipulation focus:outline-none ${
                  isRecording
                    ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse active:bg-red-700'
                    : 'bg-gray-700 text-gray-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white hover:scale-110 active:bg-red-600'
                } ${(isLoading || showInitialTyping) ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={isRecording ? "Zatrzymaj nagrywanie" : "Nagraj wiadomość głosową"}
                title={isRecording ? "Zatrzymaj nagrywanie" : "Nagraj wiadomość głosową"}
              >
                <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} className="w-3.5 h-3.5" />
              </button>

              {/* Send button */}
              <button
                onClick={(e) => {
                  sendMessage();
                  e.currentTarget.blur();
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.blur();
                }}
                disabled={!input.trim() || isLoading || isRecording}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 touch-manipulation focus:outline-none ${
                  input.trim() && !isLoading && !isRecording
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-110 shadow-lg shadow-blue-500/50 active:from-blue-700 active:to-purple-700'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Wyślij"
              >
                <FontAwesomeIcon icon={faArrowUp} className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Footer note with link */}
            <div className="text-center text-xs text-gray-400 mt-2.5">
              <span>Orientacyjna wycena •</span>
              <a href="tel:+48787041328" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors ml-1.5">
                787 041 328
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Floating Button - Bottom Left - Visible only when chat is closed */}
      {!isOpen && (
        <div className="fixed bottom-3 left-3 md:bottom-6 md:left-6 z-30">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-1.5 md:gap-3 bg-gray-900/80 backdrop-blur-md text-white rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 px-2.5 py-2 md:px-6 md:py-3 border border-gray-800 hover:border-blue-500/50 hover:shadow-blue-500/20"
            aria-label="Wirtualna wycena"
          >
            {/* Glow effect like navbar */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl md:rounded-2xl blur transition-opacity opacity-0 group-hover:opacity-20"></div>

            {/* AI logo */}
            <div className="relative w-7 h-7 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-lg md:rounded-xl"></div>
              <span className="text-white font-black text-xs md:text-base relative z-10 drop-shadow-lg">AI</span>
              <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full opacity-60"></div>
              <div className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 w-0.5 md:w-1 h-0.5 md:h-1 bg-white rounded-full opacity-40"></div>
            </div>

            {/* Text */}
            <div className="relative z-10">
              <div className="text-xs md:text-sm font-bold text-white">Wirtualny Doradca</div>
              <div className="text-[10px] md:text-xs text-white/90">Bezpłatna konsultacja</div>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
