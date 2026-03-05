import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#wins", label: "Wins" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden" style={{ boxShadow: "0 0 12px rgba(200,153,31,0.2)" }}>
            <Image src="/assets/logo.png" alt="Kanav Miglani" fill className="object-cover" sizes="32px" />
          </div>
          <span className="font-display font-bold text-gold/50 text-xs tracking-[0.15em]">KANAV MIGLANI</span>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-snow/20 hover:text-gold/60 transition-colors text-xs tracking-widest uppercase">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="text-snow/20 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Kanav Miglani
        </div>
      </div>
    </footer>
  );
}
