export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900 border-y border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Professional Profile
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About Me
        </h2>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
          {/* Accent Glow Line */}
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
            aria-hidden="true"
          />

          {/* Primary Summary */}
          <p className="text-xl text-slate-300 leading-relaxed font-light text-left">
            I am a Business Analyst dedicated to bridging business stakeholders and technical delivery teams by translating complex business requirements into clear, actionable specifications. With proven internship experience facilitating workshops with 18+ cross-functional stakeholders, documenting 120+ user stories across Agile delivery cycles, and authoring BRDs, FRDs, and Gherkin acceptance criteria in Jira and Confluence, I help teams align on scope and deliver with confidence.
          </p>

          {/* Divider */}
          <div className="my-8 flex justify-center" aria-hidden="true">
            <div className="h-1 w-24 bg-accent-400 rounded-full opacity-70" />
          </div>

          {/* Secondary Paragraph */}
          <p className="text-lg text-slate-400 leading-relaxed text-left mb-6">
            My approach pairs rigorous business analysis with hands-on analytical capabilities in SQL, Tableau, Power BI, and Advanced Excel—enabling me to analyze operational workflows, develop executive dashboards, and eliminate weekly reporting bottlenecks. Through BPMN 2.0 process modeling, swimlane diagrams, and current/future-state journey mapping, I identify friction points and collaborate with development and QA teams through structured UAT coordination to reduce post-release defects.
          </p>

          <p className="text-base text-slate-400 leading-relaxed text-left">
            I also incorporate modern AI and workflow automation tools—including prompt engineering, Microsoft Copilot, ChatGPT, and Claude—to accelerate user research, streamline documentation, and refine test scenarios. Actively preparing for the Entry Certificate in Business Analysis (ECBA™) with IIBA, I am open to Business Analyst and data-focused opportunities across Canada.
          </p>

          <p className="mt-8 text-sm text-slate-500 leading-relaxed text-left">
            The &quot;.ba&quot; in Harsimar.ba represents my dedicated focus on Business Analysis, structured requirements engineering, and data-driven problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}
