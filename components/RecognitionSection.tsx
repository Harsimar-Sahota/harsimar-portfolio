import Image from "next/image";

export default function RecognitionSection() {
  return (
    <section id="recognition" className="py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Featured Recognition
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Recognized by SAIT Academic Chair
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-4">
          Official LinkedIn Student Success Story published by SAIT Academic
          Chair Ali Moussa, recognizing academic achievement, industry
          experience, leadership, and professional growth.
        </p>

        <p className="text-[12px] text-slate-400/70 text-center max-w-xl mx-auto mb-14 tracking-wide">
          Screenshot of the original LinkedIn post. You can open the full post
          below.
        </p>

        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            aria-hidden="true"
          />

          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white shadow-lg">
            <Image
              src="/recommendations/sait-success-story.png"
              alt="LinkedIn Student Success Story by Ali Moussa, Academic Chair of the Software Development Diploma at SAIT, featuring Harsimarpreet Singh Sahota"
              width={1200}
              height={1600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Ali Moussa</p>
              <p className="text-slate-400 text-sm">
                Academic Chair, Software Development Diploma — SAIT
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="text-[11px] font-medium text-accent-400/80 tracking-wide">
                ✓ Official LinkedIn Student Success Story
              </span>
              <a
                href="https://www.linkedin.com/posts/ali-moussa4_software-development-diploma-activity-7429578618948972544-VQSd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADW5_FAB92V-CBYUpWnMC6W0hQZipN2nPW8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View original LinkedIn Student Success Story (opens in a new tab)"
                className="inline-block px-5 py-2 rounded-full bg-accent-400 text-slate-900 font-semibold hover:bg-accent-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
              >
                View Original LinkedIn Post →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
