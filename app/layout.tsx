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
      "Harsimarpreet Singh Sahota | Business Analyst Portfolio — Canada",
    template: "%s | Harsimarpreet Singh Sahota",
  },
  description:
    "Entry-level Business Analyst portfolio of Harsimarpreet Singh Sahota (Calgary, Canada). Requirements analysis, stakeholder management, SQL, Tableau, Excel, Agile, UAT, and business process improvement.",
  keywords: [
    "Business Analyst",
    "Business Analyst Portfolio",
    "Harsimar.ba",
    "Harsimar BA",
    "Entry Level Business Analyst",
    "Business Analyst Canada",
    "Business Intelligence",
    "Requirements Analysis",
    "SQL",
    "Tableau",
    "Excel",
    "Data Analysis",
    "Agile",
    "Stakeholder Management",
    "Business Process Improvement",
    "UAT",
    "Calgary Business Analyst",
  ],
  authors: [{ name: "Harsimarpreet Singh Sahota" }],
  creator: "Harsimarpreet Singh Sahota",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Harsimarpreet Singh Sahota — Business Analyst",
    title:
      "Harsimarpreet Singh Sahota | Business Analyst Portfolio — Canada",
    description:
      "Business Analyst with experience in requirements gathering, UAT, SQL, Tableau, Excel, and Agile delivery. Open to opportunities across Canada.",
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
      "Harsimarpreet Singh Sahota | Business Analyst Portfolio — Canada",
    description:
      "Requirements analysis, stakeholder collaboration, SQL, Tableau, Excel, and process improvement. Entry-level BA opportunities across Canada.",
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
  alternateName: ["Harsimar.ba", "Harsimar BA"],
  jobTitle: "Business Analyst",
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
    "Requirements Gathering",
    "Stakeholder Management",
    "SQL",
    "Tableau",
    "Microsoft Excel",
    "Agile",
    "Business Intelligence",
    "Process Improvement",
    "UAT",
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
