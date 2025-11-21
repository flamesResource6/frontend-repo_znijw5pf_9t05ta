import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-white">Digital Store</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button onClick={scrollToContact} className="rounded-xl bg-white px-4 py-2 text-slate-900 font-semibold">Get Started</button>
        </div>
      </header>

      <main>
        <Hero onCta={scrollToContact} />
        <Features />
        <CTA />
        <Contact ref={contactRef} />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-blue-300/70">
        © {new Date().getFullYear()} Your Brand — SEO optimized, fast and secure
      </footer>
    </div>
  )
}

export default App
