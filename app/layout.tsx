import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.harsimar.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Harsimarpreet Singh Sahota | Business Analyst — Data Analytics & Agile Delivery",
    template: "%s | Harsimar Sahota",
  },
  description:
    "Business Analyst portfolio of Harsimarpreet Singh Sahota — bridging business needs and technical delivery through requirements analysis, data analytics (SQL, Tableau, Excel), Agile delivery, and AI-enabled workflows.",
  keywords: [
    "Business Analyst",
    "Business Analyst Portfolio",
    "Harsimarpreet Singh Sahota",
    "Harsimar Sahota",
    "Harsimar.ba",
    "Business Analyst Canada",
    "Data Analytics",
    "Requirements Gathering",
    "Process Improvement",
    "Agile Delivery",
    "UAT",
    "SQL",
    "Tableau",
    "Power BI",
    "SAIT",
  ],
  authors: [{ name: "Harsimarpreet Singh Sahota" }],
  creator: "Harsimarpreet Singh Sahota",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Harsimarpreet Singh Sahota — Business Analyst",
    title:
      "Harsimarpreet Singh Sahota | Business Analyst — Data Analytics & Agile Delivery",
    description:
      "Business Analyst portfolio of Harsimarpreet Singh Sahota — bridging business needs and technical delivery through requirements analysis, data analytics (SQL, Tableau, Excel), Agile delivery, and AI-enabled workflows.",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Harsimarpreet Singh Sahota — Business Analyst",
      },
    ],
  },
  twitter: {
    card: "summary",
    title:
      "Harsimarpreet Singh Sahota | Business Analyst — Data Analytics & Agile Delivery",
    description:
      "Business Analyst portfolio of Harsimarpreet Singh Sahota — bridging business needs and technical delivery through requirements analysis, data analytics (SQL, Tableau, Excel), Agile delivery, and AI-enabled workflows.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsimarpreet Singh Sahota",
  alternateName: ["Harsimar Sahota", "Harsimar.ba", "Harsimar BA"],
  jobTitle: "Business Analyst",
  description:
    "Business Analyst portfolio of Harsimarpreet Singh Sahota — bridging business needs and technical delivery through requirements analysis, data analytics (SQL, Tableau, Excel), Agile delivery, and AI-enabled workflows.",
  url: siteUrl,
  email: "mailto:harsimar1288@gmail.com",
  telephone: "+1-368-299-8325",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/in/harsimar-sahota",
    "https://github.com/Harsimar-Sahota",
  ],
  knowsAbout: [
    "Business Analysis",
    "Requirements Elicitation",
    "Stakeholder Analysis",
    "User Stories & Acceptance Criteria",
    "BRD/FRD Documentation",
    "Process Mapping (BPMN 2.0)",
    "Gap Analysis",
    "Current-State/Future-State Modeling",
    "UAT Coordination",
    "Agile & Scrum",
    "SQL",
    "Tableau",
    "Power BI",
    "Advanced Excel",
    "Jira & Confluence",
    "Prompt Engineering",
    "Workflow Automation",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Southern Alberta Institute of Technology (SAIT)",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
