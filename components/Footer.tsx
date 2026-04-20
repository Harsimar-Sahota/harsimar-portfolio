export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left — Copyright */}
        <p className="text-slate-500 text-sm">
          © {year} Harsimarpreet Singh Sahota. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
