import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 pt-8">
      <a href="https://github.com/Aparna2547" >
        <FaGithub className="text-3xl hover:text-teal-600" />
      </a>

      <a href="https://www.linkedin.com/in/aparna-manikandan-a46986245/" >
        <FaLinkedin className="text-3xl hover:text-teal-600" />
      </a>

      <a href="https://api.whatsapp.com/send/?phone=%2B917736982547&text=Hello+Aparna" >
        <FaWhatsapp className="text-3xl hover:text-teal-600" />
      </a>
    </div>
  );
}