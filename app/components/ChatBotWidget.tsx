/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ArrowRight } from 'lucide-react';
import Image from 'next/image';


const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m Jimmy Nguyen\'s AI Assistant, how can I help you today? ' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const PYTHON_API = process.env.NEXT_PUBLIC_PYTHON_API;

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
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${PYTHON_API}/jimmynguyen/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage,
          user_name: "Guest"
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.response || data.message || 'Sorry, I couldn\'t answer that question.'
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Sorry, an error occurred. Please try again later.'
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Cannot connect to server. Please check your network connection.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };



  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button with pulse animation and unread badge */}
      {!isOpen && (
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
          
          {/* Unread message badge */}
          {hasUnread && (
            <div className="absolute -top-1 -right-1 z-10 animate-in zoom-in duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
                <div className="relative bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg">
                  1
                </div>
              </div>
            </div>
          )}
          
          <button
            onClick={handleOpenChat}
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
          </button>
        </div>
      )}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-5 fade-in duration-300 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-[400px] h-[600px] flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-lg">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-white p-5 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <Image
                                  src="/logo-JN.png"
                                  alt="JN • AI Logo"
                                  width={100}
                                  height={100}
                                  className="object-cover"
                                  priority
                                />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-wide">Jimmy Nguyen&apos;AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-95">Online • Here to help</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="relative cursor-pointer z-10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 transform hover:rotate-90 active:scale-90"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages with improved styling */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {messages.map((msg, idx) => (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3 shadow-md transition-all duration-200 hover:shadow-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
                

              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none px-5 py-3 border border-gray-200 dark:border-gray-700 shadow-md">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                    <span className="text-sm text-gray-500">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input with improved design */}
          <div className="p-5 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-end space-x-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="flex-1 resize-none rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-200 placeholder:text-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-white rounded-2xl p-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:shadow-md"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;