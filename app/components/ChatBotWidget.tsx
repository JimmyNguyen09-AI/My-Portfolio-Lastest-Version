"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2, MessageCircle, Send, X } from "lucide-react";

const renderInline = (text: string): React.ReactNode[] => {
  const tokens: React.ReactNode[] = [];
  const pattern = /(\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) tokens.push(text.slice(last, match.index));

    if (match[2] !== undefined) {
      tokens.push(
        <strong key={match.index} className="font-semibold text-[#1A1A1A]">
          {match[2]}
        </strong>,
      );
    } else if (match[3] !== undefined) {
      tokens.push(
        <em key={match.index} className="italic text-[#1A1A1A]">
          {match[3]}
        </em>,
      );
    } else if (match[4] !== undefined) {
      tokens.push(
        <code
          key={match.index}
          className="border border-[#1A1A1A]/15 bg-[#EBE5DE] px-1.5 py-0.5 text-xs text-[#1A1A1A] font-[var(--font-inter)]"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5] !== undefined && match[6] !== undefined) {
      tokens.push(
        <a
          key={match.index}
          href={match[6]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#D4AF37] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors duration-300"
        >
          {match[5]}
          <ArrowRight className="h-3 w-3" />
        </a>,
      );
    }
    last = pattern.lastIndex;
  }

  if (last < text.length) tokens.push(text.slice(last));
  return tokens;
};

const FormattedMessage = ({ content }: { content: string }) => {
  const lines = content.split("\n");
  const result: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (line.trim() === "") {
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const className =
        level === 1
          ? "font-[var(--font-playfair)] text-base text-[#1A1A1A]"
          : level === 2
            ? "font-[var(--font-playfair)] text-sm text-[#1A1A1A]"
            : "font-[var(--font-inter)] text-sm font-medium text-[#1A1A1A]";
      result.push(
        <p key={index} className={className}>
          {renderInline(headingMatch[2])}
        </p>,
      );
      index += 1;
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (index < lines.length && lines[index].match(/^\d+\.\s/)) {
        items.push(lines[index].replace(/^\d+\.\s/, ""));
        index += 1;
      }
      result.push(
        <ol key={`ol-${index}`} className="space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#6C6863]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#D4AF37] shrink-0" />
              <span className="flex-1 leading-6">{renderInline(item)}</span>
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.match(/^[-*]\s/)) {
      const items: string[] = [];
      while (index < lines.length && lines[index].match(/^[-*]\s/)) {
        items.push(lines[index].replace(/^[-*]\s/, ""));
        index += 1;
      }
      result.push(
        <ul key={`ul-${index}`} className="space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#6C6863]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#1A1A1A]/30 shrink-0" />
              <span className="flex-1 leading-6">{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      result.push(
        <div
          key={`code-${index}`}
          className="overflow-hidden border border-[#1A1A1A]/12 bg-[#EBE5DE]"
        >
          {language && (
            <div className="border-b border-[#1A1A1A]/8 px-3 py-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em] text-[#6C6863]">
              {language}
            </div>
          )}
          <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-3 font-[var(--font-inter)] text-xs text-[#1A1A1A]">
            {codeLines.join("\n")}
          </pre>
        </div>,
      );
      continue;
    }

    if (line.match(/^---+$/)) {
      result.push(<hr key={index} className="border-[#1A1A1A]/10" />);
      index += 1;
      continue;
    }

    result.push(
      <p key={index} className="text-sm leading-6 text-[#6C6863]">
        {renderInline(line)}
      </p>,
    );
    index += 1;
  }

  return <div className="space-y-2">{result}</div>;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Jimmy Nguyen's AI Assistant, how can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pythonApi = process.env.NEXT_PUBLIC_PYTHON_API;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${pythonApi}/jimmynguyen/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, user_name: "Guest" }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.response || data.message || "Sorry, I couldn't answer that question.",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, an error occurred. Please try again later." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Cannot connect to server. Please check your network connection.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <div className="relative">
          {hasUnread && (
            <div className="absolute -right-1 -top-1 z-10">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] font-[var(--font-inter)] text-[9px] font-semibold text-[#1A1A1A] shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                1
              </div>
            </div>
          )}
          <button
            onClick={handleOpenChat}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1A1A1A]/15 bg-[#F9F8F6] text-[#1A1A1A] shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_4px_24px_rgba(0,0,0,0.16)]"
            aria-label="Open chat"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="flex h-[36rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[#1A1A1A]/12 bg-[#F9F8F6] shadow-[0_8px_32px_rgba(0,0,0,0.14)] sm:w-[25rem]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/8 bg-[#F9F8F6] px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[#1A1A1A]/12 bg-[#EBE5DE] shrink-0">
                <Image
                  src="/logo-JN.png"
                  alt="JN AI Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-[var(--font-playfair)] text-base text-[#1A1A1A]">
                  Jimmy Nguyen AI
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#6C6863]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6C6863] transition-colors duration-300 hover:text-[#1A1A1A]"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-[#F9F8F6] px-4 py-5">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "border border-[#1A1A1A]/15 bg-[#1A1A1A] text-[#F9F8F6]"
                        : "border border-[#1A1A1A]/8 bg-[#EBE5DE]"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <FormattedMessage content={message.content} />
                    ) : (
                      <p className="whitespace-pre-wrap font-[var(--font-inter)] text-sm">
                        {message.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 border border-[#1A1A1A]/8 bg-[#EBE5DE] px-4 py-3">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-[#D4AF37]" />
                    <span className="font-[var(--font-inter)] text-xs text-[#6C6863]">
                      Thinking...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-[#1A1A1A]/8 bg-[#F9F8F6] px-4 py-4">
            <div className="flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className="flex-1 resize-none border-b border-[#1A1A1A]/20 bg-transparent py-2 font-[var(--font-inter)] text-sm text-[#1A1A1A] placeholder:font-[var(--font-playfair)] placeholder:italic placeholder:text-[#6C6863]/70 focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[#1A1A1A] bg-[#1A1A1A] text-[#F9F8F6] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
