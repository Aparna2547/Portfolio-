import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <p className="text-blue-600 font-semibold">
        PROJECTS
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Featured Projects
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}