import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/Aparna2547",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/aparna-manikandan-a46986245/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=%2B917736982547&text=Hello+Aparna",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 pt-4 justify-center md:justify-start">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-teal-500 hover:text-teal-600 hover:shadow"
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}