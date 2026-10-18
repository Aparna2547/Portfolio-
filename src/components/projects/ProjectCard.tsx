import { Project } from "@/types/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
      {/* Title */}
      <h2 className="text-xl font-bold leading-snug text-slate-900 md:text-2xl">
        {project.title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3.5 py-1 text-xs font-medium text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex items-center gap-5 border-t border-gray-100 pt-5">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            <FaGithub className="h-4 w-4" />
            Source Code
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {(!project.github || project.github === "#") &&
          (!project.live || project.live === "#") && (
            <span className="text-xs text-gray-400 italic">
              Private / Internal Project
            </span>
          )}
      </div>
    </div>
  );
}