"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold text-slate-900"
          >
            Aparna T
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/Aparna_T.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-slate-900"
          >
            <AiOutlineMenu size={30} />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Background Blur */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-white/70 backdrop-blur-md"
        />

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="absolute left-6 top-6 text-2xl font-bold text-slate-900 z-20"
        >
          Aparna T
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-6 top-6 z-20"
        >
          <AiOutlineClose
            size={34}
            className="text-slate-900"
          />
        </button>

        {/* Sidebar */}
        <aside
          className={`absolute right-0 top-0 h-full w-[320px] bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="pt-24 px-8 flex flex-col h-full">
            {/* Links */}
            <div className="flex flex-col gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[20px] font-medium text-slate-900 hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-16">
              <a
                href="/Aparna_T.pdf"
                download
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-slate-900 py-4 text-white font-medium hover:bg-slate-800 transition"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}