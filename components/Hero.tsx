"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MarqueeStrip from "./Marquee";

const marqueeItems = [
  "IIT ROPAR",
  "MECHANICAL ENGINEER",
  "PRODUCT MANAGER",
  "INTRADAY TRADER",
  "FRONTEND DEVELOPER",
  "JEE 99.76 PERCENTILE",
  "AIR #3717",
  "CAD & FEA",
  "THERMODYNAMICS",
  "FLUID MECHANICS",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-void">

      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top marquee */}
      <div className="relative z-10 border-b border-gold/10 mt-[72px]">
        <MarqueeStrip
          items={marqueeItems}
          speed={30}
          direction="left"
          className="py-2.5 font-display text-[11px] tracking-[0.25em] text-gold/70"
        />
      </div>

      {/* Main grid: content left, photo right */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT: logo + name + CTAs */}
        <div className="flex flex-col justify-between px-6 md:px-12 lg:px-16 py-10 lg:border-r border-gold/10">

          {/* Logo with ROAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-fit"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-28 h-28 rounded-full roar-ring" />
              <div className="absolute w-28 h-28 rounded-full roar-ring roar-ring-2" />
              <div className="absolute w-28 h-28 rounded-full roar-ring roar-ring-3" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-28 h-28 rounded-full overflow-hidden"
              style={{ boxShadow: "0 0 50px rgba(200,153,31,0.35), 0 0 120px rgba(200,153,31,0.12)" }}
            >
              <Image src="/assets/logo.png" alt="Kanav Miglani" fill className="object-cover" sizes="112px" priority />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="my-auto py-8"
          >
            <h1
              className="font-display font-bold tracking-[-0.04em] leading-[0.82] text-hero-gradient"
              style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
            >
              KANAV
            </h1>
            <h1
              className="font-display font-bold tracking-[-0.04em] leading-[0.82] text-gold-gradient"
              style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
            >
              MIGLANI
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-snow/45 text-base mt-5 max-w-xs leading-relaxed font-light"
            >
              I don&apos;t follow paths.{" "}
              <span className="text-gold/80 font-medium">I build them.</span>
            </motion.p>
          </motion.div>

          {/* Bottom: JEE badge + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col gap-4 pt-8 border-t border-gold/10"
          >
            <div
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-gold w-fit"
              style={{ boxShadow: "0 0 20px rgba(200,153,31,0.12)" }}
            >
              <div className="relative w-6 h-6 shrink-0">
                <Image src="/assets/jee.png" alt="JEE" fill className="object-contain" sizes="24px" />
              </div>
              <div className="w-px h-4 bg-gold/20" />
              <span className="font-display font-bold text-gold-gradient text-sm">99.76</span>
              <span className="text-gold/50 text-xs">percentile</span>
              <div className="w-px h-4 bg-gold/20" />
              <span className="text-gold/60 text-xs font-medium tracking-wide">AIR #3717</span>
            </div>
            <div className="flex gap-3">
              <a
                href="#work"
                className="px-6 py-3 rounded-full font-display font-semibold text-sm tracking-wide text-void transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #f0c040, #c8991f)" }}
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full gold-border text-gold/80 hover:text-gold hover:bg-gold/8 font-display font-semibold text-sm tracking-wide transition-all duration-200"
              >
                Contact →
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: photo — proper container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0">
            <Image
              src="/assets/photo-1.jpg"
              alt="Kanav Miglani"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
            {/* Left edge fade into content */}
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          </div>

          {/* Name overlay at bottom of photo */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="text-snow/30 text-[10px] tracking-[0.3em] uppercase font-display mb-1">
              Mechanical Engineer · IIT Ropar
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-gold/10">
        <MarqueeStrip
          items={marqueeItems}
          speed={40}
          direction="right"
          className="py-2.5 font-display text-[11px] tracking-[0.25em] text-gold/60"
        />
      </div>
    </section>
  );
}
