import { Clock, MailCheck, Smartphone, IndianRupee, ShieldCheck, Upload, Stars } from "lucide-react";

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl bg-slate-900/60 p-6 ring-1 ring-white/10">
    <div className="mb-3 inline-flex rounded-lg bg-blue-500/10 p-2 text-blue-300 ring-1 ring-inset ring-blue-400/30"><Icon className="h-5 w-5" /></div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-blue-200/80 text-sm mt-1">{desc}</p>
  </div>
);

export default function Features(){
  const items = [
    { icon: Upload, title: "Unlimited Products", desc: "Easy dashboard se PDFs, courses, software, templates upload karein." },
    { icon: ShieldCheck, title: "Secure Payments", desc: "UPI / Cards / Wallets support ke saath fraud protection." },
    { icon: MailCheck, title: "Auto Email + Invoice", desc: "Har order pe instant email aur branded invoice." },
    { icon: Clock, title: "Instant Delivery", desc: "Payment ke baad turant download link milta hai." },
    { icon: Smartphone, title: "Mobile Friendly", desc: "Beautiful, fast aur responsive design." },
    { icon: IndianRupee, title: "One-time Setup", desc: "Bas set karen aur lifetime earning start karein." },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Features You Get</h2>
        <p className="text-blue-200/80 mt-2">Creators, Coaches, Designers, Developers, Students, Businesses — sab ke liye perfect.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f,i)=> <Feature key={i} {...f} />)}
      </div>
    </section>
  );
}
