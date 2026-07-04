const experiences = [
  {
    company: "Appzoy Technologies",
    role: "Software Engineer",
    duration: "Dec 2024 - Present",
    description:
      "Developing scalable healthcare applications using React, Node.js, Express.js and MongoDB. Built REST APIs, integrated payment gateways, implemented Server-Sent Events (SSE), QR check-in, wallet modules and deployed applications on GCP.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "GCP",
      "REST API",
      "Git",
    ],
  },
  {
    company: "Eduvy Technologies",
    role: "Junior Software Developer",
    duration: "Jun 2024 - Dec 2024",
    description:
      "Developed and maintained educational web applications using Angular and Node.js. Worked on responsive UI development, backend APIs, bug fixing and feature enhancements while collaborating in Agile sprints.",
    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
          Experience
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          My Professional Journey
        </h2>

        <p className="mt-5 max-w-3xl text-gray-600 leading-8">
          Over the past two years, I've worked on real-world
          healthcare and education platforms, building scalable
          full-stack applications using modern technologies.
        </p>

        {/* Timeline */}

        <div className="relative mt-16 border-l-2 border-blue-500 pl-6 md:pl-8">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative mb-14"
            >

              {/* Circle */}

              <span className="absolute -left-[39px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 md:-left-[42px]"></span>

              {/* Card */}

              <div className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

                <p className="text-sm font-medium text-blue-600">
                  {exp.duration}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="mt-1 font-medium text-gray-500">
                  {exp.company}
                </p>

                <p className="mt-6 leading-8 text-gray-600">
                  {exp.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
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