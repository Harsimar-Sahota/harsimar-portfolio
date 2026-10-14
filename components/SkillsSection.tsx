import { ClipboardCheck, Database, Sparkles } from "lucide-react";

const skillGroups = [
  {
    category: "Business Analysis & Agile",
    icon: <ClipboardCheck className="w-5 h-5 text-accent-400" aria-hidden="true" />,
    description:
      "Core requirements engineering, stakeholder alignment, process modeling, and Agile delivery.",
    items: [
      "Requirements Elicitation",
      "Stakeholder Analysis",
      "User Stories & Acceptance Criteria",
      "BRD/FRD Documentation",
      "Process Mapping (BPMN 2.0 / Swimlanes)",
      "Gap Analysis",
      "Current-State/Future-State Modeling",
      "UAT Coordination",
      "Requirements Traceability (RTM)",
      "SDLC",
      "Agile & Scrum",
    ],
  },
  {
    category: "Systems, BI & Data",
    icon: <Database className="w-5 h-5 text-indigo-400" aria-hidden="true" />,
    description:
      "Business intelligence platforms, backlog systems, relational database querying, and modeling.",
    items: [
      "Jira",
      "Confluence",
      "Microsoft Visio",
      "Lucidchart",
      "Azure DevOps",
      "SQL",
      "Tableau",
      "Power BI",
      "Advanced Excel",
    ],
  },
  {
    category: "AI & Workflow Automation",
    icon: <Sparkles className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    description:
      "Modern AI productivity, prompt engineering, and automated workflows to accelerate delivery.",
    items: [
      "Prompt Engineering",
      "Workflow Automation",
      "Microsoft Copilot",
      "ChatGPT",
      "Claude",
      "Perplexity",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Core Competencies
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; Technical Capabilities
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Organized into three functional pillars: Business Analysis &amp; Agile delivery,
            Systems &amp; Business Intelligence, and AI-enabled workflow automation.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Accent Glow Line */}
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />

              <div>
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-slate-800 rounded-xl mr-4 shadow-inner">
                    {group.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-300 bg-accent-400/10 border border-accent-400/20 hover:bg-accent-400/20 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
