"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/assets/photo-1.jpg", alt: "Kanav Miglani", className: "md:col-span-2" },
  { src: "/assets/photo-2.jpg", alt: "Kanav Miglani", className: "" },
];

export default function Photos() {
  return (
    <section id="photos" className="py-28 px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-white/25 font-display text-xs tracking-[0.3em] uppercase">
            04 — Photos
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold tracking-tight text-snow mb-12"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
        >
          The human{" "}
          <span className="text-white/25">behind the work.</span>
        </motion.h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5 group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
