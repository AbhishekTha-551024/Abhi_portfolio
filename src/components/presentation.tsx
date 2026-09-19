'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  GraduationCap, 
  Briefcase, 
  Smartphone, 
  MapPin, 
  Download, 
  ArrowUpRight, 
  Mail, 
  Sparkles,
  Award
} from 'lucide-react';

export function Presentation() {
  const profile = {
    name: 'Abhishek Singh',
    role: 'Software Developer & Android Engineer',
    education: 'SRIT Jabalpur (2022 - 2026)',
    location: 'Jabalpur, India',
    description:
      "Hey! I'm Abhishek (also known as Abhi) 👋\n\nI'm a computer science engineering student passionate about building real-world products — from native Android applications with Kotlin & Jetpack Compose to scalable real-time systems using WebSockets and modern web stacks.",
    src: '/profile-Abhi-03.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  const credentials = [
    {
      icon: <GraduationCap className="h-4 w-4 text-blue-400" />,
      title: 'B.E. Computer Science & Eng.',
      subtitle: 'SRIT Jabalpur (2022 – 2026)',
      accent: 'border-blue-500/20 bg-blue-500/5',
    },
    {
      icon: <Briefcase className="h-4 w-4 text-emerald-400" />,
      title: 'Full-Stack Intern (Java, SQL)',
      subtitle: 'Universal CodeTech (Summer 2025)',
      accent: 'border-emerald-500/20 bg-emerald-500/5',
    },
    {
      icon: <Smartphone className="h-4 w-4 text-purple-400" />,
      title: 'Magic Calculator Pro',
      subtitle: 'Published Android Product (magiccalcs.in)',
      accent: 'border-purple-500/20 bg-purple-500/5',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-4 font-sans space-y-8">
      {/* Top Profile Card */}
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/50 p-6 md:p-8 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-neutral-900/50">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          
          {/* Profile Photo with Ambient Glow Ring */}
          <div className="relative mx-auto md:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 opacity-40 blur-xl transition-all duration-500 hover:opacity-75" />
              
              <div className="relative h-64 w-64 md:h-72 md:w-72 overflow-hidden rounded-3xl border-2 border-white/40 shadow-2xl backdrop-blur-md dark:border-white/20">
                <Image
                  src={profile.src}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = profile.fallbackSrc;
                  }}
                />
              </div>

              {/* Status Pill on Photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-neutral-800/90 dark:text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Open for Roles</span>
              </div>
            </div>
          </div>

          {/* Bio & Information */}
          <div className="flex flex-col justify-center space-y-4 md:col-span-7 text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                  Digital Persona
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <MapPin size={12} />
                  {profile.location}
                </span>
              </div>

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                {profile.role}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
              {profile.description}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Android (Compose)', 'Full Stack (Node/React)', 'Java DSA', 'Kotlin', 'Firebase', 'Socket.io'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-100/80 px-3 py-1 text-xs font-medium text-neutral-800 dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/Resume_Abhishek_Singh_AI.pdf"
                download="Abhishek_Singh_Resume.pdf"
                className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                <Download size={14} />
                Download Resume
              </a>

              <a
                href="/chat?query=What%20projects%20have%20you%20worked%20on%20recently%3F"
                className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/70 px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                Explore Projects
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/chat?query=How%20can%20I%20contact%20you%3F"
                className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/70 px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <Mail size={14} />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Credential & Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {credentials.map((cred, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border ${cred.accent} p-4 backdrop-blur-md shadow-sm transition-all hover:scale-102 hover:shadow-md`}
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="rounded-xl bg-white/80 p-2 shadow-xs dark:bg-neutral-800">
                {cred.icon}
              </div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                {cred.title}
              </h4>
            </div>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
              {cred.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Presentation;
