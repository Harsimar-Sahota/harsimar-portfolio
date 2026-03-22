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
      "Engineered high-performance UI modules using React and modern Javascript, reducing UI-related QA defects by 40% through reusable components and optimized rendering pipelines.",
      "Architected scalable backend APIs with Node.js, Express, and MongoDB, cutting recurring API failures by 35% across critical workflows.",
      "Reduced API development and debugging time by 30% through strategic use of AI-assisted code generation and debugging tools (Cursor, OpenAI/Gemini), improving delivery speed across backend workflows.",
      "Automated multi-environment deployments using GitHub Actions + Docker, shipping builds to AWS/Vercel/Netlify and reducing deployment effort by 70% while improving QA cycle speed by 30–40%.s",
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
      "Git",
    ],
  },
  {
    company: "Alberta AI & Tech Innovation Club",
    role: "Contributing Developer",
    period: "Oct 2025 – Dec 2025",
    location: "Calgary, Alberta",
    achievements: [
      "Developed and contributed a production-style full-stack practice platform to an 800+ member tech community, implementing React routing, centralized state management, RESTful APIs, and MongoDB schemas to support persistent, multi-user workflows.",
      "Designed secure authentication and session management flows using JWT and backend validation, enabling reliable access and driving 3× growth in member platform usage.",
      "Integrated AI-powered features as backend services, enhancing role-specific content delivery while preserving a web-first architecture focused on scalability, performance, and maintainability.",
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini APIs",
      "Docker",
      "CI/CD",
    ],
  },
  {
    company: "Blue Giant Equipment Corporation",
    role: "Software Developer - Industry Project",
    type: "Industry Project",
    period: "Jan 2026 – Apr 2026",
    location: "Mississauga, Ontario · Remote",
    achievements: [
      "Designed an enterprise-grade firmware and documentation delivery platform on AWS for industrial control panels, leveraging S3 + CDN to support scalable, multi-site IIoT deployments.",
      "Built secure admin workflows for firmware versioning, device provisioning, site allocation, and role-based access (Admin/Technician), modeled for global manufacturing environments.",
      "Developed device update and reporting pipelines using REST APIs and MQTT-based communication, enabling reliable firmware delivery and update status tracking in a production-style architecture.",
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "CI/CD",
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
            💼 Production Experience
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Building production-grade software across startups, industry, and
            research-driven teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-14">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-slate-800" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20">
              {/* Timeline Dot */}
              <div className="hidden sm:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-slate-950 border border-accent-400 items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10">
                <Briefcase className="w-5 h-5 text-accent-400" />
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
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

                {/* Achievements */}
                <ul className="space-y-4 mb-7">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-300 leading-relaxed"
                    >
                      <span className="mr-3 text-accent-400 mt-1.5 text-xs">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
