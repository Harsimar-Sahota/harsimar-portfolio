import { Award, Building2 } from "lucide-react";
import type { Certification } from "@/types";

const certifications: Certification[] = [
  {
    name: "PwC Technology Consulting Simulation",
    issuer: "Forage",
    period: "June 2026",
    description:
      "Advisory-style simulation focused on consulting workflows, stakeholder alignment, and technology-enabled business solutions.",
  },
  {
    name: "KPMG Advisory & Data Analysis Simulation",
    issuer: "Forage",
    period: "May 2026",
    description:
      "Hands-on advisory and data analysis simulation strengthening analytical thinking and structured recommendation delivery.",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Professional Development
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Advisory and data analysis simulations building consulting and
            analytical readiness for Business Analyst roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="relative bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-3 bg-slate-800 rounded-xl">
                  <Award className="w-6 h-6 text-accent-400" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded whitespace-nowrap border border-slate-800">
                  {cert.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {cert.name}
              </h3>

              <p className="flex items-center text-accent-400 font-semibold text-sm mb-4">
                <Building2 className="w-4 h-4 mr-2" aria-hidden="true" />
                {cert.issuer}
              </p>

              {cert.description && (
                <p className="text-slate-400 leading-relaxed text-sm">
                  {cert.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
