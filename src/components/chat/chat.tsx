'use client';

import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

// Component imports
import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import { ChatBubble, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import { Info, Sparkles } from 'lucide-react';
import { GithubButton } from '../ui/github-button';
import HelperBoost from './HelperBoost';

// --- Types ---
interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

// --- Dynamic Avatar with Premium Detection ---
const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool, videoRef, isTalking }: AvatarProps) => {
      const [isIOSDevice, setIsIOSDevice] = useState(false);

      useEffect(() => {
        const checkIOS = () => {
          const ua = window.navigator.userAgent;
          return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        };
        setIsIOSDevice(checkIOS());
      }, []);

      return (
        <motion.div 
          animate={isTalking ? { scale: 1.05 } : { scale: 1 }}
          className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-500 
            ${hasActiveTool ? 'h-24 w-24' : 'h-36 w-36'} 
            ${isTalking ? 'drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]' : 'drop-shadow-xl'}`}
        >
          <div className="relative overflow-hidden rounded-full border-4 border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 cursor-pointer" onClick={() => (window.location.href = '/')}>
            {isIOSDevice ? (
              <img src="/landing-memojis.png" alt="Avatar" className="h-full w-full scale-125 object-contain" />
            ) : (
              <video ref={videoRef} className="h-full w-full scale-125 object-contain" muted playsInline loop>
                <source src="/final_memojis.webm" type="video/webm" />
                <source src="/final_memojis_ios.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>
      );
    }),
  { ssr: false }
);

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  const {
    messages, input, handleInputChange, handleSubmit, isLoading, stop, setInput, reload, addToolResult, append
  } = useChat({
    onResponse: () => { setLoadingSubmit(false); setIsTalking(true); },
    onFinish: () => { setIsTalking(false); },
    onError: (err) => { toast.error(err.message); setIsTalking(false); }
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const lastAI = messages.findLast((m) => m.role === 'assistant');
    const lastUser = messages.findLast((m) => m.role === 'user');
    const isLatestAI = messages.findLastIndex(m => m.role === 'assistant') > messages.findLastIndex(m => m.role === 'user');
    
    return {
      currentAIMessage: isLatestAI ? lastAI : null,
      latestUserMessage: lastUser,
      hasActiveTool: !!lastAI?.parts?.some(p => p.type === 'tool-invocation' && p.toolInvocation.state === 'result')
    };
  }, [messages]);

  const isToolInProgress = messages.some(m => m.role === 'assistant' && m.parts?.some(p => p.type === 'tool-invocation' && p.toolInvocation.state !== 'result'));

  const submitQuery = (query: string) => {
    if (!query.trim() || isToolInProgress) return;
    setLoadingSubmit(true);
    append({ role: 'user', content: query });
  };

  useEffect(() => {
    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      submitQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (videoRef.current) isTalking ? videoRef.current.play() : videoRef.current.pause();
  }, [isTalking]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-100">
      
      {/* --- Background Ambient Light --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* --- Top Navigation --- */}
      <nav className="absolute top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-white/5">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
          AI Assistant
        </div>
        <div className="flex items-center gap-3">
          <GithubButton repoUrl="https://github.com/AbhishekTha-551024/Abhi_portfolio" />
          <WelcomeModal trigger={<button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"><Info className="w-5 h-5" /></button>} />
        </div>
      </nav>

      {/* --- Main Chat Stage --- */}
      <main className="relative flex h-full flex-col items-center">
        
        {/* Header Avatar Section */}
        <header className={`z-50 flex flex-col items-center transition-all duration-700 ease-in-out ${messages.length > 0 ? 'mt-20 scale-90' : 'mt-[20vh] scale-100'}`}>
          <Avatar hasActiveTool={hasActiveTool} videoRef={videoRef} isTalking={isTalking} />
          <AnimatePresence>
            {!messages.length && (
              <motion.h1 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent"
              >
                How can I help you today?
              </motion.h1>
            )}
          </AnimatePresence>
        </header>

        {/* Scrollable Conversation */}
        <div ref={scrollRef} className="w-full flex-1 overflow-y-auto no-scrollbar pt-8 pb-40 px-4 flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-8">
            <AnimatePresence mode="popLayout">
              {/* User Input Mirror (When Thinking) */}
              {latestUserMessage && !currentAIMessage && !loadingSubmit && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-end">
                  <div className="max-w-[80%] rounded-3xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-500/20">
                    <ChatMessageContent message={latestUserMessage} isLast isLoading={false} reload={() => Promise.resolve(null)} />
                  </div>
                </motion.div>
              )}

              {/* AI Response View */}
              {currentAIMessage && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={currentAIMessage.id} className="w-full">
                  <SimplifiedChatView message={currentAIMessage} isLoading={isLoading} reload={reload} addToolResult={addToolResult} />
                </motion.div>
              )}

              {/* Loading State */}
              {loadingSubmit && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-slate-400 italic">
                  <Sparkles className="w-4 h-4 animate-spin text-blue-500" />
                  <span>Thinking...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Floating Bottom Control --- */}
        <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col items-center px-4">
          <div className="w-full max-w-2xl flex flex-col gap-4 rounded-[2.5rem] border border-white/20 bg-white/70 dark:bg-black/70 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-all hover:border-white/40">
            <HelperBoost submitQuery={submitQuery} setInput={setInput} />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={(e) => { e.preventDefault(); if (input.trim()) { submitQuery(input); setInput(''); } }}
              isLoading={isLoading}
              stop={stop}
              isToolInProgress={isToolInProgress}
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-400 opacity-50">
            @Abhishek Singh
          </p>
        </div>
      </main>
    </div>
  );
};

export default Chat;