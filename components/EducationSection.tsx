import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            🎓 Academic Background
          </span>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          
          {/* ===== Education Column ===== */}
          <div>
            <div className="flex items-center mb-10">
              <GraduationCap className="w-7 h-7 text-accent-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-9 shadow-xl overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

              <h3 className="text-xl font-bold text-white mb-2">
                Southern Alberta Institute of Technology (SAIT)
              </h3>

              <p className="text-accent-400 font-semibold mb-1">
                Diploma in Software Development
              </p>

              <p className="text-sm text-slate-500 font-mono mb-5">
                Sep 2024 – Sep 2026
              </p>

              <p className="text-slate-400 leading-relaxed">
                Built a strong foundation in object-oriented programming,
                database design, and full-stack web development. Consistently
                recognized as a top-performing student, with multiple LinkedIn
                recommendations from professors.
              </p>
            </div>
          </div>

          {/* ===== Certifications Column ===== */}
          <div>
            <div className="flex items-center mb-10">
              <Award className="w-7 h-7 text-accent-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Certification</h2>
            </div>

            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-7 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">

                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-accent-400/70" />

                <div className="flex justify-between items-start gap-6">
                  
                  {/* LEFT CONTENT */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      Software Engineering Virtual Experience – Startup
                    </h4>

                    <p className="text-sm text-slate-400">
                      Y Combinator (via Forage)
                    </p>

                    <ul className="mt-3 text-sm text-slate-400 space-y-1">
                      <li>• Implemented frontend updates based on user feedback</li>
                      <li>• Built backend features in a simulated startup environment</li>
                      <li>• Analyzed product features using basic analytics</li>
                    </ul>

                    {/* 🔥 VIEW CERTIFICATE BUTTON */}
                    <a
                      href="/yc forage certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-xs font-semibold text-accent-400 border border-accent-400/30 px-3 py-1 rounded hover:bg-accent-400/10 transition"
                    >
                      View Certificate ↗
                    </a>
                  </div>

                  {/* RIGHT SIDE YEAR */}
                  <span className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded whitespace-nowrap">
                    2025
                  </span>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}