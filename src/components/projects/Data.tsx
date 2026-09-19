// File: data.tsx
import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import MagicCalcSimulator from './MagicCalcSimulator';

// --- PROJECT DATABASE ---
const PROJECT_CONTENT = [
  {
    title: 'SwiftShop',
    description:
      '{SwiftShop – Local Q-Commerce Platform (2025):} Developed a hyper-local marketplace enabling shop owners to digitize inventory and receive instant customer orders. Implemented real-time order notifications using {Socket.io} to ensure immediate communication between vendors and users. Built a secure vendor dashboard for inventory management and utilized {MongoDB} for scalable product cataloging. Optimized the system for low-latency order processing and secure payment state management. Node.js, Socket.io, MongoDB, Express.',
    techStack: [
      'MongoDB', 'Express.js', 'React', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'Cloudinary', 'JWT'
    ],
    date: 'January 2025',
    links: [
      { name: 'Live Demo', url: 'https://swift-shop-lac.vercel.app/' },
      { name: 'GitHub Repository', url: 'https://github.com/AbhishekTha-551024/SwiftShop' },
    ],
    images: [
      { src: '/projects/swiftshop-preview.svg', alt: 'SwiftShop Storefront & Orders' },
    ],
  },
  {
    title: 'QuickChat',
    description:
      '{QuickChat (2025):} Developed a real-time messaging application using WebSockets for instant data exchange. Implemented user authentication and secure login using JWT and bcrypt. Managed message storage and user profiles using MongoDB and Mongoose. Integrated automated email notifications and secure session handling via cookies. Node.js, Socket.io, MongoDB.',
    techStack: [
      'Socket.io', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'JWT'
    ],
    date: 'February 2025',
    links: [
      { name: 'Live Demo', url: 'https://quickchat-drab.vercel.app/' },
      { name: 'GitHub Repository', url: 'https://github.com/AbhishekTha-551024/QUICKCHAT' },
    ],
    images: [
      { src: '/projects/quickchat-preview.svg', alt: 'QuickChat Messaging Interface' },
    ],
  },
  {
    title: 'Magic Calculator Pro',
    description:
      '{Magic Calculator Pro – Android Product (2026):} Built and independently developed a production-ready Android calculator application with advanced calculation features and a premium subscription system. Implemented Firebase Authentication with Email and Google sign-in and Firestore for user management and cloud data persistence. Integrated Razorpay Checkout for subscription payments and designed a modular calculation engine using strategy-based components for extensibility. Developed onboarding experiences including Free Tour and Pro Masterclass with persistent user progress tracking. Kotlin, Jetpack Compose, Firebase, Firestore, Razorpay, Android, Git.',
    techStack: [
      'Kotlin', 'Jetpack Compose', 'Android', 'Firebase', 'Firestore', 'Razorpay', 'Git'
    ],
    date: '2026',
    links: [
      { name: 'Live Website', url: 'https://magiccalcs.in/' },
      { name: 'GitHub Repository', url: 'https://github.com/AbhishekTha-551024' },
    ],
    images: [
      { src: '/projects/magic-calc-hero.png', alt: 'Magic Calculator Pro - The Calculator That Isn\'t Just a Calculator' },
      { src: '/projects/magic-calc-dateforce.png', alt: 'Magic Calculator Pro - Automatic Date Force Feature' },
      { src: '/projects/magic-calc-features.png', alt: 'Magic Calculator Pro - Identical Native Calculator Interface' },
    ],
  }
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
interface ProjectProps {
  title: string;
}

// Normalize strings for comparison
const normalizeString = (str: string) => str.toLowerCase().replace(/\s/g, '');

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find(
    (p) => normalizeString(p.title) === normalizeString(project.title)
  );

  if (!projectData) {
    return <div className="p-4 text-center">Project details coming soon...</div>;
  }

  return (
    <div className="space-y-10">
      {/* Project Info */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      {projectData.links?.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Links</h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Simulator for Magic Calculator */}
      {normalizeString(project.title) === 'magiccalculatorpro' && (
        <MagicCalcSimulator />
      )}

      {/* Images */}
      {projectData.images?.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
export const data = [
  {
    category: 'E-Commerce & Management',
    title: 'SwiftShop',
    src: '/projects/swiftshop-preview.svg', 
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://swift-shop-lac.vercel.app/',
    githubUrl: 'https://github.com/AbhishekTha-551024/SwiftShop',
    accentColor: '#10b981',
    content: <ProjectContent project={{ title: 'SwiftShop' }} />,
  },
  {
    category: 'Real-Time Social Media',
    title: 'QuickChat',
    src: '/projects/quickchat-preview.svg', 
    tags: ['Socket.io', 'Node.js', 'React', 'MongoDB'],
    liveUrl: 'https://quickchat-drab.vercel.app/',
    githubUrl: 'https://github.com/AbhishekTha-551024/QUICKCHAT',
    accentColor: '#3b82f6',
    content: <ProjectContent project={{ title: 'QuickChat' }} />,
  },
  {
    category: 'Android & Production Product',
    title: 'Magic Calculator Pro',
    src: '/projects/magic-calc-card.png', 
    tags: ['Kotlin', 'Compose', 'Firebase', 'Razorpay'],
    liveUrl: 'https://magiccalcs.in/',
    githubUrl: 'https://github.com/AbhishekTha-551024',
    accentColor: '#a855f7',
    content: <ProjectContent project={{ title: 'Magic Calculator Pro' }} />,
  },
];
