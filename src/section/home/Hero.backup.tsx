"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { CAROUSEL_DATA, TRUST_INDICATORS } from "@/AllData/Home/HeroSection";

// --- COMPONENT: TYPEWRITER EFFECT ---
const Typewriter = ({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayedText("");
    indexRef.current = 0;

    const typeNext = () => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(typeNext, speed);
      }
    };

    typeNext();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return (
    <span className="inline-flex items-center min-h-[1.5em] !text-[clamp(18px,1.5vw,30px)]">
      {displayedText}
      <span className="ml-1 animate-pulse text-[#2776ea] font-bold">|</span>
    </span>
  );
};

interface Carousel3DProps {
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  rotateX: any;
  rotateY: any;
  isHovered: boolean;
}

export const Carousel3D = ({
  activeIndex,
  onNext,
  onPrev,
  rotateX,
  rotateY,
  isHovered,
}: Carousel3DProps) => {
  const data = CAROUSEL_DATA[activeIndex];

  return (
    // FIX 1: Applied clamp() directly to the inline style so it scales beautifully on large screens without breaking or stretching.
    <div
      className="relative mx-auto perspective-1000 lg:flex-none w-full max-w-sm lg:max-w-none"
      style={{
        width: "clamp(355px, 28vw, 560px)",
        height: "clamp(480px, 38vw, 760px)"
      }}
    >
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-2xl bg-white p-[clamp(16px,1.5vw,24px)] border border-[#2776ea]/15 transition-all duration-200 ease-linear group"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={data.id}
            initial={{ opacity: 0, z: 20 }}
            animate={{ opacity: 1, z: 0 }}
            exit={{ opacity: 0, z: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col justify-between"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              style={{ transform: "translateZ(50px)" }}
              className="mb-[clamp(16px,1.5vw,24px)] flex items-center justify-between"
            >
              <div className="w-[clamp(50px,4vw,70px)] h-[clamp(50px,4vw,70px)] relative">
                <Image
                  src={data.img}
                  alt={data.title}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2776ea] rounded-full px-3 py-1">
                {data.title}
              </span>
            </div>

            <div style={{ transform: "translateZ(75px)" }}>
              <h3 className="mb-3 font-bold text-slate-900 leading-tight !text-[clamp(20px,1.8vw,28px)]">
                {data.headline}
              </h3>
            </div>

            <div
              style={{ transform: "translateZ(50px)" }}
              className="flex-grow"
            >
              <h3 className="mb-6  leading-relaxed text-slate-600 font-medium !text-[14px] lg:!text-[clamp(16px,1vw,20px)]  ">
                {data.description}
              </h3>
            </div>

            <div
              style={{ transform: "translateZ(60px)" }}
              className="mb-[clamp(16px,2vw,32px)] grid grid-cols-1 gap-2"
            >
              {data.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-white to-[#2776ea]/[0.02] px-3 py-2 font-semibold text-slate-700 border border-[#2776ea]/10 !text-[clamp(11px,0.8vw,14px)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] flex-shrink-0"></span>
                  {stat}
                </div>
              ))}
            </div>

            <div style={{ transform: "translateZ(10px)" }}>
              <Link
                href={data.url}
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2776ea] to-[#2776ea]/90 py-[clamp(12px,1vw,16px)] font-bold text-white transition-all hover:from-[#76ea27] hover:to-[#76ea27]/90 !text-[clamp(13px,1vw,16px)]"
              >
                {data.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className={`absolute inset-0 z-0 rounded-2xl bg-gradient-to-tr from-[#2776ea]/5 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 z-50 transform translateZ(120px)">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-md border border-[#2776ea]/15 text-slate-700 hover:bg-[#2776ea] hover:text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-50 transform translateZ(120px)">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-md border border-[#2776ea]/15 text-slate-700 hover:bg-[#76ea27] hover:text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- COUNT UP ---
function CountUp({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(progress === 1 ? target : Number((easeOut * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

// --- MAIN HERO COMPONENT ---
export default function HeroStacked() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    const xPct = e.clientX / window.innerWidth - 0.5;
    const yPct = e.clientY / window.innerHeight - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  useEffect(() => {
    setIsMounted(true);
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, []);

  const startAutoAdvance = () => {
    stopAutoAdvance();
    autoAdvanceRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length,
    );
  }, []);

  const handleManualNext = () => {
    stopAutoAdvance();
    nextSlide();
    startAutoAdvance();
  };
  const handleManualPrev = () => {
    stopAutoAdvance();
    prevSlide();
    startAutoAdvance();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoAdvance();
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
    startAutoAdvance();
  };

  return (
    <section
      id="hero"
      onMouseMove={handleGlobalMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      className="relative  bg-white overflow-hidden font-sora pt-24 pb-16"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-white" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#2776ea]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#76ea27]/5 to-transparent" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#2776ea]/10 to-transparent transform rotate-45" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#76ea27]/10 to-transparent transform -rotate-45" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#2776ea]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#76ea27]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center pb-8">
        <div className=" relative z-10 container-pd px-4 sm:px-6  h-full flex flex-col items-center lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <h1 className="font-sora text-slate-900 tracking-tighter mb-4 font-bold !text-[clamp(36px,3.2vw,72px)] !leading-[1.1]">
              Transforming Business <br className="hidden lg:block" /> Through

              <span
                className="block mt-2 bg-gradient-to-r from-[#2776ea] via-[#2776ea]/90 to-[#76ea27] bg-clip-text text-transparent font-extrabold pb-2 !text-[clamp(36px,3.2vw,72px)] md:whitespace-nowrap"
                style={{ wordSpacing: '0.15em' }}
              >
                Intelligent Technology
              </span>
            </h1>

            <div className="lg:hidden w-full mb-8 z-20">
              <Carousel3D
                activeIndex={activeIndex}
                onNext={handleManualNext}
                onPrev={handleManualPrev}
                rotateX={rotateX}
                rotateY={rotateY}
                isHovered={isHovered}
              />
            </div>

            <div className="w-full mb-10 hidden lg:flex items-center lg:justify-start h-16">
              <h2 className="font-sora font-medium text-slate-600 tracking-tight">
                <Typewriter
                  text={CAROUSEL_DATA[activeIndex].headline}
                  speed={40}
                />
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md lg:max-w-none justify-center lg:justify-start">
              <div className="flex-1 sm:flex-none">
                <Link
                  href="/contact"
                  className="w-full rounded-2xl inline-flex items-center justify-center text-slate-700 font-bold border border-[#2776ea]/20 bg-gradient-to-r from-white to-[#2776ea]/[0.02] hover:border-[#2776ea] hover:text-[#2776ea] py-4 px-8 uppercase tracking-widest transition-all group !text-[clamp(12px,0.9vw,16px)]"
                >
                  Talk to an Expert
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform ml-2"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full pt-8 border-t border-[#2776ea]/10 grid grid-cols-2 place-items-center sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-8 lg:gap-12">
              {TRUST_INDICATORS.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="font-black text-slate-900 leading-none mb-1 !text-[clamp(22px,1.8vw,36px)]">
                    <CountUp target={item.target} suffix={item.suffix} />
                  </span>

                  <span className="font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center lg:justify-start gap-1.5 !text-[clamp(11px,0.8vw,14px)]">
                    <item.icon size={12} className="text-[#76ea27]" />
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center perspective-1000 relative order-2">
            <Carousel3D
              activeIndex={activeIndex}
              onNext={handleManualNext}
              onPrev={handleManualPrev}
              rotateX={rotateX}
              rotateY={rotateY}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>
    </section>
  );
}