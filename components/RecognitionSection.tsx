export default function RecognitionSection() {
  return (
    <section id="recognition" className="py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            ⭐ Featured Recognition
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Recognized by SAIT Academic Chair
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
          Official success story shared by the Academic Chair of Software
          Development at SAIT.
        </p>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
          {/* Left Accent Glow */}
          <div className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

          {/* Pull Quote */}
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-8">
            “From an international student dream to measurable impact across
            Canada’s tech ecosystem.”
          </blockquote>

          {/* Story */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Originally from Hoshiarpur, India, Harsimarpreet Singh Sahota
              pursued his Software Development Diploma at SAIT with the goal of
              building real impact in Canada’s tech ecosystem. That journey
              quickly translated into measurable results across Ontario and
              Alberta.
            </p>

            <p>
              During his academic program, he completed
              <span className="text-white font-semibold">
                {" "}
                three competitive software internships across Ontario and
                Alberta
              </span>
              , contributing to production-grade platforms used in real business
              environments.
            </p>

            <p>
              Beyond internships, he led the Google Developer Student Club
              (GDSC) and built a scalable full-stack platform for an
              <span className="text-white font-semibold">
                {" "}
                800+ member tech community
              </span>
              , mentoring students and organizing MERN and AI workshops.
            </p>

            <p>
              Through his technical writing series,
              <span className="italic"> Harsimar’s ByteWave</span>, he shares
              practical insights on full-stack development, DevOps workflows,
              and AI integration — translating real engineering challenges into
              lessons others can apply.
            </p>

            <p>
              Outside the classroom, he actively contributed to Calgary’s
              innovation ecosystem through major tech conferences and startup
              events, gaining exposure to founders, investors, and emerging
              technologies shaping Alberta’s future.
            </p>

            <p>
              Behind this progress lies
              <span className="text-white font-semibold">
                {" "}
                startup building, disciplined routines, and relentless growth.
              </span>
            </p>
          </div>

          {/* Attribution */}
          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Ali Moussa</p>
              <p className="text-slate-400 text-sm">
                Academic Chair, Software Development Diploma — SAIT
              </p>
            </div>

            <a
              href="https://www.linkedin.com/posts/ali-moussa4_software-development-diploma-activity-7429578618948972544-VQSd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADW5_FAB92V-CBYUpWnMC6W0hQZipN2nPW8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-accent-400 text-slate-900 font-semibold hover:bg-accent-500 transition"
            >
              View Original Post →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
