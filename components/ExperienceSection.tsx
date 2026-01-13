import { Briefcase } from "lucide-react";
import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    company: "Headway Software Solutions",
    role: "Software Developer Intern",
    type: "Internship",
    period: "Sep 2024 – Aug 2025",
    location: "Calgary, Alberta",
    achievements: [
      "Engineered high-performance UI modules using React, reducing UI-related QA defects by 40%.",
      "Architected scalable backend APIs with Node.js and MongoDB, cutting recurring API failures by 35%.",
      "Automated multi-environment deployments using GitHub Actions and Docker, reducing deployment effort by 70%.",
      "Accelerated development velocity by 30% by integrating OpenAI and Gemini APIs for rapid prototyping."
    ],
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "AWS",
      "Git"
    ]
  },
  {
    company: "Alberta AI & Tech Innovation Club",
    role: "Software Developer — Fixed-Term Project",
    type: "Fixed-Term",
    period: "Oct 2025 – Dec 2025",
    location: "Calgary, Alberta",
    achievements: [
      "Built a MERN-stack AI interviewer platform that tripled member interview practice usage (3×).",
      "Integrated Gemini and OpenAI APIs for dynamic, adaptive Q&A flows, increasing engagement by 40%.",
      "Deployed the full-stack platform using Docker, AWS, and Vercel, cutting demo deployment time from hours to minutes."
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini APIs",
      "Docker",
      "CI/CD"
    ]
  },
  {
    company: "Franquicia Boost",
    role: "Software Developer (Front-End) Intern",
    type: "Internship",
    period: "Aug 2025 – Oct 2025",
    location: "Calgary, Alberta · Remote",
    achievements: [
      "Contributed to the design and development of Franquicia Boost’s official website for a Calgary-based startup with global operations.",
      "Implemented responsive, high-performance front-end components using React, improving usability across devices.",
      "Customized CMS-driven content workflows to enable non-technical stakeholders to manage site updates efficiently.",
      "Collaborated directly with the CEO and leadership team, incorporating best practices influenced by experience at companies such as Shopify."
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CMS",
      "Responsive Design",
      "Startup Delivery"
    ]
  },
  {
    company: "Blue Giant Equipment Corporation",
    role: "Software Developer — Industry-Sponsored Capstone Project",
    type: "Capstone",
    period: "Jan 2026 – Apr 2026",
    location: "Mississauga, Ontario · Remote",
    achievements: [
      "Engineered a full-stack MERN application aligned with real-world industrial equipment workflows.",
      "Designed RESTful APIs, authentication flows, and reusable React components to support scalable enterprise usage.",
      "Implemented CI/CD pipelines using Docker and GitHub Actions to streamline testing and deployment.",
      "Collaborated with industry stakeholders to translate operational requirements into production-ready software features."
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "CI/CD"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">
            Professional Experience
          </h2>
          <p className="text-slate-400">
            Building production-grade software across startups, industry, and research-driven teams.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-0">
              {/* Timeline Connector */}
              <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-slate-800 -ml-[1px]" />

              <div className="group relative sm:ml-12 bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute -left-[65px] top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-accent-400 items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
                  <div className="w-2 h-2 rounded-full bg-accent-400" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent-400" />
                      {exp.company}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-sm font-mono text-slate-400">
                      {exp.period}
                    </p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-400 leading-relaxed"
                    >
                      <span className="mr-3 text-accent-400 mt-1.5 text-xs">
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-slate-500 px-2 py-1 bg-slate-900 rounded hover:text-slate-300 transition-colors"
                    >
                      {tag}
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
