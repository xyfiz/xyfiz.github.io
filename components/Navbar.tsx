"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#wins", label: "Wins" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 60));

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-6 md:px-12 lg:px-20 py-4 ${
        scrolled ? "bg-[#060407]/90 backdrop-blur-2xl border-b border-gold/10" : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative w-10 h-10 rounded-full overflow-hidden glow-gold-sm"
          >
            <Image src="/assets/logo.png" alt="Kanav Miglani" fill className="object-cover" sizes="40px" />
          </motion.div>
          <span className="font-display font-bold text-gold text-sm tracking-[0.12em] hidden sm:block">
            KANAV MIGLANI
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-snow/40 hover:text-gold transition-colors duration-200 text-xs font-medium tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-border text-gold/80 hover:text-gold hover:bg-gold/8 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
        >
          Let&apos;s talk
        </Link>
      </div>
    </motion.nav>
  );
}
