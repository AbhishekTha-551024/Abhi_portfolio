// File: data.tsx
import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
      { src: '/projects/swiftshop-home.png', alt: 'SwiftShop Storefront' },
      { src: '/projects/swiftshop-admin.png', alt: 'SwiftShop Admin' },
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
      { src: '/projects/quickchat-home.png', alt: 'QuickChat Messaging Interface' },
      { src: '/projects/quickchat-login.png', alt: 'Secure Authentication Screen' },
    ],
  },
  {
    title: 'CarRental',
    description:
      '{CarRental (2025):} Built a full-stack car rental platform where users can book cars and owners can list their vehicles. Implemented authentication, booking management, and payment integration. Designed responsive UI and managed data using MongoDB and Express.',
    techStack: [
      'MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'JWT'
    ],
    date: 'February 2025',
    links: [
      { name: 'Live Demo', url: 'https://car-rental-k18a.vercel.app/' },
      { name: 'GitHub Repository', url: 'https://github.com/AbhishekTha-551024/CarRental' },
    ],
    images: [
      { src: '/projects/carrental-home.png', alt: 'CarRental Home Interface' },
      { src: '/projects/carrental-login.png', alt: 'CarRental Login Screen' },
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

      {/* Images */}
      {projectData.images?.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
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
    src: '/projects/swiftshop-preview.png', 
    content: <ProjectContent project={{ title: 'SwiftShop' }} />,
  },
  {
    category: 'Real-Time Social Media',
    title: 'QuickChat',
    src: '/projects/quickchat-preview.png', 
    content: <ProjectContent project={{ title: 'QuickChat' }} />,
  },
  {
    category: 'Real-Time CarRental',
    title: 'CarRental',
    src: '/projects/carrental-preview.png', 
    content: <ProjectContent project={{ title: 'CarRental' }} />,
  },
];
