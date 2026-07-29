import { ExternalLink, BarChart3, Database, Users } from "lucide-react";
import type { Project } from "@/types";
import type { ReactNode } from "react";

const projects: (Project & { icon: ReactNode })[] = [
  {
    title: "Northwind Traders Sales Analytics & Business Intelligence",
    problem:
      "Leadership needed clearer visibility into revenue drivers, customer spending patterns, and logistics inefficiencies across end-to-end sales operations.",
    analysis:
      "Analyzed customers, products, orders, and shipping data using advanced SQL — joins, aggregations, subqueries, and CTEs — to evaluate product performance, sales trends, employee revenue contribution, and shipping efficiency.",
    impact:
      "Translated findings into actionable recommendations for revenue optimization and logistics improvement, supporting data-driven commercial decisions.",
    insights:
      "Surfaced customer spending patterns, operational bottlenecks, and product-level performance signals that informed portfolio and process priorities.",
    link: "https://github.com/Harsimar-Sahota/northwind-sql-business-analysis",
    tags: ["SQL", "MySQL", "CTEs", "Data Modeling", "Business Intelligence"],
    icon: <Database className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
  {
    title: "Retail Profitability Analysis Dashboard",
    problem:
      "Retail leadership lacked an executive view of profitability across products, categories, regions, and time periods to guide portfolio optimization.",
    analysis:
      "Built an interactive Tableau dashboard on four years of Superstore sales data with drill-down analysis, geographic mapping, and trend reporting to identify underperforming segments.",
    impact:
      "Enabled a simulated executive strategic review with clear profitability recommendations and regional performance visibility.",
    insights:
      "Identified the Top 10 loss-making products and uncovered regional patterns that informed product mix and go-to-market focus.",
    link: "https://github.com/Harsimar-Sahota/Retail-Profitability-Analysis-Dashboard",
    tags: ["Tableau", "Excel", "Dashboard", "Profitability", "Geographic Analysis"],
    icon: <BarChart3 className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
  {
    title: "HR Analytics Dashboard",
    problem:
      "HR leadership needed self-service visibility into workforce KPIs and attrition risk to support retention planning for 1,470 employees.",
    analysis:
      "Developed an Excel-based HR Analytics Dashboard using Power Query, Pivot Tables, and data visualization to track attrition rate, active employees, demographics, and related KPIs.",
    impact:
      "Presented data-driven retention strategy recommendations to simulated HR leadership, supporting workforce performance monitoring.",
    insights:
      "Identified high-risk attrition segments across departments, age groups, education levels, and job roles to prioritize intervention.",
    link: "https://github.com/Harsimar-Sahota/hr-analytics-dashboard-excel",
    tags: ["Excel", "Power Query", "Pivot Tables", "HR Analytics", "Data Visualization"],
    icon: <Users className="w-8 h-8 text-accent-400" aria-hidden="true" />,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-px bg-slate-800 flex-grow" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="h-px bg-slate-800 flex-grow" aria-hidden="true" />
        </div>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Business analysis and BI case studies focused on insights,
          recommendations, and measurable decision support.
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
