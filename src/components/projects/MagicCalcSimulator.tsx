'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Download, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function MagicCalcSimulator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [magicMode, setMagicMode] = useState(false);
  const [hasExploded, setHasExploded] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  // Get current date formatted for the Date Force trick
  const getDateForceNumber = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return `${month}${day}${year}${hours}${mins}`;
  };

  const handleDigit = (digit: string) => {
    setDisplay((prev) => (prev === '0' || lastAction === 'calc' ? digit : prev + digit));
    setLastAction('digit');
  };

  const handleOperator = (op: string) => {
    setEquation(`${display} ${op}`);
    setDisplay('0');
    setLastAction('op');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasExploded(false);
    setLastAction(null);
  };

  const handleCalculate = () => {
    if (magicMode) {
      // Trigger Date Force Trick!
      const forced = getDateForceNumber();
      setDisplay(forced);
      setEquation('🪄 Date Force Activated!');
      setHasExploded(true);
      setLastAction('calc');
      return;
    }

    try {
      const sanitized = `${equation} ${display}`
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      // Simple safe evaluation of math expressions
      const result = Function(`'use strict'; return (${sanitized})`)();
      setDisplay(String(Number(result.toFixed(6))));
      setEquation(`${equation} ${display} =`);
      setLastAction('calc');
    } catch {
      setDisplay('Error');
      setLastAction('calc');
    }
  };

  const triggerMagicTrick = () => {
    setMagicMode(!magicMode);
    if (!magicMode) {
      setEquation('Magic Trick Armed (Press = to trigger)');
    } else {
      setEquation('Standard Math');
      setHasExploded(false);
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#130924] to-[#0a0514] p-6 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Interactive In-Browser Widget
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-white flex items-center gap-2">
            Magic Calculator Simulator
            <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs text-purple-300 border border-purple-500/30">
              Live Demo
            </span>
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Test the secret Date Force trick & modular calculation engine right here!
          </p>
        </div>

        <button
          onClick={triggerMagicTrick}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-lg ${
            magicMode
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/40 scale-105 ring-2 ring-purple-400'
              : 'bg-white/10 text-neutral-300 hover:bg-white/20'
          }`}
        >
          <Wand2 size={14} className={magicMode ? 'animate-spin' : ''} />
          {magicMode ? 'Magic Armed: ON ✨' : 'Arm Magic Trick'}
        </button>
      </div>

      {/* Calculator Body */}
      <div className="mt-6 flex flex-col items-center">
        <div className="w-full max-w-xs rounded-3xl border border-white/15 bg-black/60 p-5 shadow-inner shadow-purple-950/50 backdrop-blur-2xl">
          {/* Status & Display */}
          <div className="mb-4 rounded-2xl bg-[#0e071a]/90 p-4 border border-purple-900/30 text-right">
            <div className="h-4 text-xs font-mono text-purple-400 truncate">
              {equation || (magicMode ? 'Magic Armed ✨' : 'Standard Math')}
            </div>
            <div className="mt-1 font-mono text-3xl font-extrabold tracking-tight text-white overflow-hidden text-ellipsis">
              {display}
            </div>
            {hasExploded && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-left text-[11px] text-pink-400 flex items-center gap-1.5"
              >
                <Sparkles size={13} className="text-yellow-400" />
                Date Force: Forced to today&apos;s date & time!
              </motion.div>
            )}
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-4 gap-2 text-base font-semibold">
            {/* Row 1 */}
            <button
              onClick={handleClear}
              className="flex h-12 items-center justify-center rounded-2xl bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700 active:scale-95 transition"
            >
              C
            </button>
            <button
              onClick={() => setDisplay((p) => (p.startsWith('-') ? p.slice(1) : '-' + p))}
              className="flex h-12 items-center justify-center rounded-2xl bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700 active:scale-95 transition"
            >
              ±
            </button>
            <button
              onClick={() => handleOperator('%')}
              className="flex h-12 items-center justify-center rounded-2xl bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700 active:scale-95 transition"
            >
              %
            </button>
            <button
              onClick={() => handleOperator('÷')}
              className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition"
            >
              ÷
            </button>

            {/* Row 2 */}
            <button onClick={() => handleDigit('7')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">7</button>
            <button onClick={() => handleDigit('8')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">8</button>
            <button onClick={() => handleDigit('9')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">9</button>
            <button onClick={() => handleOperator('×')} className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 active:scale-95 transition">×</button>

            {/* Row 3 */}
            <button onClick={() => handleDigit('4')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">4</button>
            <button onClick={() => handleDigit('5')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">5</button>
            <button onClick={() => handleDigit('6')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">6</button>
            <button onClick={() => handleOperator('-')} className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition">-</button>

            {/* Row 4 */}
            <button onClick={() => handleDigit('1')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">1</button>
            <button onClick={() => handleDigit('2')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">2</button>
            <button onClick={() => handleDigit('3')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">3</button>
            <button onClick={() => handleOperator('+')} className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/20 active:scale-95 transition">+</button>

            {/* Row 5 */}
            <button onClick={() => handleDigit('0')} className="col-span-2 flex h-12 items-center justify-start pl-6 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">0</button>
            <button onClick={() => handleDigit('.')} className="flex h-12 items-center justify-center rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition">.</button>
            <button
              onClick={handleCalculate}
              className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/30 active:scale-95 transition"
            >
              =
            </button>
          </div>
        </div>

        {/* Action Link to Live Product */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://magiccalcs.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-500/30 transition hover:scale-105 active:scale-95"
          >
            <Download size={14} />
            Download Real Android App (magiccalcs.in)
          </a>
        </div>
      </div>
    </div>
  );
}
