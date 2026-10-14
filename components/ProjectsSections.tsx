import { ExternalLink, BarChart3, Database, Users } from "lucide-react";
import type { Project } from "@/types";
import type { ReactNode } from "react";

const projects: (Project & { icon: ReactNode })[] = [
  {
    title: "Northwind Traders Sales Analytics & Business Intelligence",
    problem:
      "Leadership needed clearer visibility into revenue drivers, customer spending patterns, and logistics inefficiencies across end-to-end sales operations.",
    analysis:
      "Analyzed end-to-end sales operations across customers, products, orders, and logistics and applied advanced SQL techniques (joins, aggregations, subqueries, CTEs) to translate sales trends into actionable business insights.",
    impact:
      "Translated findings into strategic recommendations for revenue optimization and shipping efficiency, supporting data-driven commercial decisions.",
    insights:
      "Surfaced customer spending behaviors, product revenue contributions, and operational delivery patterns to prioritize commercial opportunities.",
    link: "https://github.com/Harsimar-Sahota/northwind-sql-business-analysis",
    tags: ["SQL", "MySQL", "CTEs", "Subqueries", "Aggregations", "Business Intelligence"],
    icon: <Database className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
  {
    title: "Retail Profitability Analysis Dashboard",
    problem:
      "Retail leadership lacked an executive view of profitability across products, categories, regions, and time periods to guide portfolio optimization.",
    analysis:
      "Built an interactive Tableau dashboard analyzing 4 years of Superstore sales data and designed drill-down and geographic mapping to identify loss-making products and present profitability recommendations.",
    impact:
      "Delivered an executive-ready strategic review with clear product profitability recommendations and geographic performance visibility.",
    insights:
      "Identified critical loss-making products and regional performance variances to guide product mix adjustments and margin protection.",
    link: "https://github.com/Harsimar-Sahota/Retail-Profitability-Analysis-Dashboard",
    tags: ["Tableau", "Interactive Dashboards", "Geographic Mapping", "Drill-Down Analysis", "Profitability Modeling"],
    icon: <BarChart3 className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
  {
    title: "HR Analytics Dashboard",
    problem:
      "HR leadership needed self-service visibility into workforce KPIs and attrition risk to support retention planning for 1,470 employees.",
    analysis:
      "Developed a self-service HR analytics dashboard in Excel analyzing workforce data for 1,470 employees and identified high-risk attrition segments to present retention strategy recommendations.",
    impact:
      "Presented data-driven workforce retention recommendations to leadership, enabling proactive management of employee turnover risk.",
    insights:
      "Identified high-risk attrition segments across job roles, departments, salary bands, and tenure to target HR intervention strategies.",
    link: "https://github.com/Harsimar-Sahota/hr-analytics-dashboard-excel",
    tags: ["Advanced Excel", "Power Query", "Pivot Tables", "Workforce Analytics", "KPI Dashboards"],
    icon: <Users className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-accent-400/10 text-accent-400 text-sm font-semibold border border-accent-400/30">
            Analytics &amp; BI Projects
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-slate-400 mb-14 max-w-2xl mx-auto">
          Business analysis and BI case studies focused on requirements, data modeling,
          actionable insights, and measurable decision support.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-400/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 transition-colors">
                  {project.icon}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  GitHub
                  <ExternalLink className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent-400 transition-colors leading-snug">
                {project.title}
              </h3>

              <div className="space-y-4 mb-8 flex-grow text-sm leading-relaxed">
                <div>
                  <p className="text-accent-400 font-semibold text-xs uppercase tracking-wide mb-1">
                    Problem
                  </p>
                  <p className="text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <p className="text-accent-400 font-semibold text-xs uppercase tracking-wide mb-1">
                    Analysis
                  </p>
                  <p className="text-slate-400">{project.analysis}</p>
                </div>
                <div>
                  <p className="text-accent-400 font-semibold text-xs uppercase tracking-wide mb-1">
                    Business Impact
                  </p>
                  <p className="text-slate-400">{project.impact}</p>
                </div>
                <div>
                  <p className="text-accent-400 font-semibold text-xs uppercase tracking-wide mb-1">
                    Key Insights
                  </p>
                  <p className="text-slate-400">{project.insights}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
