"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MarqueeStrip from "./Marquee";

const marqueeItems = [
  "99.76 PERCENTILE",
  "AIR #3717",
  "IIT ROPAR",
  "TOP 0.24%",
  "JEE MAINS",
  "1.1M+ CANDIDATES",
  "NATIONAL RANK",
  "CAD & FEA",
  "THERMODYNAMICS",
  "FLUID MECHANICS",
];

export default function Wins() {
  return (
    <section id="wins" className="border-b border-gold/10 overflow-hidden">
      {/* Gold marquee strip */}
      <div style={{ borderTop: "1px solid rgba(200,153,31,0.1)", borderBottom: "1px solid rgba(200,153,31,0.1)", background: "rgba(200,153,31,0.02)" }}>
        <MarqueeStrip
          items={marqueeItems}
          speed={18}
          direction="left"
          className="py-3.5 font-display text-xs tracking-[0.3em] text-gold/70"
        />
      </div>

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
            <span className="text-gold/30 font-display text-xs tracking-[0.3em] uppercase">03 — Wins</span>
            <div className="flex-1 gold-divider" />
          </motion.div>

          {/* Main JEE showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Giant number */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* JEE logo above number */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image src="/assets/jee.png" alt="JEE" fill className="object-contain" sizes="40px" />
                </div>
                <span className="text-gold/50 font-display text-xs tracking-[0.25em] uppercase font-semibold">JEE Mains</span>
              </div>

              <div
                className="font-display font-bold leading-none tracking-tighter text-gold-gradient"
                style={{ fontSize: "clamp(6rem, 18vw, 15rem)" }}
              >
                99.76
              </div>
              <div className="text-gold/45 font-display text-sm tracking-[0.3em] uppercase mt-3 mb-6">Percentile</div>
              <div className="flex flex-wrap gap-2">
                {["AIR #3717", "Top 0.24%", "1.1M+ Candidates"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-gold/70 gold-border"
                    style={{ background: "rgba(200,153,31,0.06)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-bold text-snow leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                Receipts, not
                <br />
                <span className="text-gold-gradient">résumé fluff.</span>
              </h2>
              <p className="text-snow/35 text-base leading-relaxed">
                Among the highest scorers nationally in one of the world&apos;s most competitive
                entrance exams. This isn&apos;t a résumé line — it&apos;s proof of what relentless
                focus and structured preparation produces. 99.76th percentile out of 1.1 million candidates.
              </p>
            </motion.div>
          </div>

          {/* Supporting wins */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: "rgba(200,153,31,0.08)", border: "1px solid rgba(200,153,31,0.1)" }}
          >
            {[
              {
                icon: "🎓",
                type: "Education",
                title: "BTech at IIT Ropar",
                meta: "Mechanical Engineering · Ongoing",
                desc: "One of India's premier engineering institutions. Rigorous curriculum spanning thermodynamics, fluid mechanics, manufacturing, and systems.",
                accent: "#c8991f",
              },
              {
                icon: "🚀",
                type: "Project",
                title: "This Portfolio",
                meta: "Next.js · TypeScript · Tailwind · Framer Motion",
                desc: "Designed and built from scratch. No templates. Every pixel, every animation, every word — intentional.",
                accent: "#c084fc",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-void p-8 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: item.accent }}
                />
                <div className="flex items-start justify-between mb-5">
                  <span className="text-gold/25 text-xs tracking-widest uppercase font-medium">{item.type}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-snow text-lg mb-1">{item.title}</h3>
                <p className="text-snow/25 text-xs mb-4 tracking-wide">{item.meta}</p>
                <p className="text-snow/35 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
