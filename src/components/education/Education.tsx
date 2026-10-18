"use client";

import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          badge="Education"
          title="Academic Background"
          subtitle="Building a strong foundation in computer science and software engineering."
        />

        <AnimatedSection animation="fade-in-up">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <GraduationCap className="h-7 w-7 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">Bachelor of Engineering</h3>
                <p className="mt-1 text-base font-semibold text-blue-600">Computer Science</p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Graduated with a strong foundation in software engineering, data structures,
                  algorithms, and web development. Gained hands-on experience through
                  academic projects and internships.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Web Development", "Software Engineering"].map(
                    (subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-gray-100 px-3.5 py-1 text-xs font-medium text-gray-700"
                      >
                        {subject}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}