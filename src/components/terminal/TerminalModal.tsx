'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface TerminalModalProps {
  trigger?: React.ReactNode;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ trigger }: TerminalModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-neutral-300">
          <p className="text-purple-400 font-bold">
            ╔═╗╔╗ ╦ ╦╦╔═╗╦ ╦╔═╗╦╔═   ╔═╗╔═╗╦═╗╔╦╗╔═╗╔═╗╦  ╦╔═╗
          </p>
          <p className="text-purple-400 font-bold">
            ╠═╣╠╩╗╠═╣║╚═╗╠═╣║╣ ╠╩╗   ╠═╝║ ║╠╦╝ ║ ╠╣ ║ ║║  ║║ ║
          </p>
          <p className="text-purple-400 font-bold">
            ╩ ╩╚═╝╩ ╩╩╚═╝╩ ╩╚═╝╩ ╩   ╩  ╚═╝╩╚═ ╩ ╚  ╚═╝╩═╝╩╚═╝
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Welcome to Abhishek Singh&apos;s Interactive Terminal v2.0
          </p>
          <p className="text-xs text-neutral-400">
            Type <span className="text-cyan-400 font-semibold">&apos;help&apos;</span> to see all available commands.
          </p>
        </div>
      ),
    },
  ]);

  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (trimmed) {
      setCommandHistory((prev) => [...prev, cmdStr.trim()]);
      setHistoryIndex(-1);
    }

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-yellow-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <p><span className="text-cyan-400 font-mono font-bold">whoami / about</span> - Summary of Abhishek</p>
              <p><span className="text-cyan-400 font-mono font-bold">projects</span> - List top featured projects</p>
              <p><span className="text-cyan-400 font-mono font-bold">skills</span> - Technical stack & tools</p>
              <p><span className="text-cyan-400 font-mono font-bold">internship</span> - Universal CodeTech intern info</p>
              <p><span className="text-cyan-400 font-mono font-bold">resume</span> - Download official resume PDF</p>
              <p><span className="text-cyan-400 font-mono font-bold">contact</span> - Email, LinkedIn, GitHub, phone</p>
              <p><span className="text-cyan-400 font-mono font-bold">calc</span> - Open Magic Calculator Pro</p>
              <p><span className="text-cyan-400 font-mono font-bold">sudo hire</span> - Direct hiring easter egg ✨</p>
              <p><span className="text-cyan-400 font-mono font-bold">clear</span> - Clear terminal window</p>
              <p><span className="text-cyan-400 font-mono font-bold">exit</span> - Close terminal</p>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        output = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-purple-300 font-bold text-sm">Abhishek Singh (Abhi)</p>
            <p>🎓 B.E. in Computer Science & Engineering, SRIT Jabalpur (2022-2026)</p>
            <p>📍 Jabalpur, India</p>
            <p>💡 Passionate software developer building high-performance Android products, real-time web applications, and AI integrations.</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-neutral-300">
            <p className="text-yellow-400 font-bold">Featured Projects:</p>
            <div className="space-y-1.5">
              <div>
                <p className="text-pink-400 font-bold">1. Magic Calculator Pro (2026)</p>
                <p className="text-neutral-400">Android product with secret tricks, strategy engine & Razorpay subs.</p>
                <a href="https://magiccalcs.in/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">https://magiccalcs.in/</a>
              </div>
              <div>
                <p className="text-blue-400 font-bold">2. QuickChat (2025)</p>
                <p className="text-neutral-400">Real-time messaging with WebSockets, JWT, Node.js & MongoDB.</p>
                <a href="https://quickchat-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">https://quickchat-drab.vercel.app/</a>
              </div>
              <div>
                <p className="text-green-400 font-bold">3. SwiftShop (2025)</p>
                <p className="text-neutral-400">Local Q-Commerce marketplace with real-time Socket.io alerts.</p>
                <a href="https://swift-shop-lac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">https://swift-shop-lac.vercel.app/</a>
              </div>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1.5 text-xs text-neutral-300">
            <p><span className="text-purple-400 font-bold">Languages:</span> Java (DSA), Kotlin, TypeScript, JavaScript, SQL</p>
            <p><span className="text-blue-400 font-bold">Frameworks:</span> Android (Jetpack Compose), React, Next.js, Node.js, Express</p>
            <p><span className="text-green-400 font-bold">Databases & Cloud:</span> Firebase, Firestore, MongoDB, JDBC</p>
            <p><span className="text-yellow-400 font-bold">APIs & Tools:</span> Groq API, Socket.io, Razorpay, Git/GitHub, Docker, Tailwind CSS</p>
          </div>
        );
        break;

      case 'internship':
        output = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-green-400 font-bold">Software Development Intern @ Universal CodeTech (UCT)</p>
            <p className="text-neutral-400">June 2025 – August 2025</p>
            <p>• Built Java backend modules and integrated relational databases using JDBC.</p>
            <p>• Designed full-stack features, optimized database queries, and applied clean OOP design.</p>
          </div>
        );
        break;

      case 'resume':
        output = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-green-400">Downloading resume...</p>
            <a
              href="/Resume_Abhishek_Singh_AI.pdf"
              download="Abhishek_Singh_Resume.pdf"
              className="text-cyan-400 underline"
            >
              Click here if download did not start automatically
            </a>
          </div>
        );
        window.open('/Resume_Abhishek_Singh_AI.pdf', '_blank');
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p>📧 Email: <a href="mailto:jagatrajjagatraj55102@gmail.com" className="text-cyan-400 underline">jagatrajjagatraj55102@gmail.com</a></p>
            <p>📱 Phone: <span className="text-neutral-200">+91 8815114272</span></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/abhishek-s-053525281/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">linkedin.com/in/abhishek-s-053525281</a></p>
            <p>🐙 GitHub: <a href="https://github.com/AbhishekTha-551024" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">github.com/AbhishekTha-551024</a></p>
          </div>
        );
        break;

      case 'calc':
        output = <p className="text-xs text-pink-400">Redirecting to Magic Calculator Pro...</p>;
        window.open('https://magiccalcs.in/', '_blank');
        break;

      case 'sudo hire':
      case 'hire':
        output = (
          <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-3 text-xs text-green-300 space-y-1">
            <p className="font-bold text-sm">🎉 Congratulations! You made an exceptional choice!</p>
            <p>Abhishek Singh is ready to bring high impact, clean code, and passion to your engineering team.</p>
            <p>Reach out directly: <span className="text-white font-bold">+91 8815114272</span> or <span className="text-white font-bold">jagatrajjagatraj55102@gmail.com</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        setIsOpen(false);
        return;

      case '':
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            command not found: {cmdStr}. Type <span className="text-yellow-400">&apos;help&apos;</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/40 px-3.5 py-1.5 text-xs font-semibold text-black shadow-lg backdrop-blur-xl transition-all hover:bg-white/70 hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-neutral-900/40 dark:text-white dark:hover:bg-neutral-800"
          title="Open Developer Terminal"
        >
          <TerminalIcon size={14} className="text-cyan-500 transition-transform group-hover:rotate-6" />
          <span>CLI</span>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0c0d14]/95 shadow-2xl backdrop-blur-2xl transition-all ${
                isMaximized ? 'h-[92vh] w-[96vw]' : 'h-[540px] w-full max-w-2xl'
              }`}
            >
              {/* Terminal Window Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900/80 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setIsOpen(false)}
                    className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition"
                    title="Close"
                  />
                  <div
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition"
                    title="Toggle Size"
                  />
                  <div
                    onClick={() => setHistory([])}
                    className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition"
                    title="Clear"
                  />
                  <span className="ml-2 font-mono text-xs text-neutral-400">
                    abhi@portfolio: ~ (bash)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-neutral-400">
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="hover:text-white transition p-1"
                  >
                    {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white transition p-1"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Terminal Screen */}
              <div
                onClick={() => inputRef.current?.focus()}
                className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-3 cursor-text selection:bg-purple-500/30 custom-scrollbar"
              >
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    {item.command !== 'welcome' && (
                      <div className="flex items-center gap-2 text-neutral-400">
                        <span className="text-green-400 font-bold">abhi@portfolio:~$</span>
                        <span className="text-white font-semibold">{item.command}</span>
                      </div>
                    )}
                    <div className="pl-0">{item.output}</div>
                  </div>
                ))}

                {/* Active Input Line */}
                <div className="flex items-center gap-2 text-neutral-400 pt-1">
                  <span className="text-green-400 font-bold">abhi@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white outline-none border-none p-0 font-mono text-xs focus:ring-0"
                    placeholder="type a command (e.g. 'help', 'projects', 'sudo hire')..."
                    autoFocus
                  />
                </div>
                <div ref={bottomRef} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
