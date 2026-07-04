const skillCategories = [
  {
    id: 1,
    title: "Languages",
    color: "from-sky-500 to-blue-500",
    skills: ["JavaScript", "TypeScript","Dart"],
  },
  {
    id: 2,
    title: "Front-End",
    color: "from-purple-500 to-pink-500",
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
    id: 3,
    title: "Back-End",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Socket.IO",
      "Firebase Auth",
      "MVC",
      "Clean Architecture",
    ],
  },
  {
    id: 4,
    title: "Databases",
    color: "from-orange-500 to-amber-500",
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    color: "from-red-500 to-pink-500",
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
    id: 6,
    title: "Tools",
    color: "from-cyan-500 to-teal-500",
    skills: [
      "Postman",
      "Hoppscotch",
      "VS Code",
      "Jira",
      "Agile",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium">
            Technical Skills
          </span>

        

 <div className="flex justify-center   font-bold md:text-5xl items-center w-full py-3">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                          Technologies I Work With
                    </p>
                </div>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            From frontend development to backend services,
            databases, cloud and DevOps.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (

            <div
              key={category.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${category.color} text-white font-bold`}
              >
                {category.id}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-blue-100 hover:text-blue-700"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}