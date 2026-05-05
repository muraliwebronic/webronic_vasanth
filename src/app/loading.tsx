"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WebroinicPreloader() {
    return (
        <motion.div
            key="preloader"
            // Semi-transparent overlay so SSR content is visible underneath for crawlers
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm font-sora pointer-events-none"
            // The exit animation creates a premium "dissolve and lift" effect
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* --- BRAND NAME REVEAL --- */}
            <div className="overflow-hidden pb-4">
                <Image
                    src="/assets/webonic2.png"
                    alt="Webronic Industries"
                    width={200}
                    height={60}
                    priority
                    className="w-28 lg:w-32"
                />
            </div>

            {/* --- SLEEK LOADING BAR --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-48 md:w-64 h-[2px] bg-slate-100 rounded-full overflow-hidden relative mt-4"
            >
                {/* The sweeping motion inside the bar */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#2776ea] to-transparent rounded-full"
                />
            </motion.div>

        </motion.div>
    );
}