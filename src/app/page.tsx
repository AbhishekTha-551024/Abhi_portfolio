'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
  Download,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import TerminalModal from '@/components/terminal/TerminalModal';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What projects have you worked on recently?',
  Skills: 'What are your skills? List your technical and soft skills.',
  Resume: 'Can you show me your official resume and verified CV?',
  Contact: 'How can I contact you?',
  Fun: 'What are your hobbies and interests?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Resume', color: '#0284c7', icon: FileText },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) => {
    router.push(`/chat?query=${encodeURIComponent(query)}`);
  };

  const topElementVariants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const bottomElementVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
    },
  };

  useEffect(() => {
    // Prefetch chat route for instant opening
    router.prefetch('/chat');

    // Warm up /chat and /api/chat in dev mode so first-time navigation is instant
    if (typeof window !== 'undefined') {
      fetch('/chat', { priority: 'low' }).catch(() => {});
      fetch('/api/chat', { priority: 'low' }).catch(() => {});
      Object.values(questions).forEach((q) => {
        router.prefetch(`/chat?query=${encodeURIComponent(q)}`);
      });
    }

    const img = new window.Image();
    img.src = '/landing-memojis.png';

    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, [router]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20 bg-white dark:bg-black transition-colors duration-500">
      
      {/* 1. FIXED TOP CONTROLS (Always Visible) */}
      <div className="fixed top-6 right-6 md:right-8 z-[100] flex items-center gap-2">
        <ThemeToggle />
        <TerminalModal />

        <a
          href="/Resume_Abhishek_Singh_AI.pdf"
          download="Abhishek_Singh_Resume.pdf"
          className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white/40 px-4 py-2 text-sm font-semibold text-black shadow-lg backdrop-blur-xl transition-all hover:bg-white/70 hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-neutral-900/40 dark:text-white dark:hover:bg-neutral-800"
        >
          <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
          Resume
        </a>

        <GithubButton
          animationDuration={1.5}
          label="Star"
          size="sm"
          repoUrl="https://github.com/AbhishekTha-551024/Abhi_portfolio"
        />
      </div>

      {/* 2. FIXED HIRING BADGE (Always Visible) */}
      <div className="fixed top-6 left-6 z-[100]">
        <button
          onClick={() => goToChat('Are you hiring interns right now?')}
          className="relative flex items-center gap-2 rounded-full border border-neutral-200 bg-white/40 px-4 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-xl transition-all hover:bg-white/70 hover:scale-105 dark:border-white/10 dark:bg-neutral-900/40 dark:text-white dark:hover:bg-neutral-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Hiring right now?
        </button>
      </div>

      {/* Big blurred footer name */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] font-black leading-none text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Abhishek
        </div>
      </div>

      {/* Header Content */}
      <motion.div
        className="z-10 mt-24 mb-6 flex flex-col items-center text-center md:mt-4 md:mb-8"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <WelcomeModal />

        <h2 className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-400 md:text-2xl">
          Hey, I&apos;m <span className="text-black dark:text-white font-bold">Abhishek Singh</span> 👋
        </h2>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Interactive AI Portfolio
        </h1>

        {/* Credibility Status Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-2 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
          <span className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-3.5 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 shadow-xs">
            <span>🚀</span> 3+ Production Projects
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-3.5 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 shadow-xs">
            <span>💼</span> Full-Stack Intern @ UCT
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-3.5 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 shadow-xs">
            <span>🧠</span> 200+ DSA Solved
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-3.5 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 shadow-xs">
            <span>🎓</span> SRIT Jabalpur
          </span>
        </div>
      </motion.div>

      {/* Center memoji with ambient cyber glow */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute h-56 w-56 rounded-full bg-gradient-to-tr from-purple-500/30 via-blue-500/20 to-cyan-400/30 blur-3xl pointer-events-none -z-10 animate-pulse" />
        <div className="relative h-52 w-48 overflow-hidden sm:h-72 sm:w-72 drop-shadow-2xl">
          <Image
            src="/landing-memojis.png"
            alt="AI portfolio memoji"
            width={2000}
            height={2000}
            priority
            className="translate-y-1 scale-[1.2] object-cover transition-transform duration-500 hover:scale-[1.25]"
          />
        </div>
      </div>

      {/* Input + quick questions */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full max-w-3xl flex-col items-center"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full px-4"
        >
          <div className="mx-auto flex max-w-lg items-center rounded-full border border-neutral-200 bg-white/50 py-2.5 pr-2 pl-6 backdrop-blur-xl shadow-2xl transition-all focus-within:ring-2 focus-within:ring-blue-500 dark:border-neutral-800 dark:bg-neutral-900/80">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-transparent text-base outline-none dark:text-white placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(1,113,227,0.5)] disabled:opacity-70"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-8 grid w-full grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-6">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onMouseEnter={() => router.prefetch(`/chat?query=${encodeURIComponent(questions[key])}`)}
              onTouchStart={() => router.prefetch(`/chat?query=${encodeURIComponent(questions[key])}`)}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="group relative flex flex-col h-auto aspect-square rounded-2xl bg-white/40 p-4 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 border border-neutral-200/80 dark:border-white/10 dark:bg-neutral-900/40 hover:shadow-xl"
            >
              {/* Dynamic hover glow matching key color */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none -z-10 blur-md"
                style={{ backgroundColor: `${color}25` }}
              />
              <div 
                className="flex items-center justify-center rounded-xl p-3 mb-2 transition-all duration-300 group-hover:scale-110 shadow-xs"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon size={24} style={{ color: color }} />
              </div>
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 tracking-wide">{key}</span>
            </Button>
          ))}
        </div>
      </motion.div>

      <FluidCursor />
    </div>
  );
}