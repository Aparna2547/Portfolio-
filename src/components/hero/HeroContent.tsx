import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-teal-600 font-semibold">
        Hello, I'm
      </p>

      <h1 className="text-5xl font-bold leading-tight md:text-6xl text-slate-900">
        Aparna T
      </h1>

      <h2 className="text-2xl font-semibold text-gray-600 md:text-3xl">
        Full Stack Software Engineer
      </h2>

      <h4 className="text-lg font-semibold text-gray-600 md:text-xl">
        React • Next.js • Node.js • TypeScript • PostgreSQL • MongoDB
      </h4>

      <p className="max-w-xl text-gray-600 leading-8">
        Full-stack Software Engineer with 3+ years of experience building scalable web
        applications using React, Node.js, TypeScript, and MongoDB. Skilled in REST API
        development, responsive UI design, and cloud deployments on AWS and GCP. Collaborative
        team player with a consistent record of shipping clean, maintainable code.
      </p>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800 shadow-sm"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg border border-slate-900 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          Get In Touch
        </a>
      </div>

      <SocialLinks />
    </div>
  );
}