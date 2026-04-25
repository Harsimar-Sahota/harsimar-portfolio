export default function AcademicEndorsementsSection() {
  const endorsements = [
    ,
{
  quote:
    "I worked closely with Harsimarpreet during his time with our team, and he consistently operated with a level of ownership and maturity beyond expectations. He approaches problems with clarity, writes clean and maintainable code, and aligns his work with real business needs. What stood out most was his ability to think ahead, adapt quickly, and contribute meaningfully in a fast-paced environment. Harsimarpreet is dependable, focused, and easy to work with—someone who raises the standard of the team around him. I strongly recommend him for software development roles. He’s ready to contribute from day one.",
  name: "Navpreet Singh",
  title:
    "Technical Architect | Senior Full Stack Developer | .NET, Python, AWS Cloud",
  course: "Industry Recommendation",
  linkedin: "https://www.linkedin.com/in/navpreet-singh-profile/?skipRedirect=true", 
}
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
            ⭐ Faculty Recognition
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Endorsements
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Faculty recommendations recognizing technical excellence,
            professionalism, and readiness for the software industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {endorsements.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent Glow */}
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

              {/* Quote Icon */}
              <div className="text-accent-400 text-4xl mb-4">“</div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-800 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{item.name}</p>

                  <p className="text-slate-400 text-sm">{item.title}</p>

                  <p className="text-slate-500 text-xs">{item.course}</p>
                </div>

                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 text-sm font-semibold hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
