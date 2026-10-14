import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-950 flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Get in Touch
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
          I&apos;m a Business Analyst open to opportunities across Canada —
          interested in Business Analysis, Business Intelligence, Data
          Analytics, Digital Transformation, and Process Improvement.
        </p>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto text-base">
          If you&apos;re hiring for a Business Analyst role or want to discuss how
          I can support requirements, stakeholders, and data-driven decisions,
          I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:harsimar1288@gmail.com"
            className="flex items-center text-slate-200 hover:text-white transition-colors bg-slate-900 px-6 py-3.5 rounded-full border border-slate-800 hover:border-accent-400/50 shadow-md"
          >
            <Mail className="w-5 h-5 mr-3 text-accent-400" aria-hidden="true" />
            harsimar1288@gmail.com
          </a>
          <a
            href="tel:+13682998325"
            className="flex items-center text-slate-200 hover:text-white transition-colors bg-slate-900 px-6 py-3.5 rounded-full border border-slate-800 hover:border-accent-400/50 shadow-md"
          >
            <Phone className="w-5 h-5 mr-3 text-accent-400" aria-hidden="true" />
            +1 (368) 299-8325
          </a>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:harsimar1288@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-accent-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 focus:ring-offset-slate-900 hover:bg-accent-500 hover:scale-105 shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]"
          >
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            Discuss Opportunities
          </a>

          <div className="flex gap-6 mt-2">
            <a
              href="https://www.linkedin.com/in/harsimar-sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Harsimar-Sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-600"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
