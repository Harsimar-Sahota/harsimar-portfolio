export default function RecognitionSection() {
  return (
    <section id="recognition" className="py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Featured Recognition
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Featured as a SAIT Student Success Story
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-4">
          Based on the official LinkedIn Student Success Story published by SAIT
          Academic Chair Ali Moussa, recognizing academic achievement, industry
          experience, leadership, and professional growth.
        </p>

        {/* Transparency note — editorial footnote */}
        <p className="text-[12px] text-slate-400/75 text-center max-w-xl mx-auto mb-14 tracking-wide">
          This page presents a portfolio summary based on the official LinkedIn
          Student Success Story published by SAIT Academic Chair Ali Moussa. You
          can view the original post below.
        </p>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
          {/* Left Accent Glow */}
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            aria-hidden="true"
          />

          {/* Pull Quote */}
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-8">
            “From an international student dream to measurable impact across
            Canada’s tech ecosystem.”
          </blockquote>

          {/* Story — portfolio summary (not a verbatim LinkedIn quotation) */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Originally from Hoshiarpur, India, Harsimarpreet Singh Sahota
              pursued his diploma at SAIT with a focus on building real impact
              in Canada. That journey quickly translated into measurable results
              across Ontario and Alberta — grounded in analysis, collaboration,
              and clear communication.
            </p>

            <p>
              Through competitive industry placements and applied projects, he
              strengthened his analytical thinking, cross-functional
              collaboration, and ability to solve real business problems in
              production environments.
            </p>

            <p>
              Beyond coursework, he led campus community initiatives and
              supported an
              <span className="text-white font-semibold">
                {" "}
                800+ member tech community
              </span>
              , mentoring peers and organizing workshops that strengthened
              collaboration and knowledge sharing.
            </p>

            <p>
              Through his writing series,
              <span className="italic"> Harsimar’s ByteWave</span>, he shares
              practical insights on problem-solving, data-informed thinking, and
              professional growth — translating real challenges into lessons
              others can apply.
            </p>

            <p>
              Outside the classroom, he actively contributed to Calgary’s
              innovation ecosystem through major conferences and startup events,
              gaining exposure to founders, investors, and emerging practices
              shaping Canada’s digital economy.
            </p>

            <p>
              Behind this progress lies
              <span className="text-white font-semibold">
                {" "}
                disciplined routines, continuous learning, and relentless
                growth.
              </span>
            </p>
          </div>

          {/* Optional: LinkedIn preview card slot (intentionally not rendered) */}
          {/* <LinkedInPreviewCard /> */}

          {/* Attribution */}
          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Ali Moussa</p>
              <p className="text-slate-400 text-sm">
                Academic Chair, Software Development Diploma — SAIT
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="text-[11px] font-medium text-accent-400/80 tracking-wide">
                ✓ Official LinkedIn Student Success Story
              </span>
              <a
                href="https://www.linkedin.com/posts/ali-moussa4_software-development-diploma-activity-7429578618948972544-VQSd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADW5_FAB92V-CBYUpWnMC6W0hQZipN2nPW8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View original LinkedIn Student Success Story (opens in a new tab)"
                className="inline-block px-5 py-2 rounded-full bg-accent-400 text-slate-900 font-semibold hover:bg-accent-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
              >
                View Original LinkedIn Post →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
