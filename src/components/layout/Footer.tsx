import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-xl font-bold text-slate-900">
              Aparna T
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Full Stack Software Engineer
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { href: "https://github.com/Aparna2547", icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/aparna-manikandan-a46986245/", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://api.whatsapp.com/send/?phone=%2B917736982547&text=Hello+Aparna", icon: FaWhatsapp, label: "WhatsApp" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all hover:border-teal-500 hover:text-teal-600 shadow-sm"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aparna T. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}