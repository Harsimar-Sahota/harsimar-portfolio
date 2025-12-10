import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Harsimarpreet Singh Sahota | Software Developer in Alberta",
  description:
    "Portfolio of Harsimarpreet Singh Sahota, a Software / Full-Stack Developer based in Alberta, Canada. Built with Next.js, TypeScript, and Tailwind CSS. Specializing in AI-powered full-stack apps, CI/CD, and modern web tooling."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
