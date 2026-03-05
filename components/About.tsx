"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "99.76%", label: "JEE Percentile", sub: "Top 0.24% nationally" },
  { value: "4×", label: "Disciplines", sub: "Mech. Eng. · PM · Trading · Dev" },
  { value: "IIT", label: "Ropar", sub: "BTech Mechanical — Ongoing" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-gold/10">

      {/* Horse photo — full, uncropped, cinematic banner */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full aspect-square sm:aspect-[2/1] overflow-hidden"
      >
        <Image
          src="/assets/photo-2.jpg"
          alt="Kanav Miglani"
          fill
          className="object-contain bg-[#0a080d]"
          sizes="100vw"
        />
        {/* Bottom gradient blend */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent" />
        {/* Subtle gold side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/40 via-transparent to-void/40 pointer-events-none" />
      </motion.div>

      {/* Text content */}
      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-gold/30 font-display text-xs tracking-[0.3em] uppercase">
              01 — About
            </span>
            <div className="flex-1 gold-divider" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-display font-bold tracking-tight text-snow leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Built to build.{" "}
                <span className="text-gold-gradient">Wired to win.</span>
              </h2>
              <div className="space-y-4 text-snow/40 text-base leading-relaxed">
                <p>
                  I&apos;m Kanav — a Mechanical Engineering student at IIT Ropar who decided one
                  discipline was never enough. I ship products, read charts, and write code. Not
                  in sequence — simultaneously.
                </p>
                <p>
                  From cracking JEE in the top 0.24% to managing product cycles and executing
                  intraday trades, I operate at the intersection of precision and speed. I don&apos;t
                  look for opportunities — I create them.
                </p>
              </div>
            </motion.div>

            {/* Right: stats */}
            <div className="space-y-0 divide-y divide-gold/8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <div className="text-snow/30 text-xs tracking-widest uppercase font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-snow/18 text-xs">{stat.sub}</div>
                  </div>
                  <div
                    className="font-display font-bold text-snow group-hover:text-gold-gradient transition-all duration-300"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
