import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <div className="flex justify-center items-center w-full py-3">
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                        Projects
                    </span>
                </div>

                <div className="flex justify-center   font-bold md:text-5xl items-center w-full py-3">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                         Featured Projects
                    </p>
                </div>


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