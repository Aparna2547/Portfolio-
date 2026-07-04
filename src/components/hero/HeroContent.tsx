import Link from "next/link";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-teal-600 font-semibold">
        Hello, I'm
      </p>

      <h1 className="text-5xl font-bold leading-tight md:text-6xl">
        Aparna T
      </h1>

      <h2 className="text-2xl font-semibold text-gray-600 md:text-3xl">
       Full Stack Software Engineer
      </h2>

      <h4 className="text-lg font-semibold text-gray-600 md:text-xl">React • Next.js • Node.js • TypeScript • MongoDB</h4>

      <p className="max-w-xl text-gray-500 leading-8">
       Full Stack Software Engineer with 2+ years of experience building scalable web applications across healthcare and education domains. Experienced in React, Next.js, Node.js, Express, MongoDB, TypeScript, AWS, and GCP with a passion for building clean, responsive applications.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/projects"
          className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          download
          className="rounded-lg border border-black px-6 py-3 transition hover:bg-black hover:text-white"
        >
          Download Resume
        </a>
      </div>
          {/* Add ContactInfo here */}
      <ContactInfo />
      <SocialLinks />
    </div>
  );
}