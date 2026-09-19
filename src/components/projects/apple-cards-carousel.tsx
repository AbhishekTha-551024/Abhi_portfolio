'use client';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Get the card width and gap based on viewport size
  const getScrollDistance = () => {
    // Card width (w-60 = 240px) + gap-4 (16px)
    const cardWidth = 240;
    const gap = 16;
    const totalWidth = cardWidth + gap;

    // Scroll by 1 card
    const cardsToScroll = 1;
    return totalWidth * cardsToScroll;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -getScrollDistance(),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: getScrollDistance(),
        behavior: 'smooth',
      });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 240; // w-60 (240px)
      const gap = isMobile() ? 16 : 16; // gap-4 (16px)
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              'absolute right-0 z-[10] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
            )}
          ></div>

          <div
            className={cn(
              'flex flex-row justify-start gap-4',
              'mx-auto max-w-7xl' // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                  },
                }}
                key={'card' + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2 md:mr-20">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  //@ts-ignore
  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-52 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white font-sans dark:bg-neutral-900"
            >
              {/* Sticky close button */}
              <div className="sticky top-4 z-52 flex justify-end px-8 pt-8 md:px-14 md:pt-8">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              {/* Header section with consistent padding */}
              <div className="relative px-8 pt-2 pb-0 md:px-14">
                <div>
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="text-base font-medium text-black dark:text-white"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                  >
                    {card.title}
                  </motion.p>
                </div>
              </div>

              {/* Content with consistent padding */}
              <div className="px-8 pt-8 pb-14 md:px-14">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative z-10 flex h-88 w-60 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-neutral-950 text-left transition-all duration-300 border border-white/10"
        style={{
          boxShadow: `0 0 25px -5px ${card.accentColor || '#3b82f6'}30`,
        }}
        whileHover={{
          scale: 1.025,
          boxShadow: `0 0 35px 2px ${card.accentColor || '#3b82f6'}55`,
          borderColor: `${card.accentColor || '#3b82f6'}80`,
        }}
      >
        {/* Top & Bottom Dark Gradients for legibility */}
        <div className="absolute inset-x-0 top-0 z-30 h-36 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-40 p-5">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-[11px] font-bold tracking-wider uppercase"
            style={{ color: card.accentColor || '#93c5fd' }}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 text-left font-sans text-xl font-extrabold text-white [text-wrap:balance]"
          >
            {card.title}
          </motion.p>
        </div>

        {/* Background Image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Bottom Footer with Tags and Direct Action Buttons */}
        <div className="relative z-40 p-4 space-y-3 w-full">
          {/* Tech Badges */}
          {card.tags && card.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {card.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-neutral-300 backdrop-blur-md border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons: Live Demo & GitHub */}
          <div className="flex items-center gap-2 pt-0.5">
            {card.liveUrl && (
              <a
                href={card.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition hover:bg-white hover:text-black active:scale-95 shadow-md"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {card.githubUrl && (
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center rounded-xl bg-black/60 p-2 text-white/80 backdrop-blur-md border border-white/15 transition hover:bg-white/20 hover:text-white active:scale-95"
                title="View Code on GitHub"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'transition-all duration-300',
        isLoading ? 'opacity-60 blur-sm' : 'opacity-100 blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="eager"
      priority
      unoptimized
      alt={alt ? alt : 'Project preview'}
      {...rest}
    />
  );
};
