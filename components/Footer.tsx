export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p className="text-slate-500 text-sm">
            © {year} Harsimarpreet Singh Sahota. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Business Analyst Portfolio — Open to opportunities across Canada
          </p>
        </div>
        <a
          href="/HarsimarSahota_BusinessAnalyst_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}
