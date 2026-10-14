import { GraduationCap, Award, Clock, CheckCircle2 } from "lucide-react";

interface CertificationItem {
  name: string;
  issuer: string;
  status: "In Progress" | "Certificate";
  period?: string;
  detail: string;
}

const certifications: CertificationItem[] = [
  {
    name: "Entry Certificate in Business Analysis (ECBA™)",
    issuer: "IIBA (International Institute of Business Analysis)",
    status: "In Progress",
    detail:
      "Foundations of business analysis practice based on the BABOK® Guide — covering requirements analysis, elicitation, stakeholder management, and solution assessment. Actively in progress.",
  },
  {
    name: "PwC Technology Consulting Simulation",
    issuer: "PwC",
    status: "Certificate",
    detail:
      "Created client discovery interview guides, prioritized user stories, and built an MVP roadmap for legacy compliance system modernization.",
  },
  {
    name: "KPMG Advisory & Data Analysis Simulation",
    issuer: "KPMG",
    status: "Certificate",
    detail:
      "Evaluated supplier performance data using AI to deliver strategic growth recommendations to leadership.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Education &amp; Credentials
          </span>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ===== Education Column ===== */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap
                className="w-7 h-7 text-accent-400 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />

              <h3 className="text-xl font-bold text-white mb-2">
                Southern Alberta Institute of Technology (SAIT)
              </h3>

              <p className="text-accent-400 font-semibold mb-1">
                Diploma in Software Development
              </p>

              <p className="text-sm text-slate-500 font-mono mb-5">
                Calgary, Alberta, Canada
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Built strong analytical and problem-solving foundations through intensive
                coursework in systems analysis, database design, software engineering methodologies,
                and structured documentation. Applied this technical background to business
                process modeling, requirements elicitation, data analysis, and bridging
                stakeholder needs with technical implementations.
              </p>
            </div>
          </div>

          {/* ===== Certifications Column ===== */}
          <div>
            <div className="flex items-center mb-8">
              <Award
                className="w-7 h-7 text-accent-400 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="space-y-5">
              {certifications.map((cert) => {
                const isInProgress = cert.status === "In Progress";
                return (
                  <article
                    key={cert.name}
                    className={`relative bg-gradient-to-br from-slate-900 to-slate-950 border rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                      isInProgress
                        ? "border-amber-500/40 hover:border-amber-400/60"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-1 ${
                        isInProgress ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]" : "bg-accent-400/70"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-white font-semibold text-base leading-snug">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                      </div>

                      <div className="shrink-0">
                        {isInProgress ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                            <Clock className="w-3 h-3 text-amber-400" aria-hidden="true" />
                            In Progress
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                            Certificate
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300/90 leading-relaxed mt-2.5">
                      {cert.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
