import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Mic, 
  Send, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Phone, 
  FileText, 
  Building2,
  Sparkles
} from 'lucide-react';
import AccountingOrb3D from './AccountingOrb3D';
import './Chatbot.css';

// ============================================================================
// VERIFIED KNOWLEDGE BASE — M&S Business Solutions
// (Chartered Accountants & Registered Tax Agents, Norwest Business Park)
// ============================================================================
const KNOWLEDGE_RESPONSES = [
  {
    keywords: ['accounting', 'bookkeeping', 'xero', 'myob', 'cash flow', 'ledger', 'financial statement', 'asic'],
    title: 'Accounting Services',
    text: 'M&S Business Solutions provides comprehensive accounting support designed to create financial certainty for your business. Our services include annual financial statements, ASIC compliance, ledger reviews, cash flow budgeting, asset purchase advisory, and cloud accounting implementations (Xero & MYOB).',
    link: '/services/accounting',
    linkLabel: 'Explore Accounting Services'
  },
  {
    keywords: ['tax', 'taxation', 'bas', 'gst', 'return', 'cgt', 'capital gains', 'smsf', 'fbt', 'ato', 'audit'],
    title: 'Taxation & Compliance Services',
    text: 'Our registered tax agents handle company, trust, partnership, SMSF, and individual tax returns, as well as BAS/GST preparation, Capital Gains Tax (CGT) advisory, and ATO audit defence. For personalised tax strategies tailored to your exact circumstances, we invite you to consult directly with our Chartered Accountants.',
    link: '/services/taxation',
    linkLabel: 'Explore Taxation Services'
  },
  {
    keywords: ['book', 'consultation', 'appointment', 'meet', 'meeting', 'quote', 'discuss'],
    title: 'Book a Consultation',
    text: 'You can arrange a confidential consultation with Principal Mandar Gokhale (CA) and our advisory team. We are conveniently based in Norwest Business Park with dedicated client parking, or we can conduct consultations remotely via video call.',
    link: '/contact',
    linkLabel: 'Go to Book Consultation Form'
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'address', 'location', 'office', 'where'],
    title: 'Contact Our Office',
    text: 'Our offices are located at Suite 306, Building A, 1 Burbank Place, Norwest Business Park, Bella Vista NSW 2153. You can call us directly on (02) 8814 7905 or email info@msbusinesssolutions.com.au.',
    link: '/contact',
    linkLabel: 'View Office Details'
  },
  {
    keywords: ['team', 'mandar', 'who', 'about', 'people', 'experience', 'qualifications'],
    title: 'About M&S Business Solutions',
    text: 'Led by Principal Mandar Gokhale (Chartered Accountant), M&S Business Solutions brings over two decades of professional accounting and taxation experience serving businesses across Bella Vista, Baulkham Hills, Castle Hill, and greater Sydney.',
    link: '/our-people',
    linkLabel: 'Meet Principal & Team'
  }
];

// Fallback response for personalised or open-ended inquiries
const DEFAULT_RESPONSE = {
  title: 'Consult With Our Qualified Professionals',
  text: 'For personalized taxation advice, business structuring, or specific financial figures, we recommend speaking directly with our qualified Chartered Accountants to ensure advice matches your exact circumstances.',
  link: '/contact',
  linkLabel: 'Book a Consultation'
};

const QUICK_ACTIONS = [
  { label: 'Accounting Services', query: 'Tell me about Accounting Services', icon: Building2 },
  { label: 'Taxation Services', query: 'What Taxation Services do you provide?', icon: FileText },
  { label: 'Book a Consultation', query: 'How do I book a consultation?', icon: Calendar },
  { label: 'Contact Our Team', query: 'How can I contact your office?', icon: Phone }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Hi there! Welcome to M&S Business Solutions. How can we help you with your accounting or taxation needs today?',
      time: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [statusText, setStatusText] = useState('M&S AI is ready');

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to bottom of chat when new message arrives (only when conversation has started)
  const scrollToBottom = () => {
    if (messages.length > 1 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (messages.length > 1) {
        scrollToBottom();
      } else {
        const chatBody = document.querySelector('.ms-chat-body');
        if (chatBody) chatBody.scrollTop = 0;
      }
    }
  }, [messages, isOpen, isThinking]);

  // Setup Web Speech API if supported in browser
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-AU';

        recognition.onstart = () => {
          setIsListening(true);
          setStatusText('M&S Advisor is listening...');
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setIsListening(false);
          setStatusText('Processing your query...');
          handleUserSubmit(transcript);
        };

        recognition.onerror = () => {
          setIsListening(false);
          setStatusText('Could not capture audio. Please type below.');
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      } catch (err) {
        console.warn('Speech recognition setup error:', err);
      }
    }
  }, []);

  // Speak text aloud using SpeechSynthesis
  const speakText = (text) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-AU';
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  };

  // Toggle Voice Input
  const toggleListening = () => {
    if (!recognitionRef.current) {
      setStatusText('Voice input not supported in this browser. Please type.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setStatusText('M&S AI is ready');
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn('Recognition start error:', e);
      }
    }
  };

  // Toggle Speech Output (Mute / Sound)
  const toggleSpeechAudio = () => {
    if (speechEnabled) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setSpeechEnabled(false);
      setStatusText('Voice readout muted');
    } else {
      setSpeechEnabled(true);
      setStatusText('Voice readout enabled');
      speakText('Voice readout enabled. How can M&S Business Solutions assist you?');
    }
  };

  // Core response processing (Extensible to external AI backend if configured)
  const processQuery = async (query) => {
    const backendUrl = import.meta.env.VITE_AI_BACKEND_URL;

    // Secure backend hook if an external API is configured
    if (backendUrl) {
      try {
        const res = await fetch(`${backendUrl}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: query, history: messages })
        });
        if (res.ok) {
          const data = await res.json();
          return {
            title: data.title || 'M&S AI Response',
            text: data.reply || data.text,
            link: data.link || null,
            linkLabel: data.linkLabel || 'Learn More'
          };
        }
      } catch (err) {
        console.warn('AI backend failed, falling back to verified knowledge engine:', err);
      }
    }

    // Verified Local Knowledge Engine
    const lower = query.toLowerCase();
    const match = KNOWLEDGE_RESPONSES.find(item => 
      item.keywords.some(k => lower.includes(k))
    );

    return match || DEFAULT_RESPONSE;
  };

  // Handle user submit
  const handleUserSubmit = async (textToSend) => {
    const text = (textToSend || inputQuery).trim();
    if (!text) return;

    setInputQuery('');
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsThinking(true);
    setStatusText('M&S Advisor is thinking...');

    // Simulate natural thinking delay
    setTimeout(async () => {
      const responseData = await processQuery(text);
      
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        title: responseData.title,
        link: responseData.link,
        linkLabel: responseData.linkLabel,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsThinking(false);
      setStatusText('M&S AI is ready');
      speakText(responseData.text);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserSubmit();
    }
  };

  const handleActionNavigation = (url) => {
    if (url) {
      navigate(url);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* --------------------------------------------------------------------
          1. FLOATING CHAT LAUNCHER (Bottom Right)
          -------------------------------------------------------------------- */}
      {!isOpen && (
        <button 
          className="ms-chat-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open M&S AI Chat Assistant"
        >
          <div className="ms-chat-launcher-badge">
            <span className="ms-live-dot" />
            <span>Ask M&S AI</span>
          </div>
          <div className="ms-chat-launcher-orb">
            <Sparkles size={26} />
          </div>
        </button>
      )}

      {/* --------------------------------------------------------------------
          2. CHAT MODAL / WINDOW (Matching Attached Visual Reference)
          -------------------------------------------------------------------- */}
      <div 
        className={`ms-chat-window-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className="ms-chat-card" role="dialog" aria-modal="true" aria-label="M&S AI Chatbot">
          <div className="ms-chat-bg-glow" />

          {/* Top Header: "✕ Close chat" Pill Button directly matching reference */}
          <header className="ms-chat-header">
            <button 
              className="ms-chat-close-pill"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <X size={15} />
              <span>Close chat</span>
            </button>
            <div className="ms-chat-firm-subtitle">
              M&S Business Solutions • Norwest
            </div>
          </header>

          {/* Center 3D Sculptural Accounting Intelligence Orb */}
          <div className="ms-chat-orb-container">
            <div className="ms-chat-orb-wrapper">
              <div className="ms-chat-orb-aura" />
              <AccountingOrb3D isListening={isListening} isThinking={isThinking} />
            </div>
            
            {/* Status Line */}
            <div className="ms-chat-status">
              <span className="ms-chat-status-pulse" />
              <span>{statusText}</span>
            </div>
          </div>

          {/* Chat Body & Conversation Transcript */}
          <div className="ms-chat-body">
            {messages.length === 1 && (
              <>
                <div className="ms-chat-hero-text">
                  “Hi there! Welcome to M&S Business Solutions. <em>How can we help you with your accounting or taxation needs today?</em>”
                </div>

                {/* Suggested Quick Actions */}
                <div className="ms-chat-quick-actions">
                  {QUICK_ACTIONS.map((action, idx) => {
                    const IconComponent = action.icon;
                    return (
                      <button
                        key={idx}
                        className="ms-chat-quick-action-btn"
                        onClick={() => handleUserSubmit(action.query)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <IconComponent size={16} color="#ff9838" />
                          {action.label}
                        </span>
                        <ArrowRight size={15} />
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Message History if user has interacted */}
            {messages.length > 1 && messages.map((msg) => (
              <div key={msg.id} className={`ms-chat-msg ${msg.sender === 'user' ? 'is-user' : 'is-bot'}`}>
                <div className="ms-chat-bubble">
                  {msg.text}
                  {msg.link && (
                    <div className="ms-chat-action-links">
                      <button 
                        className="ms-chat-link-btn"
                        onClick={() => handleActionNavigation(msg.link)}
                      >
                        <span>{msg.linkLabel}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  )}
                </div>
                <span className="ms-chat-msg-time">{msg.time}</span>
              </div>
            ))}

            {/* Thinking / Typing state */}
            {isThinking && (
              <div className="ms-chat-msg is-bot">
                <div className="ms-chat-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Controls Bar directly matching the reference visual */}
          <footer className="ms-chat-footer">
            {/* Real Text Input Field */}
            <div className="ms-chat-input-bar">
              <input
                type="text"
                className="ms-chat-input-field"
                placeholder="Ask about accounting, tax, or booking..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Bottom 3-Button Control Row (Left Audio, Center Glowing Mic, Right Send) */}
            <div className="ms-chat-controls-row">
              {/* Left: Audio/Mute Toggle */}
              <button 
                className="ms-chat-ctrl-btn"
                onClick={toggleSpeechAudio}
                title={speechEnabled ? "Mute voice readout" : "Enable voice readout"}
                aria-label="Toggle voice readout"
              >
                {speechEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>

              {/* Center: Glowing Microphone Button with Halo Ring */}
              <div className="ms-chat-mic-halo">
                <button 
                  className={`ms-chat-mic-btn ${isListening ? 'is-active' : ''}`}
                  onClick={toggleListening}
                  title={isListening ? "Listening... Click to stop" : "Click to speak"}
                  aria-label="Microphone Voice Input"
                >
                  <Mic size={24} />
                </button>
              </div>

              {/* Right: Send / Action Arrow */}
              <button 
                className="ms-chat-send-btn"
                onClick={() => handleUserSubmit()}
                disabled={!inputQuery.trim()}
                title="Send message"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
