/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Loader2, MessageCircle, Send, X } from 'lucide-react';

const renderInline = (text: string): React.ReactNode[] => {
  const tokens: React.ReactNode[] = [];
  const pattern = /(\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      tokens.push(text.slice(last, match.index));
    }

    if (match[2] !== undefined) {
      tokens.push(
        <strong key={match.index} className="font-semibold text-white">
          {match[2]}
        </strong>,
      );
    } else if (match[3] !== undefined) {
      tokens.push(
        <em key={match.index} className="italic text-white/90">
          {match[3]}
        </em>,
      );
    } else if (match[4] !== undefined) {
      tokens.push(
        <code
          key={match.index}
          className="cyber-cut-sm border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.12)] px-1.5 py-0.5 text-xs text-[var(--accent-tertiary)]"
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
          className="inline-flex items-center gap-1 text-[var(--accent-tertiary)] hover:text-[var(--accent)]"
        >
          {match[5]}
          <ArrowRight className="h-3 w-3" />
        </a>,
      );
    }

    last = pattern.lastIndex;
  }

  if (last < text.length) {
    tokens.push(text.slice(last));
  }

  return tokens;
};

const FormattedMessage = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  const result: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (line.trim() === '') {
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const className =
        level === 1
          ? 'text-base font-semibold text-white'
          : level === 2
            ? 'text-sm font-semibold text-white'
            : 'text-sm font-medium text-white/90';

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
        items.push(lines[index].replace(/^\d+\.\s/, ''));
        index += 1;
      }

      result.push(
        <ol key={`ol-${index}`} className="space-y-2">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2 text-sm text-white/78">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
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
        items.push(lines[index].replace(/^[-*]\s/, ''));
        index += 1;
      }

      result.push(
        <ul key={`ul-${index}`} className="space-y-2">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2 text-sm text-white/78">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent-tertiary)]" />
              <span className="flex-1 leading-6">{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      index += 1;

      result.push(
        <div
          key={`code-${index}`}
          className="cyber-cut-sm overflow-hidden border border-[rgba(0,212,255,0.24)] bg-[rgba(10,10,15,0.96)]"
        >
          {language && (
            <div className="border-b border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/42">
              {language}
            </div>
          )}
          <pre className="overflow-x-auto whitespace-pre-wrap px-3 py-3 text-xs text-[var(--accent-tertiary)]">
            {codeLines.join('\n')}
          </pre>
        </div>,
      );
      continue;
    }

    if (line.match(/^---+$/)) {
      result.push(<hr key={index} className="border-white/10" />);
      index += 1;
      continue;
    }

    result.push(
      <p key={index} className="text-sm leading-6 text-white/78">
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
    { role: 'assistant', content: "Hello! I'm Jimmy Nguyen's AI Assistant, how can I help you today?" },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pythonApi = process.env.NEXT_PUBLIC_PYTHON_API;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) {
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages((previous) => [...previous, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${pythonApi}/jimmynguyen/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          user_name: 'Guest',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((previous) => [
          ...previous,
          {
            role: 'assistant',
            content: data.response || data.message || "Sorry, I couldn't answer that question.",
          },
        ]);
      } else {
        setMessages((previous) => [
          ...previous,
          {
            role: 'assistant',
            content: 'Sorry, an error occurred. Please try again later.',
          },
        ]);
      }
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: 'assistant',
          content: 'Cannot connect to server. Please check your network connection.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[rgba(0,255,136,0.24)] blur-xl" />
          {hasUnread && (
            <div className="absolute -right-1 -top-1 z-10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-[var(--accent-secondary)] text-[10px] font-semibold text-black shadow-[0_0_16px_rgba(255,0,255,0.4)]">
                1
              </div>
            </div>
          )}
          <button
            onClick={handleOpenChat}
            className="cyber-cut-sm relative flex h-16 w-16 items-center justify-center border border-[rgba(0,255,136,0.45)] bg-[rgba(10,10,15,0.92)] text-[var(--accent)] shadow-[0_0_24px_rgba(0,255,136,0.22)] transition hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            aria-label="Open chat"
          >
            <MessageCircle className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="cyber-terminal flex h-[36rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col shadow-[0_0_28px_rgba(0,255,136,0.18)] sm:w-[25rem]">
          <div className="cyber-terminal-header">
            <div className="flex min-w-0 items-center gap-3">
              <div className="cyber-cut-sm flex h-12 w-12 items-center justify-center border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.08)]">
                <Image
                  src="/logo-JN.png"
                  alt="JN AI Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-[var(--font-orbitron)] text-sm uppercase tracking-[0.18em] text-white">
                  Jimmy Nguyen AI
                </h3>
                <p className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_#00ff88]" />
                  Online Feed
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="cyber-icon-box h-10 w-10"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="cyber-grid flex-1 overflow-y-auto bg-[linear-gradient(180deg,rgba(10,10,15,0.98),rgba(16,16,24,0.96))] px-4 py-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[86%] px-4 py-3 text-sm leading-6 ${
                      message.role === 'user'
                        ? 'cyber-cut-sm border border-[rgba(255,0,255,0.32)] bg-[rgba(255,0,255,0.1)] text-white'
                        : 'cyber-cut-sm border border-[rgba(0,255,136,0.24)] bg-[rgba(18,18,26,0.92)] text-white/80'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <FormattedMessage content={message.content} />
                    ) : (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="cyber-cut-sm flex items-center gap-2 border border-[rgba(0,255,136,0.24)] bg-[rgba(18,18,26,0.92)] px-4 py-3 text-sm text-white/70">
                    <Loader2 className="h-4 w-4 animate-spin text-[var(--accent)]" />
                    Typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/10 px-4 py-4">
            <div className="flex items-end gap-3">
              <div className="cyber-field cyber-field--textarea flex-1">
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="cyber-textarea min-h-[2.5rem] resize-none py-4"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="cyber-button cyber-button-glitch h-[2.5rem] w-[2.5rem] shrink-0 px-0 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
