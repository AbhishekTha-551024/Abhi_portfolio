'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    // Corrected to the email from your resume
    window.open('mailto:jagatrajjagatraj55102@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12 shadow-2xl"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md border-2 border-primary/20">
            <img
              src="/profile-abhi.jpg" // Change this to your actual photo path
              alt="Abhishek Singh"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Abhishek Singh
            </h2>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
        </div>

        {/* Status badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for Internships
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Availability</p>
            <p className="text-muted-foreground text-sm">
              Ready for Winter/Summer 2025-26
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Jabalpur / Remote / Bangalore
            </p>
          </div>
        </div>

        {/* Tech stack - Updated from your Resume */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Core Tech Stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2 mt-2">
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Backend:</strong> Java (DSA), Node.js, Express</li>
                <li><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS</li>
                <li><strong>Database:</strong> MongoDB, SQL (JDBC)</li>
              </ul>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Real-time:</strong> Socket.io, WebSockets</li>
                <li><strong>AI Tools:</strong> Mistral, Prompt Engineering</li>
                <li>
                  <a
                    href="/chat?query=Show me Abhishek's projects"
                    className="cursor-pointer font-bold text-blue-500 hover:underline"
                  >
                    View 200+ DSA Solutions →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring to the table
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Proven experience from my <strong>UCT Internship</strong> where I built Java backend modules. 
          I don't just write code; I build real-time systems like <strong>Quick Chat</strong> and 
          scalable platforms like <strong>SwiftShop</strong>. I focus on low-latency, secure, and clean code.
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
        >
          Hire Abhishek
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;