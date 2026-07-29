import {
  ClipboardList,
  Database,
  Sparkles,
  MessageSquare,
} from "lucide-react";

const skillGroups = [
  {
    category: "Business Analysis",
    icon: <ClipboardList className="w-5 h-5 text-indigo-400" aria-hidden="true" />,
    items: [
      "Requirements Gathering",
      "Stakeholder Analysis",
      "Gap Analysis",
      "Business Process Analysis",
      "User Stories",
      "Acceptance Criteria",
      "BRD",
      "FRD",
      "Agile",
      "Scrum",
      "SDLC",
      "Process Mapping",
      "Business Process Modeling",
    ],
  },
  {
    category: "Data Analysis",
    icon: <Database className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    items: [
      "SQL",
      "Excel",
      "Tableau",
      "Power BI",
      "Dashboard Development",
      "Data Visualization",
    ],
  },
  {
    category: "AI Productivity",
    icon: <Sparkles className="w-5 h-5 text-amber-400" aria-hidden="true" />,
    items: [
      "ChatGPT",
      "Microsoft Copilot",
      "Claude",
      "Gemini",
      "Perplexity",
    ],
  },
  {
    category: "Soft Skills",
    icon: <MessageSquare className="w-5 h-5 text-pink-400" aria-hidden="true" />,
    items: [
      "Stakeholder Communication",
      "Presentation",
      "Critical Thinking",
      "Analytical Thinking",
      "Problem Solving",
      "Active Listening",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Core Capabilities
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            A practical toolkit for requirements analysis, stakeholder
            collaboration, and data-driven decision support.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent Glow Line */}
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />

              {/* Header */}
              <div className="flex items-center mb-7">
                <div className="p-3 bg-slate-800 rounded-xl mr-4 shadow-inner">
                  {group.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-accent-300 bg-accent-400/10 border border-accent-400/20 hover:bg-accent-400/20 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
