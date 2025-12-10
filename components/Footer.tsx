export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Harsimarpreet Singh Sahota. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm flex flex-wrap items-center justify-center gap-1">
          Built with{" "}
          <span className="text-accent-400 font-semibold px-1">
            Next.js 14
          </span>
          ,
          <span className="text-accent-400 font-semibold px-1">
            TypeScript
          </span>
          &
          <span className="text-accent-400 font-semibold px-1">
            Tailwind CSS
          </span>
          , deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
