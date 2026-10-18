"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Projects"
          title="Featured Projects"
          subtitle="A selection of projects I've built, from healthcare platforms to e-commerce solutions."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-in-up"
              delay={index * 100}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}