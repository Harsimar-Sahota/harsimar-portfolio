import Image from "next/image";
import { Github, Linkedin, FolderKanban, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-accent-400/50 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] overflow-hidden bg-slate-800">
            <Image
              src="/profile.jpg"
              alt="Harsimarpreet Singh Sahota, Business Analyst"
              width={400}
              height={400}
              priority
              sizes="(max-width: 768px) 128px, 160px"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
          Turning Business Requirements <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-teal-200 to-accent-400">
            Into Data-Driven Solutions
          </span>
        </h1>

        {/* Identity & Role */}
        <p className="text-xl md:text-2xl text-slate-200 font-semibold mb-2">
          Harsimarpreet Singh Sahota
        </p>
        <p className="text-sm sm:text-base md:text-lg text-accent-400 font-medium mb-6 tracking-wide">
          Business Analyst <span className="text-slate-600 mx-2" aria-hidden="true">•</span> Data Analytics <span className="text-slate-600 mx-2" aria-hidden="true">•</span> Agile Delivery <span className="text-slate-600 mx-2" aria-hidden="true">•</span> AI-Enabled Business Solutions
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-3 leading-relaxed">
          I&apos;m a Business Analyst with experience translating stakeholder needs into actionable requirements, improving business processes, and delivering data-driven insights. I bring together SQL, Tableau, Excel, Agile delivery, and AI-enabled workflows to help teams make better decisions and deliver better solutions.
        </p>

        <p className="text-sm text-slate-400 mb-10">
          Based in Calgary, Alberta — open to Business Analyst opportunities across Canada.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-400 text-slate-900 font-bold hover:bg-accent-500 transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] flex items-center justify-center"
          >
            <FolderKanban className="w-4 h-4 mr-2" aria-hidden="true" />
            View Projects
          </a>
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center font-semibold"
          >
            <Briefcase className="w-4 h-4 mr-2 text-accent-400" aria-hidden="true" />
            Explore Experience
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-white hover:border-accent-400 hover:text-accent-400 transition-all flex items-center justify-center font-semibold"
          >
            Let&apos;s Connect
          </a>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/harsimar-sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-slate-800 transition-colors flex items-center justify-center"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Harsimar-Sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-slate-800 transition-colors flex items-center justify-center"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
