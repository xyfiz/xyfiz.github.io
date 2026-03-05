"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    icon: "⚙️",
    title: "Mechanical Eng.",
    subtitle: "Precision by design",
    description:
      "BTech Mechanical Engineering at IIT Ropar. Thermodynamics, fluid mechanics, manufacturing — the same engineering rigor I apply to everything I build.",
    tools: ["CAD", "Thermodynamics", "Fluid Mechanics", "Manufacturing", "FEA"],
    accent: "#38bdf8",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Product Manager",
    subtitle: "Vision to execution",
    description:
      "I own the product. From defining problems to shipping — I close the loop. Product is strategy made real.",
    tools: ["PRDs", "Roadmapping", "User Research", "Metrics", "Agile"],
    accent: "#c8991f",
  },
  {
    num: "03",
    icon: "📈",
    title: "Intraday Trader",
    subtitle: "Markets on my terms",
    description:
      "Risk-managed, thesis-driven trading across equities and derivatives. I read markets like a system — with edge and discipline.",
    tools: ["Technical Analysis", "Options", "Derivatives", "Risk Mgmt"],
    accent: "#34d399",
  },
  {
    num: "04",
    icon: "💻",
    title: "Frontend Dev",
    subtitle: "Interfaces that convert",
    description:
      "Building fast, precise UIs. I care about the last 1% — the micro-interaction, the animation, the feel.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    accent: "#c084fc",
  },
];

export default function WhatIDo() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 border-b border-gold/10">
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
            02 — What I Do
          </span>
          <div className="flex-1 gold-divider" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold tracking-tight text-snow mb-16"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
        >
          Four domains.{" "}
          <span className="text-gold-gradient">One king.</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(200,153,31,0.08)", border: "1px solid rgba(200,153,31,0.12)" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-void p-8 relative overflow-hidden group cursor-default"
            >
              {/* Top accent bar slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: card.accent }}
              />
              {/* Subtle hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${card.accent}07, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col min-h-[280px]">
                <div className="flex justify-between items-start mb-auto">
                  <span className="text-gold/20 font-display font-bold text-xs tracking-widest">{card.num}</span>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <div className="mt-8 mb-6">
                  <h3 className="font-display font-bold text-xl text-snow">{card.title}</h3>
                  <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: card.accent }}>
                    {card.subtitle}
                  </p>
                  <p className="text-snow/35 text-sm leading-relaxed mt-3">{card.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gold/8">
                  {card.tools.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-gold/10 text-snow/25 tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
