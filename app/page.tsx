import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Wins from "@/components/Wins";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Wins />
      <Contact />
      <Footer />
    </main>
  );
}
