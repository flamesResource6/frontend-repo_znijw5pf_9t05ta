export default function CTA(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 p-[1px]">
        <div className="rounded-2xl bg-slate-900/80 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Apni online store aaj hi launch karein</h3>
            <p className="text-blue-200/90 mt-1">Starting at just ₹XXXX — DM karein aur free consultation lein.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow hover:shadow-lg transition">DM Now</a>
        </div>
      </div>
    </section>
  );
}
