'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    toast.success(`${label} copied to clipboard! 📋`, {
      description: text,
      duration: 2500,
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactMethods = [
    {
      key: 'email',
      icon: <Mail className="h-5 w-5 text-blue-500" />,
      title: 'Email',
      value: 'jagatrajjagatraj55102@gmail.com',
      href: 'mailto:jagatrajjagatraj55102@gmail.com?subject=Hello%20Abhishek%20-%20Opportunity%20Inquiry',
      actionLabel: 'Send Mail',
      canCopy: true,
      copyValue: 'jagatrajjagatraj55102@gmail.com',
      accent: 'border-blue-500/30 hover:border-blue-500/60',
      glow: 'from-blue-500/10 to-transparent',
    },
    {
      key: 'phone',
      icon: <Phone className="h-5 w-5 text-emerald-500" />,
      title: 'Phone / WhatsApp',
      value: '+91 8815114272',
      href: 'tel:+918815114272',
      actionLabel: 'Call / WhatsApp',
      canCopy: true,
      copyValue: '+91 8815114272',
      accent: 'border-emerald-500/30 hover:border-emerald-500/60',
      glow: 'from-emerald-500/10 to-transparent',
    },
    {
      key: 'linkedin',
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      title: 'LinkedIn',
      value: 'in/abhishek-s-053525281',
      href: 'https://www.linkedin.com/in/abhishek-s-053525281',
      actionLabel: 'Connect on LinkedIn',
      canCopy: false,
      accent: 'border-blue-600/30 hover:border-blue-600/60',
      glow: 'from-blue-600/10 to-transparent',
    },
    {
      key: 'github',
      icon: <Github className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
      title: 'GitHub',
      value: 'AbhishekTha-551024',
      href: 'https://github.com/AbhishekTha-551024',
      actionLabel: 'View Repositories',
      canCopy: false,
      accent: 'border-neutral-500/30 hover:border-neutral-400/60',
      glow: 'from-neutral-500/10 to-transparent',
    },
    {
      key: 'location',
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      title: 'Location',
      value: 'Jabalpur, Madhya Pradesh, India',
      href: 'https://maps.google.com/?q=Jabalpur,+India',
      actionLabel: 'View on Google Maps',
      canCopy: false,
      accent: 'border-purple-500/30 hover:border-purple-500/60',
      glow: 'from-purple-500/10 to-transparent',
    },
    {
      key: 'instagram',
      icon: <Instagram className="h-5 w-5 text-pink-500" />,
      title: 'Instagram',
      value: '@joyfull_abhi',
      href: 'https://www.instagram.com/joyfull_abhi/',
      actionLabel: 'Follow on Instagram',
      canCopy: false,
      accent: 'border-pink-500/30 hover:border-pink-500/60',
      glow: 'from-pink-500/10 to-transparent',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-4 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col space-y-1 text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-green-500 dark:text-green-400">
            Let&apos;s Connect
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Have an exciting project, full-time role, or internship opportunity? Reach out directly via email, phone, or LinkedIn!
        </p>
      </div>

      {/* Quick Direct CTA Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 p-6 backdrop-blur-xl shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-400" />
              Direct Collaboration & Hiring
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-lg">
              Open to Software Developer, Android Engineer (Kotlin), and Full-Stack Web roles.
            </p>
          </div>

          <a
            href="mailto:jagatrajjagatraj55102@gmail.com?subject=Job%20Opportunity%20/%20Project%20Collaboration"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 active:scale-95 shrink-0"
          >
            <Send size={14} />
            Compose Direct Email
          </a>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods.map((method) => (
          <div
            key={method.key}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${method.accent} bg-white/50 p-5 backdrop-blur-xl shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-900/50`}
          >
            {/* Ambient Corner Glow */}
            <div className={`absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl ${method.glow} blur-2xl pointer-events-none`} />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-2.5 shadow-sm border border-neutral-200/80 dark:border-white/10">
                    {method.icon}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {method.title}
                  </h3>
                </div>

                {/* Copy Button if applicable */}
                {method.canCopy && method.copyValue && (
                  <button
                    onClick={() => copyToClipboard(method.copyValue!, method.title)}
                    className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-neutral-700 shadow-xs transition hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-700 active:scale-95"
                    title={`Copy ${method.title}`}
                  >
                    {copiedKey === method.title ? (
                      <>
                        <Check size={12} className="text-green-500" />
                        <span className="text-green-500 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Value Text */}
              <p className="font-mono text-sm font-medium text-neutral-700 dark:text-neutral-200 break-all py-1.5">
                {method.value}
              </p>
            </div>

            {/* Action Link Button */}
            <div className="pt-3">
              <a
                href={method.href}
                target={method.href.startsWith('mailto') || method.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-1.5 rounded-2xl border border-neutral-200/80 bg-neutral-100/60 py-2.5 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-900 hover:text-white active:scale-98 dark:border-white/10 dark:bg-neutral-800/60 dark:text-neutral-200 dark:hover:bg-white dark:hover:text-black shadow-xs"
              >
                <span>{method.actionLabel}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
