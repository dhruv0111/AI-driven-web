import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUseCase } from '../contexts/UseCaseContext';
import chatScenarios from '../data/chatData';
import { ChatMessage } from '../types';

const ChatSimulator: React.FC = () => {
  const { useCase } = useUseCase();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load messages when use case changes
  useEffect(() => {
    setMessages(chatScenarios[useCase]);
  }, [useCase]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(2, 11),
      sender: 'user',
      message: newMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate AI typing response
    setIsTyping(true);
    
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: Math.random().toString(36).substring(2, 11),
        sender: 'ai',
        message: "I'm analyzing your request and will respond shortly with the most helpful information possible.",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  return (
    <div className="card flex flex-col h-[600px] max-h-[80vh]">
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`
                  max-w-[80%] px-4 py-3 rounded-2xl
                  ${message.sender === 'user' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800'}
                `}
              >
                <div className="text-sm whitespace-pre-wrap">{message.message}</div>
                <div className={`text-xs mt-1 text-right ${message.sender === 'user' ? 'text-primary-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  {formatTimestamp(message.timestamp)}
                </div>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-4"
            >
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: 'loop', times: [0, 0.5, 1] }}
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: 'loop', times: [0, 0.5, 1], delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: 'loop', times: [0, 0.5, 1], delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2 p-2 border-t dark:border-gray-700">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn btn-primary p-2"
          disabled={!newMessage.trim()}
        >
          <Send className="h-5 w-5" />
        </motion.button>
      </form>
    </div>
  );
};

export default ChatSimulator;