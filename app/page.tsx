import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-accent-400/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <HighlightsBar />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
