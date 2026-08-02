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
    default: "Harsimar Sahota | Business Analyst Portfolio",
    template: "%s | Harsimar Sahota",
  },
  description:
    "Business Analyst portfolio of Harsimar Sahota showcasing projects, experience, data analysis, and official recognition by SAIT.",
  keywords: [
    "Business Analyst",
    "Business Analyst Portfolio",
    "Harsimar Sahota",
    "Harsimar.ba",
    "Business Analyst Canada",
    "Data Analysis",
    "SAIT",
  ],
  authors: [{ name: "Harsimarpreet Singh Sahota" }],
  creator: "Harsimarpreet Singh Sahota",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Harsimar Sahota — Business Analyst",
    title: "Harsimar Sahota | Business Analyst Portfolio",
    description:
      "Business Analyst portfolio of Harsimar Sahota showcasing projects, experience, data analysis, and official recognition by SAIT.",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Harsimar Sahota — Business Analyst",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Harsimar Sahota | Business Analyst Portfolio",
    description:
      "Business Analyst portfolio of Harsimar Sahota showcasing projects, experience, data analysis, and official recognition by SAIT.",
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
    "Business Analyst portfolio of Harsimar Sahota showcasing projects, experience, data analysis, and official recognition by SAIT.",
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
