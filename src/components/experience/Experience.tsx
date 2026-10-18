"use client";

import { Calendar, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const experiences = [
  {
    company: "Appzoy Technologies",
    role: "Software Engineer",
    duration: "Dec 2024 - Present",
    description: [
      "Developed and maintained full-stack features using React, Node.js, Express, and MongoDB within a team of 8+ engineers, contributing to both UI and API layers.",
      "Built secure, responsive UI screens using React, HTML, CSS, and Reactstrap/Bootstrap, improving cross-device consistency across all major browsers.",
      "Contributed to REST API development and performance improvements, reducing response times for key endpoints.",
      "Collaborated with backend and QA teams in Agile sprints to ensure smooth feature releases and timely bug resolution.",
      "Utilized Git, Docker, and Agile workflows to maintain code quality and streamline deployment pipelines.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "GCP",
      "REST API",
      "Git",
      "Reactstrap",
      "Docker",
      "Bitbucket",
    ],
  },
  {
    company: "Eduvy Technologies",
    role: "Junior Software Developer",
    duration: "Jun 2024 - Dec 2024",
    description: [
      "Independently built 2 backend services and 1 frontend application from scratch using Node.js, Express.js, Angular.js, and MongoDB, owning the complete development lifecycle from design to deployment.",
      "Designed and implemented RESTful APIs for two core backend services, enabling real-time data flow and seamless integration with the frontend layer.",
      "Collaborated with development and QA teams in bi-weekly Agile sprints to deliver features on schedule and reduce post-release bugs.",
      "Participated in requirement gathering sessions and translated business requirements into clear technical deliverables and system designs.",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Git",
      "GitLab",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          badge="Experience"
          title="My Professional Journey"
          subtitle="Over the past two years, I've worked on real-world healthcare and education platforms, building scalable full-stack applications using modern technologies."
        />

        {/* Timeline */}
        <div className="relative mt-12 space-y-10">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-blue-500 md:left-[23px]" />

          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.company}
              animation="fade-in-up"
              delay={index * 150}
            >
              <div className="relative flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-md md:h-12 md:w-12">
                    <Briefcase className="h-4 w-4 text-white md:h-5 md:w-5" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl md:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold md:text-2xl text-slate-900">{exp.role}</h3>
                      <p className="mt-1 font-bold text-blue-500">{exp.company}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-3 text-sm text-gray-600 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}