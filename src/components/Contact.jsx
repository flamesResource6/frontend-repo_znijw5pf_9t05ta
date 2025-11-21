import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/demo-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if(res.ok){ setStatus("sent"); } else { setStatus(json.detail || "error"); }
    }catch(err){ setStatus("error"); }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-slate-900/60 p-8 ring-1 ring-white/10">
        <h3 className="text-2xl font-bold text-white">Contact / DM</h3>
        <p className="text-blue-200/80 mt-1">Form bharein, hum 15 minutes me reply karenge.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Name" className="rounded-xl bg-slate-800/60 p-3 text-white ring-1 ring-white/10" required />
          <input name="email" type="email" placeholder="Email" className="rounded-xl bg-slate-800/60 p-3 text-white ring-1 ring-white/10" required />
          <input name="phone" placeholder="Phone / WhatsApp" className="rounded-xl bg-slate-800/60 p-3 text-white ring-1 ring-white/10 sm:col-span-2" />
          <textarea name="message" placeholder="Your requirements" className="rounded-xl bg-slate-800/60 p-3 text-white ring-1 ring-white/10 sm:col-span-2" rows={4} />
          <button className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow hover:shadow-lg transition sm:col-span-2">Send</button>
          {status === 'sending' && <p className="text-blue-300">Sending...</p>}
          {status === 'sent' && <p className="text-green-400">Thanks! We'll reach out shortly.</p>}
          {status && status !== 'sending' && status !== 'sent' && <p className="text-red-400">{String(status)}</p>}
        </form>
      </div>
    </section>
  );
}
