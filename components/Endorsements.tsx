type Endorsement = {
  quote: string;
  name: string;
  title: string;
  course: string;
  linkedin: string;
  featured?: boolean;
  badge?: string;
};

export default function AcademicEndorsementsSection() {
  const featured: Endorsement = {
    quote:
      "I taught Harsimarpreet at SAIT in the course Software Projects: Analysis, Design, and Management, where he consistently demonstrated strong technical understanding, analytical thinking, and a professional approach to his work. He is capable of understanding complex requirements, working effectively in teams, and applying structured problem-solving to deliver practical solutions. He also shows strong initiative and a good balance of technical and collaborative skills. I confidently recommend Harsimar for opportunities in software engineering or related fields, as he is well-prepared to contribute in a professional environment.",
    name: "Mamta Verma",
    title:
      "Certified Business Analyst Professional (CBAP) · Instructor & Mentor",
    course: "Software Projects: Analysis, Design, and Management — SAIT",
    linkedin: "https://www.linkedin.com/in/mamta-verma-28a368115/",
    featured: true,
    badge: "CBAP Recommendation",
  };

  const endorsements: Endorsement[] = [
    {
      quote:
        "I worked closely with Harsimarpreet during his time with our team, and he consistently operated with a level of ownership and maturity beyond expectations. He approaches problems with clarity, writes clean and maintainable code, and aligns his work with real business needs. What stood out most was his ability to think ahead, adapt quickly, and contribute meaningfully in a fast-paced environment. Harsimarpreet is dependable, focused, and easy to work with—someone who raises the standard of the team around him. I strongly recommend him for software development roles. He’s ready to contribute from day one.",
      name: "Navpreet Singh",
      title:
        "Technical Architect | Senior Full Stack Developer | .NET, Python, AWS Cloud",
      course: "Industry Recommendation",
      linkedin:
        "https://www.linkedin.com/in/navpreet-singh-profile/?skipRedirect=true",
    },
    {
      quote:
        "In my advanced Database Programming course, Harsimar excelled at tackling complex queries, triggers, stored procedures, and database optimizations. His ability to debug, optimize, and document solutions with the clarity of a seasoned engineer places him in the top 1% of students I’ve taught. He is absolutely ready to contribute to enterprise-level database systems.",
      name: "Dr. Mohamed ElMenshawy, Ph.D.",
      title: "OOP Instructor — SAIT",
      course: "Advanced Database Programming",
      linkedin: "https://www.linkedin.com/in/mohamed-e-88a95a1b7/",
    },
    {
      quote:
        "Harsimar demonstrated strong curiosity, communication skills, and a commitment to mastering both fundamentals and real-world front-end development. He showed a natural ability to collaborate, problem-solve, and think creatively — traits that make him well-suited for the software industry.",
      name: "Harinder Kaur",
      title: "Web Development Instructor — SAIT",
      course: "Website Development",
      linkedin: "https://www.linkedin.com/in/harinder-kaur2910/",
    },
    {
      quote:
        "Harsimar consistently demonstrated a strong grasp of programming concepts, innovative thinking, and effective problem-solving. His dedication, collaboration, and proactive learning approach will make him an exceptional asset to any organization.",
      name: "Osama Alhaj, MBA",
      title: "OOP Instructor — SAIT",
      course: "Object-Oriented Programming",
      linkedin: "https://www.linkedin.com/in/osamaalhaj/",
    },
  ];

  return (
    <section id="endorsements" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Recommendations
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recommendations
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Endorsements from industry professionals and SAIT faculty —
            including a Certified Business Analyst Professional (CBAP).
          </p>
        </div>

        {/* Featured CBAP Recommendation */}
        <article className="relative mb-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-accent-400/40 rounded-3xl p-8 md:p-10 shadow-2xl shadow-accent-400/10 overflow-hidden">
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

          <div className="text-accent-400 text-5xl mb-4 leading-none" aria-hidden="true">
            “
          </div>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-4xl">
            {featured.quote}
          </p>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

        {/* Other Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {endorsements.map((item) => (
            <article
              key={item.name}
              className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                aria-hidden="true"
              />

              <div className="text-accent-400 text-4xl mb-4" aria-hidden="true">
                “
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">{item.quote}</p>

              <div className="border-t border-slate-800 pt-5 flex items-center justify-between gap-3">
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
