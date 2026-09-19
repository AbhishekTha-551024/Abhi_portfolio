// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp } from 'lucide-react';
import React, { useEffect } from 'react';


interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-8"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-6 dark:border-neutral-700 dark:bg-neutral-800">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything..."
            className="text-md w-full border-none bg-transparent text-black dark:text-white placeholder:text-gray-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={!isLoading && !input.trim()}
            className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            {isLoading ? (
              <span className="h-3.5 w-3.5 rounded-sm bg-white" />
            ) : (
              <ArrowUp className="h-6 w-6" />
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
