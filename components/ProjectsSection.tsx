import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "FinVoice",
    description:
      "Built a full-stack AI invoicing platform that converts unstructured text into structured invoices using the Gemini API. Automates payment reminders, reducing manual workload and financial errors by over 70% for small businesses. Architected with secure JWT authentication, scalable REST APIs, and a responsive React/Tailwind dashboard.",
    link: "https://www.finvoiceai.app/",
    tags: [
      "Gemini API",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Vercel"
    ]
  },
  {
    title: "InterroGen AI",
    description:
      "Developed an AI interview generator that produces role-specific technical questions and step-by-step explanations using the Gemini API, increasing users' interview prep efficiency by 3x. Built with robust authentication, session management, and a modular Q&A UI, this production-ready tool was adopted by a Calgary tech club for personalized practice.",
    link: "https://www.interrogenai.dev/",
    tags: [
      "MERN",
      "Gemini API",
      "Authentication",
      "MongoDB",
      "Express",
      "Production Deployment"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-px bg-slate-800 flex-grow" />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="h-px bg-slate-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-400/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 transition-colors">
                  <Code2 className="w-8 h-8 text-accent-400" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Live Site
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full border border-slate-700/50"
                  >
                    {tag}
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
