import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <h2 className="text-2xl font-bold">
        {project.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}