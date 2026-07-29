import Image from "next/image";
import { Github, Linkedin, ArrowRight, FileText, FolderKanban } from "lucide-react";

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

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
          Harsimarpreet <br className="hidden md:block" /> Singh Sahota
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
          Business Analyst{" "}
          <span className="text-slate-500 mx-2" aria-hidden="true">
            /
          </span>{" "}
          Requirements &amp; Data Analysis
        </p>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-2 leading-relaxed">
          I translate business needs into clear requirements, analyze data with
          SQL, Excel, and Tableau, and partner with stakeholders to improve
          processes in Agile environments.
        </p>

        <p className="text-sm text-slate-500 mb-10">
          Based in Calgary, Alberta — open to Business Analyst opportunities
          across Canada.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="/HarsimarSahota_BusinessAnalyst_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-400 text-slate-900 font-bold hover:bg-accent-500 transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] flex items-center justify-center"
          >
            <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
            View Resume
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-slate-900 transition-all flex items-center justify-center font-semibold"
          >
            <FolderKanban className="w-4 h-4 mr-2" aria-hidden="true" />
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-white hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center group font-semibold"
          >
            Let&apos;s Connect
          </a>
          <a
            href="https://www.linkedin.com/in/harsimar-sahota"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-slate-400 hover:text-white transition-colors flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Harsimar-Sahota"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-slate-400 hover:text-white transition-colors flex items-center justify-center"
            aria-label="GitHub profile"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
