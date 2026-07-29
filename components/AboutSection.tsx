export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900 border-y border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Professional Profile
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About Me
        </h2>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
          {/* Accent Glow Line */}
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
            aria-hidden="true"
          />

          {/* Primary Summary */}
          <p className="text-xl text-slate-300 leading-relaxed font-light text-left">
            Detail-oriented Business Analyst with practical experience in
            requirements gathering, UAT coordination, and data-driven process
            improvement within Agile environments. Demonstrated ability to work
            with 8+ cross-functional stakeholders, reduce manual reporting
            efforts by 10 hours weekly, and deliver structured user stories and
            acceptance criteria.
          </p>

          {/* Divider */}
          <div className="my-8 flex justify-center" aria-hidden="true">
            <div className="h-1 w-24 bg-accent-400 rounded-full opacity-70" />
          </div>

          {/* Secondary Paragraph */}
          <p className="text-lg text-slate-400 leading-relaxed text-left">
            I combine proficiency in SQL, Tableau, and Excel with strong
            stakeholder communication to bridge business and technology teams —
            translating needs into BRDs, FRDs, process maps, and actionable
            insights. Actively building expertise through advisory simulations
            with PwC and KPMG, and seeking entry-level Business Analyst,
            Business Intelligence, and data analytics opportunities across
            Canada.
          </p>
        </div>
      </div>
    </section>
  );
}
