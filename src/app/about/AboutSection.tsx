export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <h1 className="text-5xl font-bold">
        About Me
      </h1>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        I'm Aparna, a Full Stack Developer specializing in
        React, Next.js, Node.js, Express, MongoDB,
        and modern web technologies.

        I enjoy solving real-world problems,
        building scalable applications,
        and continuously learning new technologies.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8">

        <div className="rounded-xl border p-6">
          <h2 className="text-2xl font-semibold">
            Experience
          </h2>

          <p className="mt-3 text-gray-500">
            MERN Stack Developer
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-2xl font-semibold">
            Location
          </h2>

          <p className="mt-3 text-gray-500">
            Bangalore, India
          </p>
        </div>

      </div>
    </section>
  );
}