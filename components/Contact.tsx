"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kanav-miglani-6b0666374/" },
  { label: "Twitter / X", href: "https://x.com/knvmiglani" },
  { label: "LeetCode", href: "https://leetcode.com/u/kanavmiglani/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 border-b border-gold/10 relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-gold/30 font-display text-xs tracking-[0.3em] uppercase">04 — Contact</span>
          <div className="flex-1 gold-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: logo + headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo — large here too */}
            <div className="relative w-20 h-20 mb-8">
              <div className="absolute inset-0 rounded-full roar-ring" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-0 rounded-full roar-ring roar-ring-2" style={{ animationDuration: "3s" }} />
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-20 h-20 rounded-full overflow-hidden glow-gold-sm"
              >
                <Image src="/assets/logo.png" alt="Kanav Miglani" fill className="object-cover" sizes="80px" />
              </motion.div>
            </div>

            <h2
              className="font-display font-bold tracking-tight text-snow leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Let&apos;s
              <br />
              <span className="text-gold-gradient">connect.</span>
            </h2>
          </motion.div>

          {/* Right: email + socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-snow/35 text-base leading-relaxed max-w-sm">
              I build teams, back ideas, and connect with people worth knowing.
            </p>

            {/* Email row */}
            <motion.a
              href="mailto:kanavmiglani@gmail.com"
              whileHover={{ x: 4 }}
              className="group flex items-center justify-between w-full p-5 rounded-xl gold-border hover:bg-gold/5 transition-all duration-300"
              style={{ background: "rgba(200,153,31,0.03)" }}
            >
              <div>
                <div className="text-gold/30 text-xs tracking-widest uppercase mb-1">Email</div>
                <div className="text-snow font-display font-semibold text-base">kanavmiglani@gmail.com</div>
              </div>
              <span className="text-gold/30 group-hover:text-gold transition-colors duration-200 text-xl">→</span>
            </motion.a>

            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="px-5 py-2.5 rounded-full gold-border text-gold/40 hover:text-gold hover:bg-gold/8 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
