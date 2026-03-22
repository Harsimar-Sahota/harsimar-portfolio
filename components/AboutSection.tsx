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
            👋 Professional Profile
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About Me
        </h2>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl overflow-hidden">
          {/* Accent Glow Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-accent-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

          {/* Primary Summary */}
          <p className="text-xl text-slate-300 leading-relaxed font-light text-left">
            Full Stack Web Developer skilled in MERN stack, Docker CI/CD, and
            AWS/Vercel deployments. Delivered production UI modules with React
            reducing defects by 40%, scalable Node.js/Express APIs cutting
            failures by 35%, and AI-integrated platforms tripling user
            engagement. Proven through software internship, industry capstone,
            and live SaaS projects like FinVoice and InterroGen AI. Actively
            pursuing Full Stack Web Developer roles.
          </p>

          {/* Divider */}
          <div className="my-8 flex justify-center">
            <div className="h-1 w-24 bg-accent-400 rounded-full opacity-70" />
          </div>

          {/* Secondary Paragraph */}
          <p className="text-lg text-slate-400 leading-relaxed text-left">
            I am passionate about Alberta&apos;s tech scene and am eager to
            contribute to a team that values innovation, ownership, and
            collaboration. Whether it&apos;s automating a deployment pipeline or
            crafting a seamless user interface, I bring a commitment to
            excellence in everything I ship.
          </p>
        </div>
      </div>
    </section>
  );
}
