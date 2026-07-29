import { Users, Mic, PenTool } from "lucide-react";
import type { LeadershipItem } from "@/types";

const items: (LeadershipItem & { icon: React.ReactNode })[] = [
  {
    title: "Thought Leadership",
    role: "19,000+ Followers",
    description:
      "Shares practical insights on analytical thinking, AI productivity, and professional growth with a LinkedIn community of over 19,000 followers.",
    icon: <PenTool className="w-6 h-6 text-white" aria-hidden="true" />,
  },
  {
    title: "Conference Volunteer",
    role: "Alberta Tech Ecosystem",
    description:
      "Actively supported major tech conferences and startup showcases with Alberta Innovates, Platform Calgary, and TechConnect Alberta, assisting founders, investors, and speakers.",
    icon: <Users className="w-6 h-6 text-white" aria-hidden="true" />,
  },
  {
    title: "Community Volunteer",
    role: "GDG Calgary",
    description:
      "Managed event logistics and supported workshops for over 300 attendees at DevFest 2024, contributing to one of Calgary's key community tech events.",
    icon: <Mic className="w-6 h-6 text-white" aria-hidden="true" />,
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Leadership &amp; Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-accent-500/50 transition-all hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-accent-500/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-accent-400 mb-4 uppercase tracking-wide">
                {item.role}
              </p>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
