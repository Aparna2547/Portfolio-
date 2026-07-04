import Link from "next/link";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-teal-600 font-semibold">
        Hello, I'm
      </p>

      <h1 className="text-6xl font-bold leading-tight">
        Aparna Patil
      </h1>

      <h2 className="text-3xl font-semibold text-gray-600">
        MERN Stack Developer
      </h2>

      <p className="max-w-xl text-gray-500 leading-8">
        Passionate Full Stack Developer with experience in React, Next.js,
        Node.js, Express, MongoDB, and DevOps fundamentals. I enjoy building
        scalable web applications and learning modern technologies.
      </p>

      <div className="flex gap-4">
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