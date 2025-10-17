'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faUser, faTrash, faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

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
    scrollToBottom();
  }, [messages]);

  // Initialize chat only once - show typing animation and first message
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      setShowInitialTyping(true);

      // Show typing animation for 2 seconds
      const typingTimer = setTimeout(() => {
        setShowInitialTyping(false);
        setMessages([
          {
            role: 'assistant',
            content: 'Cześć! 👋 Pomogę Ci oszacować koszt projektu. Jaki typ strony Cię interesuje?',
          },
        ]);
        setHasInitialized(true);
      }, 2000);

      return () => clearTimeout(typingTimer);
    }
  }, [isOpen, hasInitialized]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

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

      // Create empty assistant message
      const assistantMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          const message = line.replace(/^data: /, '');

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
                newMessages[assistantMessageIndex] = {
                  role: 'assistant',
                  content: accumulatedContent,
                };
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
    localStorage.removeItem('borem-chat');
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Setup MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
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
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        stream.getTracks().forEach(track => track.stop());

        if (audioContextRef.current) {
          audioContextRef.current.close();
        }

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

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Nie można uzyskać dostępu do mikrofonu. Sprawdź uprawnienia przeglądarki.');
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
      }
    } catch (error) {
      console.error('Error transcribing audio:', error);
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

      // Create empty assistant message
      const assistantMessageIndex = messagesHistory.length;
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      setIsLoading(false);
      setIsStreaming(true);

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setIsStreaming(false);
          break;
        }

        // Decode the chunk
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          const message = line.replace(/^data: /, '');

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
                newMessages[assistantMessageIndex] = {
                  role: 'assistant',
                  content: accumulatedContent,
                };
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
                <div className="text-white font-bold text-sm">Wirtualna Wycena AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-gray-400 text-xs">Online • Odpowiem w 5s</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="w-7 h-7 hover:bg-red-900/50 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-red-400 hover:scale-110"
                aria-label="Wyczyść czat"
                title="Wyczyść czat"
              >
                <FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white hover:scale-110"
                aria-label="Zamknij"
              >
                <FontAwesomeIcon icon={faTimes} className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages - Dark style with smooth scroll */}
          <div className="flex-1 overflow-y-auto bg-gray-900 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`px-4 py-3.5 animate-in slide-in-from-bottom-2 fade-in duration-300 ${
                  message.role === 'assistant' ? 'bg-gray-800' : 'bg-black'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="max-w-full flex gap-3">
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
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-200 whitespace-pre-wrap break-words leading-relaxed">
                      {message.content}
                      {/* Show blinking cursor if this is the last message and streaming */}
                      {isStreaming && index === messages.length - 1 && message.role === 'assistant' && (
                        <span className="inline-block w-1.5 h-4 bg-blue-500 ml-0.5 animate-pulse"></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
                className="w-full bg-gray-800 text-white rounded-xl px-4 py-2.5 pr-20 text-base border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500 transition-all duration-200"
                style={{ fontSize: '16px' }}
              />

              {/* Microphone button */}
              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isLoading || showInitialTyping}
                className={`absolute right-11 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isRecording
                    ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse'
                    : 'bg-gray-700 text-gray-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white hover:scale-110'
                } ${(isLoading || showInitialTyping) ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={isRecording ? "Zatrzymaj nagrywanie" : "Nagraj wiadomość głosową"}
                title={isRecording ? "Zatrzymaj nagrywanie" : "Nagraj wiadomość głosową"}
              >
                <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} className="w-3.5 h-3.5" />
              </button>

              {/* Send button */}
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading || isRecording}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  input.trim() && !isLoading && !isRecording
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-110 shadow-lg shadow-blue-500/50'
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
              <div className="text-xs md:text-sm font-bold text-white">Wirtualna Wycena AI</div>
              <div className="text-[10px] md:text-xs text-gray-400">Bezpłatna konsultacja</div>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
