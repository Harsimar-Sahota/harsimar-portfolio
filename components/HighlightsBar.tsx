const metrics = [
  { value: "8+", label: "Stakeholders Engaged" },
  { value: "25+", label: "User Stories Delivered" },
  { value: "10 hrs", label: "Weekly Reporting Saved" },
  { value: "30%", label: "Defects Reduced" },
];

export default function HighlightsBar() {
  return (
    <div className="w-full bg-slate-900/50 border-y border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center p-2">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-1">
                {metric.value}
              </span>
              <span className="text-sm text-accent-400 font-medium tracking-wide uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
