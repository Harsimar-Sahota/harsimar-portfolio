import { Terminal, Database, Cpu, Layout } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="w-5 h-5 text-pink-400" />,
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
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
      "Agile"
    ]
  },
  {
    category: "AI & Computer Science",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    items: ["OpenAI API", "Gemini API", "Prompt Engineering", "OOP", "Data Structures", "Algorithms"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed to build scalable, high-performance
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-slate-800 rounded-lg mr-4">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 text-sm text-slate-300 rounded-md border border-slate-700/50 hover:bg-slate-700 hover:text-white transition-all cursor-default"
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
