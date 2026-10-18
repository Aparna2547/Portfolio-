"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="#home"
            className="text-2xl font-bold text-slate-900"
          >
            Aparna T
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="/Aparna_T.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-foreground p-2"
          >
            <AiOutlineMenu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-slate-900"
            >
              Aparna T
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <AiOutlineClose size={24} className="text-slate-900" />
            </button>
          </div>

          <div className="px-6 pt-8 flex flex-col">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <a
              href="/Aparna_T.pdf"
              download
              className="mt-10 flex items-center justify-center gap-2 w-full rounded-lg bg-slate-900 py-3.5 text-white font-medium transition hover:bg-slate-800"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}