import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-accent-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">
                Southern Alberta Institute of Technology (SAIT)
              </h3>
              <p className="text-accent-400 font-medium mb-1">
                Diploma in Software Development
              </p>
              <p className="text-sm text-slate-500 font-mono mb-4">
                Aug 2024 – Apr 2026
              </p>
              <p className="text-slate-400 leading-relaxed">
                Built a strong foundation in object-oriented programming,
                database design, and full-stack web development. Consistently
                recognized as a top-performing student, with multiple LinkedIn
                recommendations from professors.
              </p>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-accent-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-slate-600 transition-all">
                <div>
                  <h4 className="text-white font-semibold group-hover:text-accent-400 transition-colors">
                    Train to Work at a Startup
                  </h4>
                  <p className="text-sm text-slate-400">Y Combinator</p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">
                  2025
                </span>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-slate-600 transition-all">
                <div>
                  <h4 className="text-white font-semibold group-hover:text-accent-400 transition-colors">
                    Technology Foundations
                  </h4>
                  <p className="text-sm text-slate-400">Accenture</p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">
                  2025
                </span>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-slate-600 transition-all">
                <div>
                  <h4 className="text-white font-semibold group-hover:text-accent-400 transition-colors">
                    Software Engineering Experience
                  </h4>
                  <p className="text-sm text-slate-400">Blackbird</p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">
                  2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
