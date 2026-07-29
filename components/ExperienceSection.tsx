import { Briefcase } from "lucide-react";
import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    company: "Headway Software Solutions",
    role: "Business Analyst Intern",
    type: "Internship",
    period: "Jan 2026 – Jun 2026",
    location: "Calgary, Canada",
    achievements: [
      "Elicited, analyzed, and documented business requirements from 8+ cross-functional stakeholders and SMEs, facilitating workshops and translating needs into 25+ user stories, acceptance criteria, BRDs, and FRDs that improved sprint delivery efficiency by 20%.",
      "Leveraged SQL, Excel, and Tableau to analyze operational data, develop interactive dashboards, and reduce weekly manual reporting efforts for leadership teams by 10 hours.",
      "Conducted business process analysis through stakeholder interviews, BPMN process models, swimlane diagrams, and current-state/future-state mapping for 10+ workflows, identifying opportunities that reduced manual process dependencies by 25%.",
      "Reduced post-development defects and rework by 30% by coordinating requirement validation, UAT activities, project risk tracking, and stakeholder communications with product owners, developers, and QA teams.",
    ],
    tags: [
      "Requirements Gathering",
      "User Stories",
      "BRD / FRD",
      "SQL",
      "Tableau",
      "Excel",
      "BPMN",
      "UAT",
      "Agile / Scrum",
      "Stakeholder Management",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Professional Experience
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Requirements analysis, stakeholder collaboration, and
            data-driven process improvement in Agile delivery environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-14">
          {/* Vertical Line */}
          <div
            className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-slate-800"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20">
              {/* Timeline Dot */}
              <div className="hidden sm:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-slate-950 border border-accent-400 items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10">
                <Briefcase className="w-5 h-5 text-accent-400" aria-hidden="true" />
              </div>

              {/* Card */}
              <article className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>

                    <p className="text-lg text-slate-300 font-medium mt-1">
                      {exp.role}
                    </p>
                    {exp.type && (
                      <p className="text-sm text-accent-400 mt-1">{exp.type}</p>
                    )}
                  </div>

                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-sm font-mono text-slate-400">
                      {exp.period}
                    </p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-4 mb-7">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-300 leading-relaxed"
                    >
                      <span
                        className="mr-3 text-accent-400 mt-1.5 text-xs"
                        aria-hidden="true"
                      >
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/60">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-accent-300 px-3 py-1 rounded-full bg-accent-400/10 border border-accent-400/20 hover:bg-accent-400/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
