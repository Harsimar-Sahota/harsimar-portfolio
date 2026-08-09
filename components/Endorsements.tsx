import Image from "next/image";

type Endorsement = {
  name: string;
  title: string;
  course: string;
  linkedin: string;
  image: string;
  featured?: boolean;
  badge?: string;
};

export default function AcademicEndorsementsSection() {
  const featured: Endorsement = {
    name: "Mamta Verma",
    title:
      "Certified Business Analyst Professional (CBAP) · Instructor & Mentor",
    course: "Software Projects: Analysis, Design, and Management — SAIT",
    linkedin: "https://www.linkedin.com/in/mamta-verma-28a368115/",
    image: "/recommendations/mamta-verma.png",
    featured: true,
    badge: "CBAP Recommendation",
  };

  const endorsements: Endorsement[] = [
    {
      name: "Navpreet Singh",
      title:
        "Technical Architect | Senior Full Stack Developer | .NET, Python, AWS Cloud",
      course: "Industry Recommendation",
      linkedin:
        "https://www.linkedin.com/in/navpreet-singh-profile/?skipRedirect=true",
      image: "/recommendations/navpreet-singh.png",
    },
    {
      name: "Mohamed E.",
      title:
        "Passionate Software Engineering Educator | Ph.D. (ECE) | Instructor, SAIT",
      course: "Advanced Database Programming",
      linkedin: "https://www.linkedin.com/in/mohamed-e-88a95a1b7/",
      image: "/recommendations/mohamed-e.png",
    },
    {
      name: "Harinder Kaur",
      title: "Instructor, SADT at Southern Alberta Institute of Technology (SAIT)",
      course: "Website Development",
      linkedin: "https://www.linkedin.com/in/harinder-kaur2910/",
      image: "/recommendations/harinder-kaur.png",
    },
    {
      name: "Osama Alhaj, MBA",
      title:
        "Data Analyst | Technical Curriculum Developer | Software & Programming Instructor",
      course: "Object-Oriented Programming",
      linkedin: "https://www.linkedin.com/in/osamaalhaj/",
      image: "/recommendations/osama-alhaj.png",
    },
  ];

  return (
    <section id="endorsements" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Recommendations
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recommendations
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Endorsements from industry professionals and SAIT faculty —
            including a Certified Business Analyst Professional (CBAP).
          </p>
        </div>

        {/* Featured CBAP Recommendation screenshot */}
        <article className="relative mb-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-accent-400/40 rounded-3xl p-6 md:p-10 shadow-2xl shadow-accent-400/10 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-1.5 bg-accent-400 shadow-[0_0_24px_rgba(34,211,238,0.8)]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-accent-400/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-accent-400 text-slate-900">
              Featured
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-400/10 text-accent-400 border border-accent-400/30">
              {featured.badge}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white shadow-lg">
            <Image
              src={featured.image}
              alt={`LinkedIn recommendation from ${featured.name} — ${featured.course}`}
              width={1200}
              height={700}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>

          <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg">{featured.name}</p>
              <p className="text-accent-400 text-sm font-medium mt-1">
                {featured.title}
              </p>
              <p className="text-slate-500 text-sm mt-1">{featured.course}</p>
            </div>

            <a
              href={featured.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent-400 text-slate-900 text-sm font-bold hover:bg-accent-500 transition-colors"
            >
              View LinkedIn Profile →
            </a>
          </div>
        </article>

        {/* Other recommendation screenshots */}
        <div className="grid md:grid-cols-2 gap-8">
          {endorsements.map((item) => (
            <article
              key={item.name}
              className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                aria-hidden="true"
              />

              <div className="rounded-xl overflow-hidden border border-slate-700 bg-white shadow-md">
                <Image
                  src={item.image}
                  alt={`LinkedIn recommendation from ${item.name} — ${item.course}`}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="border-t border-slate-800 mt-5 pt-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-slate-400 text-sm">{item.title}</p>
                  <p className="text-slate-500 text-xs">{item.course}</p>
                </div>

                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 text-sm font-semibold hover:underline shrink-0"
                >
                  LinkedIn →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
