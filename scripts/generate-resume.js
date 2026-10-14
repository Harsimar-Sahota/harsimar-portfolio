const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateResumePDF(outputPath) {
  // Letter size: 612 x 792 points
  const doc = new PDFDocument({
    size: "letter",
    margins: {
      top: 32,
      bottom: 30,
      left: 38,
      right: 38,
    },
    info: {
      Title: "Harsimarpreet Singh Sahota - Business Analyst Resume",
      Author: "Harsimarpreet Singh Sahota",
      Subject: "Business Analyst Resume",
      Keywords: "Business Analyst, SQL, Tableau, Power BI, Agile, UAT",
    },
    autoFirstPage: true,
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const primaryColor = "#000000";
  const sectionColor = "#047857"; // Emerald / Green heading like screenshot (#059669 / #047857)
  const linkColor = "#1d4ed8"; // Classic professional blue
  const bodyColor = "#111827";
  const mutedColor = "#374151";

  const pageWidth = 612;
  const leftMargin = 38;
  const rightMargin = 38;
  const contentWidth = pageWidth - leftMargin - rightMargin; // 536 pt

  // --- HEADER ---
  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor(primaryColor)
    .text("Harsimarpreet Singh Sahota", {
      align: "center",
      width: contentWidth,
    });

  doc.moveDown(0.2);

  // Subtitle with links
  doc.font("Helvetica").fontSize(9.5).fillColor(mutedColor);

  const subY = doc.y;
  // Center contact string
  // "Email: harsimar1288@gmail.com | Mobile: +1(368) 299-8325 | LinkedIn | Portfolio"
  doc.text("Email: ", leftMargin, subY, { continued: true });
  doc.fillColor(linkColor).text("harsimar1288@gmail.com", {
    link: "mailto:harsimar1288@gmail.com",
    underline: true,
    continued: true,
  });
  doc.fillColor(mutedColor).text(" | Mobile: +1(368) 299-8325 | ", {
    link: null,
    underline: false,
    continued: true,
  });
  doc.fillColor(linkColor).text("LinkedIn", {
    link: "https://www.linkedin.com/in/harsimar-sahota",
    underline: true,
    continued: true,
  });
  doc.fillColor(mutedColor).text(" | ", {
    link: null,
    underline: false,
    continued: true,
  });
  doc.fillColor(linkColor).text("Portfolio", {
    link: "https://www.harsimar.xyz",
    underline: true,
    continued: false,
  });

  doc.moveDown(0.3);

  // Divider line
  const lineY = doc.y;
  doc
    .strokeColor("#9ca3af")
    .lineWidth(0.75)
    .moveTo(leftMargin, lineY)
    .lineTo(leftMargin + contentWidth, lineY)
    .stroke();

  doc.y = lineY + 6;

  // Helper for Section Heading
  function renderSectionHeader(title) {
    doc.moveDown(0.25);
    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .fillColor(sectionColor)
      .text(title, leftMargin, doc.y);
    doc.moveDown(0.15);
  }

  // Helper for Experience Item
  function renderJobHeader(title, dates) {
    const curY = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .fillColor(primaryColor)
      .text(title, leftMargin, curY, { width: contentWidth - 110 });

    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(primaryColor)
      .text(dates, leftMargin + contentWidth - 110, curY, {
        width: 110,
        align: "right",
      });

    doc.y = Math.max(doc.y, curY + 12);
  }

  // Helper for bullet item
  function renderBullet(text) {
    const bulletIndent = 12;
    const bulletY = doc.y;

    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(bodyColor)
      .text("●", leftMargin + 2, bulletY, { width: 8 });

    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(bodyColor)
      .text(text, leftMargin + bulletIndent, bulletY, {
        width: contentWidth - bulletIndent,
        lineGap: 1.2,
      });

    doc.moveDown(0.18);
  }

  // --- EXPERIENCE ---
  renderSectionHeader("Experience");

  renderJobHeader(
    "Headway Software Solutions — Business Analyst Intern",
    "Oct 2025 - Sep 2026"
  );
  renderBullet(
    "Elicited, analyzed, and documented business requirements for software solution projects from 18+ cross-functional stakeholders and SMEs, facilitating requirements workshops and translating business needs into 80+ user stories, acceptance criteria, BRDs, and FRDs in Jira and Confluence that improved sprint delivery efficiency by 20% across 20+ two-week sprints."
  );
  renderBullet(
    "Leveraged SQL, Excel, and Tableau to analyze operational data, develop 4 interactive dashboards, and reduce weekly manual reporting efforts for leadership teams by 35 hours."
  );
  renderBullet(
    "Conducted business process analysis through stakeholder interviews, BPMN process models, swimlane diagrams, and current-state/future-state mapping for 25+ workflows, identifying improvement opportunities that reduced manual process dependencies by 30% and improved operational efficiency."
  );
  renderBullet(
    "Reduced post-development defects and rework by 35% by coordinating requirement validation, UAT activities across 4 major release cycles in Jira and Azure DevOps, project risk tracking, and stakeholder communications with product owners, developers, and QA teams, ensuring alignment between business requirements and delivered solutions."
  );

  doc.moveDown(0.2);

  renderJobHeader(
    "Alberta AI & Tech Innovation Club — Business Analyst Intern",
    "Dec 2024 - July 2025"
  );
  renderBullet(
    "Facilitated product discovery workshops across platform leads, academic mentors, and 50+ pilot student users; owned the Jira backlog, decomposing high-level platform epics into 40+ user stories with Gherkin-format acceptance criteria and technical API specifications."
  );
  renderBullet(
    "Mapped end-to-end student onboarding and intake journeys in Microsoft Visio, standardizing operational handoffs between advisors and the automated system to accelerate consultation turnaround times by 35%."
  );
  renderBullet(
    "Engineered Power BI tracking models using SQL and Excel to evaluate student engagement funnels and drop-offs, synthesizing user feedback into prioritized backlog enhancements that lifted user retention by 20%."
  );
  renderBullet(
    "Directed UAT across 3 AI simulation releases—authoring 80+ test cases to evaluate generative prompt accuracy, edge cases, and response latency, partnering with developers to cut post-release defects by 30%."
  );

  // --- CERTIFICATIONS ---
  renderSectionHeader("Certifications");

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text(
      "Entry Certificate in Business Analysis (ECBA™) — IIBA (In Progress)",
      leftMargin,
      doc.y
    );
  doc.moveDown(0.25);

  // PwC
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text("PwC Technology Consulting Simulation — ", leftMargin, doc.y, {
      continued: true,
    });
  doc.fillColor(linkColor).text("Certificate", {
    link: "https://www.theforage.com/simulations/pwc",
    underline: true,
    continued: false,
  });
  doc.moveDown(0.05);
  renderBullet(
    "Created client discovery interview guides, prioritized user stories, and built an MVP roadmap for legacy compliance system modernization."
  );

  // KPMG
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text("KPMG Advisory & Data Analysis Simulation — ", leftMargin, doc.y, {
      continued: true,
    });
  doc.fillColor(linkColor).text("Certificate", {
    link: "https://www.theforage.com/simulations/kpmg",
    underline: true,
    continued: false,
  });
  doc.moveDown(0.05);
  renderBullet(
    "Evaluated supplier performance data using AI to deliver strategic growth recommendations to leadership."
  );

  // --- LEADERSHIP & PROJECTS ---
  renderSectionHeader("Leadership & Projects");

  // Project 1
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text(
      "Northwind Traders Sales Analytics & Business Intelligence — ",
      leftMargin,
      doc.y,
      { continued: true }
    );
  doc.fillColor(linkColor).text("Project Link", {
    link: "https://github.com/Harsimar-Sahota/northwind-sql-business-analysis",
    underline: true,
    continued: false,
  });
  doc.moveDown(0.05);
  renderBullet(
    "Analyzed end-to-end sales operations across customers, products, orders, and logistics and applied advanced SQL techniques (joins, aggregations, subqueries, CTEs) to translate sales trends."
  );

  // Project 2
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text("Retail Profitability Analysis Dashboard — ", leftMargin, doc.y, {
      continued: true,
    });
  doc.fillColor(linkColor).text("Project Link", {
    link: "https://github.com/Harsimar-Sahota/Retail-Profitability-Analysis-Dashboard",
    underline: true,
    continued: false,
  });
  doc.moveDown(0.05);
  renderBullet(
    "Built an interactive Tableau dashboard analyzing 4 years of Superstore sales data and designed drill-down and geographic mapping to identify loss-making products and present profitability recommendations."
  );

  // Project 3
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text("HR Analytics Dashboard — ", leftMargin, doc.y, { continued: true });
  doc.fillColor(linkColor).text("Project Link", {
    link: "https://github.com/Harsimar-Sahota/hr-analytics-dashboard-excel",
    underline: true,
    continued: false,
  });
  doc.moveDown(0.05);
  renderBullet(
    "Developed a self-service HR analytics dashboard in Excel analyzing workforce data for 1,470 employees and identified high-risk attrition segments to present retention strategy recommendations."
  );

  // --- EDUCATION ---
  renderSectionHeader("Education");
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text(
      "Southern Alberta Institute of Technology (SAIT), Calgary, Canada - Diploma in Software Development",
      leftMargin,
      doc.y
    );
  doc.moveDown(0.2);

  // --- SKILLS ---
  renderSectionHeader("Skills");

  function renderSkillLine(category, items) {
    doc
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .fillColor(primaryColor)
      .text(category + ": ", leftMargin, doc.y, { continued: true });
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(bodyColor)
      .text(items, { continued: false, lineGap: 1.1 });
    doc.moveDown(0.12);
  }

  renderSkillLine(
    "Business Analysis & Agile",
    "Requirements Elicitation, Stakeholder Analysis, User Stories & Acceptance Criteria, BRD/FRD Documentation, Process Mapping (BPMN 2.0 / Swimlanes), Gap Analysis, Current/Future-State Modeling, UAT Coordination, Requirements Traceability (RTM), SDLC, Agile & Scrum"
  );
  renderSkillLine(
    "Systems, BI & Data",
    "Jira, Confluence, Visio, Lucidchart, Azure DevOps, SQL, Tableau, Power BI, Advanced Excel"
  );
  renderSkillLine(
    "AI & Workflow Automation",
    "Prompt Engineering, Workflow Automation, Microsoft Copilot, ChatGPT, Claude, Perplexity"
  );

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
  });
}

const targetPath = path.join(
  __dirname,
  "../public/HarsimarSahota_BusinessAnalyst_Resume.pdf"
);
console.log("Generating PDF at:", targetPath);

generateResumePDF(targetPath)
  .then(() => {
    console.log("PDF generation successful!");
  })
  .catch((err) => {
    console.error("PDF generation failed:", err);
    process.exit(1);
  });
