'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Instagram, MapPin, Sparkles } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'jagatrajjagatraj55102@gmail.com',
      href: 'mailto:jagatrajjagatraj55102@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 8815114272',
      href: 'tel:+918815114272',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Jabalpur, MP, India',
      href: 'https://www.google.com/maps/search/?api=1&query=Jabalpur',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'Abhishek Singh',
      href: 'https://www.linkedin.com/in/abhishek-s-053525281',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'AbhishekTha-551024',
      href: 'https://github.com/AbhishekTha-551024',
      color: 'text-gray-900',
      bgColor: 'bg-gray-100'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'Instagram',
      value: '@uv.0402',
      href: 'https://www.instagram.com/uv.0402/',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto p-4">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          Available for Opportunities
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Let's Connect</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          I'm building the future of AI-powered web apps. Whether you want to discuss 
          <strong> MERN Stack</strong>, <strong>Java DSA</strong>, or <strong>Mistral AI</strong>, my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors ${contact.bgColor} ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-xl font-bold">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm font-medium mb-4 truncate">
                {contact.value}
              </CardDescription>
              <Button 
                variant="secondary" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-xl"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View on Map' : `Connect on ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Branding for "Trending" */}
      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Why Hire Me?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <p className="font-bold text-lg">200+</p>
            <p className="opacity-80">DSA Problems Solved</p>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <p className="font-bold text-lg">Full Stack</p>
            <p className="opacity-80">MERN & Next.js Expert</p>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <p className="font-bold text-lg">AI Ready</p>
            <p className="opacity-80">Mistral & LLM Integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}