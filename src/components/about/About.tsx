export default function About() {
    return (
        <section
            id="about"
            className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20"
        >
            <div className="text-center md:text-left">
                <p className="text-blue-600 font-semibold">ABOUT ME</p>

                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                    Who I Am
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                    I'm a Full Stack Software Engineer with over 2 years of professional experience developing scalable web applications using React, Next.js, Angular, Node.js, Express, MongoDB, and TypeScript.

                    I've worked on healthcare and education platforms, contributing to frontend development, backend APIs, cloud deployments, payment integrations, and real-time communication.

                    I enjoy solving complex problems, building clean user interfaces, and continuously learning modern technologies.
                </p>
            </div>
        </section>
    );
}