import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built using Next.js, TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
    image: "/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Hospital Management",
    description:
      "Full stack hospital management application built with MERN.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/projects/hospital.png",
  },
];