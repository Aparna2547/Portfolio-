import { Calendar } from "lucide-react";

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
            "Utilized Git, Docker, and Agile workflows to maintain code quality and streamline deployment pipelines."
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
            "Participated in requirement gathering sessions and translated business requirements into clear technical deliverables and system designs."
        ],
        technologies: [
            "Angular",
            "Node.js",
            "Express",
            "MongoDB",
            "Bootstrap",
            "Git",
            "GitLab"
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-50 py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">

                {/* Heading */}
                <div className="flex justify-center items-center w-full py-3">
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                        Experience
                    </span>
                </div>

             
                 <div className="flex justify-center   font-bold md:text-5xl items-center w-full py-3">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        My Professional Journey
                    </p>
                </div>

                <p className="mt-2 mx-auto max-w-2xl text-gray-600 leading-8">
                    Over the past two years, I've worked on real-world healthcare and
                    education platforms, building scalable full-stack applications
                    using modern technologies.
                </p>

                {/* Timeline */}
                <div className="relative mt-16 text-left border-l-2 border-blue-500 pl-8 md:pl-10">

                    {experiences.map((exp) => (
                        <div key={exp.company} className="relative mb-14 last:mb-0">

                            {/* Circle */}
                            <span className="absolute -left-[41px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow md:-left-[45px]" />

                            {/* Card */}
                            <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                        <p className="mt-1 font-bold text-blue-500">
                                            {exp.company}
                                        </p>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        {exp.duration}
                                    </div>
                                </div>

                                {/* Bullet Points */}
                                <ul className="mt-6 space-y-2 text-gray-600">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}