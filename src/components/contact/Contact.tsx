"use client";

import { useState } from "react";
import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Contact Info */}
          <AnimatedSection
            className="md:col-span-2"
            animation="slide-in-left"
          >
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                Feel free to reach out through the form or connect with me directly via email or social media.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:manikandanaparna18@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-400 hover:shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <MdEmail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-slate-900">manikandanaparna18@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <MdLocationOn className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium text-slate-900">Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-medium text-gray-600 mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/Aparna2547", icon: FaGithub, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/aparna-manikandan-a46986245/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://api.whatsapp.com/send/?phone=%2B917736982547&text=Hello+Aparna", icon: FaWhatsapp, label: "WhatsApp" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-teal-500 hover:text-teal-600 hover:shadow"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection
            className="md:col-span-3"
            animation="slide-in-right"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-600">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-600">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MdSend className="h-4 w-4" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status === "success" && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm text-green-600 border border-green-200">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 border border-red-200">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}