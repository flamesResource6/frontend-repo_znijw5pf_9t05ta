import { ShoppingCart, Shield, Rocket, Mail } from "lucide-react";

export default function Hero({ onCta }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300 ring-1 ring-inset ring-blue-400/30">
              Fast, secure & 100% automated
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Apni professional digital product website banwao
            </h1>
            <p className="mt-4 text-blue-200/90">
              PDF, Courses, Software, Templates — sab ke liye instant delivery, secure payments aur auto email invoice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={onCta} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 shadow hover:shadow-lg transition">
                <Rocket className="h-4 w-4" /> Get Started
              </button>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-slate-800/60 px-4 py-2 text-white ring-1 ring-white/10 hover:bg-slate-700/60 transition">
                <Shield className="h-4 w-4" /> Why us
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-blue-200/80 text-sm">
              <div className="inline-flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> UPI, Cards, Wallets</div>
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Secure</div>
              <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Auto Email + Invoice</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-slate-900/60 p-4 ring-1 ring-white/10 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1400&auto=format&fit=crop" className="rounded-xl" alt="Store preview" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl bg-slate-800/80 px-4 py-3 text-sm text-white ring-1 ring-white/10">
              One-time setup — lifetime earning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
