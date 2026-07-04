import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 pt-8">
      <a href="https://github.com" target="_blank">
        <FaGithub className="text-3xl hover:text-teal-600" />
      </a>

      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin className="text-3xl hover:text-teal-600" />
      </a>

      <a href="https://instagram.com" target="_blank">
        <FaInstagram className="text-3xl hover:text-teal-600" />
      </a>
    </div>
  );
}