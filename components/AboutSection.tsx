export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 border-y border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>

        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            I&apos;m a software developer driven to build tools that are not
            just functional, but impactful. My focus is on writing clean,
            scalable code and leveraging modern technologies like AI and CI/CD
            to help teams move faster and build better products.
          </p>
          <div className="mt-8 h-1 w-20 bg-accent-400 mx-auto rounded-full opacity-50" />
          <p className="text-lg text-slate-400 mt-8 leading-relaxed">
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
