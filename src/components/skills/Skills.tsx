"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Dart"],
  },
  {
    title: "Front-End",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Reactstrap",
    ],
  },
  {
    title: "Back-End",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "REST API",
      "JWT",
      "Socket.IO",
      "Firebase Auth",
      "MVC",
      "Clean Architecture",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "AWS EC2",
      "AWS S3",
      "GCP VM",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket",
      "GitLab",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Postman", "Hoppscotch", "VS Code", "Jira", "Agile", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Technical Skills"
          title="Technologies I Work With"
          subtitle="From frontend development to backend services, databases, cloud and DevOps."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}