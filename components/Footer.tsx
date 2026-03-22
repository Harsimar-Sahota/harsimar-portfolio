export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left — Copyright */}
        <p className="text-slate-500 text-sm">
          © {year} Harsimarpreet Singh Sahota. All rights reserved.
        </p>

        {/* Right — Tech Stack */}
        <p className="text-slate-500 text-sm flex flex-wrap items-center justify-center gap-1">
          Built with{" "}
          <span className="text-accent-400 font-semibold">Next.js</span>,{" "}
          <span className="text-accent-400 font-semibold">TypeScript</span>, and{" "}
          <span className="text-accent-400 font-semibold">Tailwind CSS</span> —
          deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
