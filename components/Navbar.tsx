"use client";

import { useEffect, useState, MouseEvent } from "react";
import { Menu, X, Coffee } from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="font-bold text-xl text-white tracking-tight"
            >
              Harsimar<span className="text-accent-400">.dev</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://calendly.com/harsimarsahota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-slate-900 bg-accent-400 hover:bg-accent-500 transition-all transform hover:scale-105 shadow-lg shadow-accent-400/20"
            >
              <Coffee className="w-4 h-4 mr-2" />
              Book Chat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="https://calendly.com/harsimarsahota"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-accent-400 hover:bg-accent-500"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Book a Coffee Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
