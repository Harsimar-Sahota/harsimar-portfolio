import { Terminal, Database, Cpu, Layout } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="w-5 h-5 text-pink-400" />,
    items: [
      "React.js",
      "Node.js",
      "BootStrap",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    category: "Developer Tools & Practices",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Postman",
      "AWS",
      "Vercel",
      "Agile",
      "SDLC",
      "AI IDEs: Cursor, Windsurf",
    ],
  },
  {
    category: "AI & Computer Science",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    items: [
      "OpenAI API",
      "Prompt Engineering",
      "Data Structures & Algorithms",
      " AI Development Tools (ChatGPT, Gemini, Copilot + others)",
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
            🧠 Core Engineering Stack
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed to build scalable, high-performance
            applications.
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
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

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
