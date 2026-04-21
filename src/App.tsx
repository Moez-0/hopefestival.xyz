import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState, useMemo } from "react";

/**
 * Antigravity Motion Wrapper
 */
interface AntigravityProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Antigravity({ children, className = "", delay = 0, variant = 1 }: AntigravityProps & { variant?: 1 | 2 | 3 }) {
  const rotation = variant === 1 ? -1 : variant === 2 ? 0.5 : 2;
  const translation = variant === 1 ? -10 : variant === 2 ? 15 : -5;

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, translation, 0],
        rotate: [0, rotation, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section 1: Hero - The Manifesto
 */
function Hero() {
  return (
    <section className="h-screen grid grid-cols-12 grid-rows-12 px-8 py-8 relative overflow-hidden border-b border-brand-offwhite">
      <div className="col-start-1 col-span-12 md:col-span-8 row-start-1 row-span-8 flex items-end">
        <Antigravity variant={1}>
          <h1 className="text-[25vw] md:text-[260px] font-display font-black leading-[0.8] tracking-[-0.06em] text-brand-offwhite select-none uppercase">
            HOPE
          </h1>
        </Antigravity>
      </div>
      
      <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-9 md:row-start-1 row-span-4 flex flex-col justify-center md:pr-12 md:text-right mt-8 md:mt-0">
        <div className="label-mono mb-4 text-brand-offwhite/50">The Pillars</div>
        <div className="text-[14px] md:text-[18px] font-bold leading-relaxed tracking-tighter uppercase">
          MUSIC<br />ART<br />FASHION<br />KNOWLEDGE
        </div>
      </div>
      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-brand-offwhite opacity-20 hidden md:block"></div>

      <div className="absolute bottom-8 right-8 label-mono opacity-50">
        Edition 01 / Medina
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-12 h-full w-full opacity-5">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="border-r border-brand-offwhite h-full" />
        ))}
      </div>
    </section>
  );
}

/**
 * Section 2: The Medina Edition (Story)
 */
function MedinaEdition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = "A cultural manifesto. Activating historic spaces with modern creative expression.";
  const words = text.split(" ");

  return (
    <>
      <div className="w-full h-auto py-6 border-b border-brand-offwhite px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="label-mono text-center md:text-left">
          A Cultural Manifesto. Activating historic spaces with modern creative expression.
        </div>
        <div className="label-mono opacity-50">
          Limited Access / 2026
        </div>
      </div>
      
      <section ref={containerRef} className="min-h-screen py-0 grid grid-cols-1 md:grid-cols-12 border-b border-brand-offwhite">
        {/* Left side: Typographic Manifesto Layout */}
        <div className="md:col-span-5 p-8 border-r border-brand-offwhite flex flex-col justify-between bg-brand-offwhite text-brand-black">
          <div className="flex flex-col justify-center h-full space-y-12 py-12">
            <div className="space-y-4">
              <p className="text-[12px] md:text-[14px] font-black uppercase leading-tight tracking-tighter">
                WE WANTED TO BRING A NEW BREATH TO THE MEDINA.<br />
                A YOUNG, URBAN, CREATIVE ONE,<br />
                SOMETHING WE HAD NEVER REALLY FELT BEFORE,<br />
                SOMETHING THAT TRULY RESONATES WITH OUR GENERATION.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] md:text-[14px] font-black uppercase leading-tight tracking-tighter">
                WE WANTED TO CREATE A SPACE<br />
                WHERE YOU COULD FEEL INSPIRED, MOVED,<br />
                DISCOVER YOURSELF, LEARN, GROW,<br />
                AND MOVE FORWARD.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] md:text-[14px] font-black uppercase leading-tight tracking-tighter">
                THIS EDITION WAS OUR WAY<br />
                OF REMINDING YOU THAT TOMORROW CAN BE BETTER.
              </p>
            </div>
            
            {/* Minimalist Logo Placeholder */}
            <div className="pt-12 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <div className="w-4 h-8 bg-brand-black rotate-45 transform translate-x-1"></div>
                <div className="w-4 h-8 bg-brand-black -rotate-45 transform -translate-x-1 font-black text-[20px] flex items-center justify-center text-white select-none">H</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-[10px] label-mono uppercase opacity-40">
            Medina Manifesto // Edition 01
          </div>
        </div>

        {/* Right side: Movement Header */}
        <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-12 space-y-12">
          <Antigravity variant={3}>
            <div className="space-y-2">
              <h2 className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase">JOIN THE</h2>
              <h2 className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase md:ml-32">MOVEMENT</h2>
            </div>
          </Antigravity>

          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex justify-end w-full md:w-auto">
              <a href="mailto:inquiry@hopefestival.xyz" className="text-2xl md:text-3xl font-light underline decoration-1 underline-offset-8 hover:text-white transition-colors hover:italic hover-trigger">
                inquiry@hopefestival.xyz
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Section 3: The Pillars (Interaction)
 */
function Pillars() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const pillars = [
    { title: "Art", desc: "Digital & Physical Boundaries", size: "md:col-span-8 row-span-1" },
    { title: "Knowledge", desc: "Synthetic Symbiotics", size: "md:col-span-4 row-span-2" },
    { title: "Music", desc: "Acoustic Brutalism", size: "md:col-span-4 row-span-1" },
    { title: "Fashion", desc: "Textural Sovereignty", size: "md:col-span-8 row-span-1" },
  ];

  return (
    <section className="min-h-screen py-32 px-8 border-b border-brand-offwhite">
      <h2 className="label-mono mb-16 opacity-40">Core Pillars // Interaction</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-0 border border-brand-offwhite">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`relative p-8 border border-brand-offwhite group hover-trigger flex flex-col justify-between min-h-[300px] md:min-h-0 bg-brand-black transition-colors duration-500 overflow-hidden ${pillar.size}`}
            onMouseEnter={() => setHoveredPillar(pillar.title)}
            onMouseLeave={() => setHoveredPillar(null)}
          >
            <div className="relative z-10 w-full overflow-hidden">
              <span className="label-mono mb-4 block opacity-50">0{i + 1}</span>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-300 break-words leading-[0.9]">
                {pillar.title}
              </h3>
            </div>

            <div className="relative z-10 self-end text-right">
              <p className="label-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {pillar.desc}
              </p>
            </div>

            {/* Noise Reveal Overlay */}
            <AnimatePresence>
              {hoveredPillar === pillar.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-0 bg-brand-offwhite/5 pointer-events-none"
                >
                  <div className="noise-overlay opacity-30" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black z-[-1] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Section: Gallery - Archive
 */
function Gallery() {
  const photos = [
    { id: 1, size: "md:col-span-7 row-span-2", src: "/past-event-1.png" },
    { id: 2, size: "md:col-span-5 row-span-1", src: "/past-event-2.png" },
    { id: 3, size: "md:col-span-5 row-span-1", src: "/past-event-3.png" },
    { id: 4, size: "md:col-span-4 row-span-1", src: "/past-event-4.png" },
    { id: 5, size: "md:col-span-8 row-span-1", src: "/past-event-5.png" },
  ];

  return (
    <section className="min-h-screen py-32 px-8 border-b border-brand-offwhite">
      <div className="flex justify-between items-end mb-16">
        <h2 className="label-mono opacity-40">Archive // Past Moments</h2>
        <div className="label-mono text-right hidden md:block opacity-60">
          Past Events Archive<br />
          HOPE Festival Moments.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative group grayscale hover:grayscale-0 transition-all duration-1000 bg-brand-darkgray border border-brand-offwhite/10 overflow-hidden ${photo.size}`}
          >
            <img
              src={photo.src}
              alt={`Past Event ${photo.id}`}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 label-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
              FRAME_{photo.id}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/**
 * Section 4: Contact
 */
function Contact() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-end px-8 py-12 border-b border-brand-offwhite">
      <div className="flex flex-col md:flex-row items-end justify-between p-8 border border-brand-offwhite">
        <div className="label-mono mb-4 md:mb-0">Limited Access / 2026</div>
        <div className="label-mono">Concept by Moez</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-brand-black text-brand-offwhite selection:bg-brand-offwhite selection:text-brand-black overflow-x-hidden">
      <div className="noise-overlay" />
      
      <main>
        <Hero />
        <MedinaEdition />
        <Pillars />
        <Gallery />
        <Contact />
      </main>

      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-brand-offwhite" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-brand-offwhite" />
        <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-brand-offwhite" />
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite border-b border-brand-offwhite">
      <main className="min-h-screen grid grid-cols-1 md:grid-cols-12 px-8 py-12">
        <div className="md:col-span-8 flex flex-col justify-center border border-brand-offwhite p-8 md:p-12">
          <div className="label-mono opacity-50 mb-6">Error / 404</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9]">Page Not Found</h1>
          <p className="mt-6 text-sm md:text-base uppercase tracking-wide opacity-80 max-w-xl">
            The page you requested does not exist in this edition.
          </p>
          <a
            href="/"
            className="mt-10 inline-block w-fit border border-brand-offwhite px-6 py-3 label-mono uppercase hover:bg-brand-offwhite hover:text-brand-black transition-colors"
          >
            Return Home
          </a>
        </div>
      </main>
    </div>
  );
}

