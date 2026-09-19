'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Database, 
  Wrench, 
  Award, 
  CheckCircle2, 
  Flame, 
  Sparkles,
  Layers
} from 'lucide-react';

interface SkillCategory {
  category: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  skills: { name: string; level?: string }[];
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      category: 'Languages',
      subtitle: 'Core programming & data structures',
      icon: <Code2 className="h-5 w-5 text-blue-400" />,
      accent: 'border-blue-500/30 bg-blue-500/5',
      glow: 'from-blue-500/10 to-transparent',
      skills: [
        { name: 'Java (DSA Specialization)' },
        { name: 'Kotlin (Android)' },
        { name: 'TypeScript' },
        { name: 'JavaScript (ES6+)' },
        { name: 'SQL' },
      ],
    },
    {
      category: 'Frameworks & Mobile',
      subtitle: 'Native Android & modern web',
      icon: <Cpu className="h-5 w-5 text-purple-400" />,
      accent: 'border-purple-500/30 bg-purple-500/5',
      glow: 'from-purple-500/10 to-transparent',
      skills: [
        { name: 'Android (Jetpack Compose)' },
        { name: 'React.js' },
        { name: 'Next.js 15 (App Router)' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' },
      ],
    },
    {
      category: 'Databases, Cloud & APIs',
      subtitle: 'Real-time state, auth & persistence',
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      accent: 'border-emerald-500/30 bg-emerald-500/5',
      glow: 'from-emerald-500/10 to-transparent',
      skills: [
        { name: 'Firebase & Firestore' },
        { name: 'MongoDB & Mongoose' },
        { name: 'Socket.io (WebSockets)' },
        { name: 'JDBC & Relational DBs' },
        { name: 'Razorpay Payment Gateway' },
        { name: 'Groq & OpenAI APIs' },
      ],
    },
    {
      category: 'Tools & DevOps',
      subtitle: 'Workflow, versioning & shipping',
      icon: <Wrench className="h-5 w-5 text-amber-400" />,
      accent: 'border-amber-500/30 bg-amber-500/5',
      glow: 'from-amber-500/10 to-transparent',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'Docker' },
        { name: 'Postman' },
        { name: 'VS Code & Android Studio' },
        { name: 'Vercel Deployment' },
        { name: 'JWT & Authentication' },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-5xl py-4 space-y-6 font-sans"
    >
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400">
            Technical Stack
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Skills & Core Competencies
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A blend of algorithmic foundations, native Android development, and full-stack real-time web engineering.
        </p>
      </div>

      {/* DSA & Problem Solving Highlight Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20 p-6 backdrop-blur-xl shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-yellow-500/20 p-1.5 text-yellow-400 border border-yellow-500/30">
                <Flame size={18} />
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-yellow-400">
                Competitive Programming & DSA
              </span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              200+ Problems Solved on GeeksforGeeks
              <Sparkles size={18} className="text-purple-400" />
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
              Strong focus on optimized time/space complexity, data structures (Trees, Graphs, Dynamic Programming, Heaps), and object-oriented architecture in Java.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 backdrop-blur-md">
              <Award size={15} className="text-blue-400" />
              DSA Certified (Apna College)
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 backdrop-blur-md">
              <CheckCircle2 size={15} className="text-green-400" />
              Full Stack Web Certified
            </div>
          </div>
        </div>
      </div>

      {/* 4 Skill Category Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-3xl border ${cat.accent} bg-white/40 dark:bg-neutral-900/40 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-[1.01] hover:border-white/20`}
          >
            {/* Ambient Corner Glow */}
            <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl ${cat.glow} blur-2xl pointer-events-none`} />

            {/* Category Header */}
            <div className="flex items-start gap-3.5 mb-4">
              <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800/90 p-2.5 shadow-sm border border-neutral-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {cat.category}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="group/chip relative flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:border-purple-400/80 dark:hover:bg-neutral-700/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 group-hover/chip:bg-blue-500 dark:group-hover/chip:bg-purple-400 transition-colors" />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
