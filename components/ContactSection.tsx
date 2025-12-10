import { Mail, Phone, Linkedin, Github, Coffee } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-950 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I&apos;m actively seeking new opportunities in Alberta&apos;s tech
          scene. If you&apos;re looking for a developer who can ship product,
          learn fast, and make an impact, let&apos;s connect.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="mailto:Harsimar1288@gmail.com"
            className="flex items-center text-slate-300 hover:text-white transition-colors bg-slate-900 px-6 py-3 rounded-full border border-slate-800 hover:border-slate-600"
          >
            <Mail className="w-5 h-5 mr-3 text-accent-400" />
            Harsimar1288@gmail.com
          </a>
          <div className="flex items-center text-slate-300 bg-slate-900 px-6 py-3 rounded-full border border-slate-800">
            <Phone className="w-5 h-5 mr-3 text-accent-400" />
            (368) 299-8325
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a
            href="https://calendly.com/harsimarsahota"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-accent-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 focus:ring-offset-slate-900 hover:bg-accent-500 hover:scale-105 shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Book a Coffee Chat
          </a>

          <div className="flex gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/harsimar-sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Harsimar-Sahota"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-600"
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
