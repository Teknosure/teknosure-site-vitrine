"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "alex";
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGES: Message[] = [
  {
    id: "init-1",
    role: "alex",
    content:
      "Bonjour ! Je suis **Alex**, l'assistant virtuel de Teknosure. 👋",
    timestamp: new Date(),
  },
  {
    id: "init-2",
    role: "alex",
    content:
      "Je suis là pour répondre à vos questions sur nos services : cybersécurité, cloud managé, infogérance et ingénierie logicielle. Comment puis-je vous aider ?",
    timestamp: new Date(),
  },
];

const QUICK_REPLIES = [
  "Vos services cloud",
  "Cybersécurité",
  "Demander un devis",
  "Nous contacter",
];

function formatTime(date: Date) {
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function renderContent(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(WELCOME_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
      setHasUnread(false);
    }
  }, [messages, isOpen, isMinimized]);

  // Show unread badge after 4s if chat is closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasUnread(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
  }

  function handleClose() {
    setIsOpen(false);
    setIsMinimized(false);
  }

  function handleMinimize() {
    setIsMinimized(true);
  }

  function handleMaximize() {
    setIsMinimized(false);
  }

  function handleSend(text?: string) {
    const content = (text ?? input).trim();
    if (!content) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate Alex "typing" — real logic comes later
    setTimeout(() => {
      setIsTyping(false);
      const alexMsg: Message = {
        id: `alex-${Date.now()}`,
        role: "alex",
        content:
          "Merci pour votre message ! Notre équipe prend en compte votre demande. En attendant, n'hésitez pas à consulter notre page **contact** ou à nous appeler au **+33 1 46 88 49 75**.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, alexMsg]);
    }, 1400);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* ── Chat window ─────────────────────────────────────────────────── */}
      <div
        className={`
          fixed bottom-24 right-5 z-50 flex flex-col
          w-[360px] max-w-[calc(100vw-2.5rem)]
          bg-white rounded-2xl shadow-2xl border border-gray-100
          transition-all duration-300 ease-in-out origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          ${isMinimized ? "h-[64px] overflow-hidden" : "h-[540px] max-h-[calc(100vh-8rem)]"}
        `}
        style={{ boxShadow: "0 8px 40px 0 rgba(27,154,210,0.15), 0 2px 12px 0 rgba(0,0,0,0.10)" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-t-2xl shrink-0 cursor-pointer select-none"
          style={{ background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }}
          onClick={isMinimized ? handleMaximize : undefined}
        >
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
          </div>

          {/* Name + status */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Alex</p>
            <p className="text-white/70 text-xs">
              {isTyping ? (
                <span className="flex items-center gap-1">
                  <span className="chatbot-dot-anim" />
                  <span className="chatbot-dot-anim" style={{ animationDelay: "0.15s" }} />
                  <span className="chatbot-dot-anim" style={{ animationDelay: "0.3s" }} />
                  <span className="ml-1">écrit…</span>
                </span>
              ) : (
                "Assistant Teknosure · En ligne"
              )}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 shrink-0">
            {!isMinimized && (
              <button
                onClick={handleMinimize}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Réduire"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Alex avatar for bot messages */}
              {msg.role === "alex" && (
                <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }}>
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
              )}

              <div className={`max-w-[80%] flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`
                    px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                    ${msg.role === "user"
                      ? "text-white rounded-br-sm"
                      : "text-gray-800 bg-white border border-gray-100 shadow-sm rounded-bl-sm"
                    }
                  `}
                  style={msg.role === "user"
                    ? { background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }
                    : undefined}
                >
                  {renderContent(msg.content)}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }}>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                <span className="chatbot-dot-anim w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                <span className="chatbot-dot-anim w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" style={{ animationDelay: "0.15s" }} />
                <span className="chatbot-dot-anim w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 flex gap-2 flex-wrap border-t border-gray-100 bg-white shrink-0">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap"
                style={{
                  borderColor: "#B8DFF2",
                  color: "#1B9AD2",
                  backgroundColor: "#E8F5FC",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1B9AD2";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#E8F5FC";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1B9AD2";
                }}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 bg-white rounded-b-2xl shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Votre message…"
            className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 outline-none transition-colors placeholder-gray-400 text-gray-800"
            style={{ fontSize: "0.875rem" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#1B9AD2")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }}
            aria-label="Envoyer"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* ── Floating trigger button ──────────────────────────────────────── */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #0D6EA1 0%, #1B9AD2 100%)" }}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat avec Alex"}
      >
        {/* Pulse ring (visible only when closed) */}
        {!isOpen && (
          <span
            className="absolute w-14 h-14 rounded-full chatbot-pulse"
            style={{ background: "rgba(27,154,210,0.35)" }}
          />
        )}

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[9px] text-white font-bold">1</span>
          </span>
        )}

        <span className="relative z-10 transition-transform duration-300">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </span>
      </button>
    </>
  );
}
