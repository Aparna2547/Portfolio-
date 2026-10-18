import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactInfo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <MdEmail className="h-4 w-4 text-primary" />
        <span>manikandanaparna18@gmail.com</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <MdLocationOn className="h-4 w-4 text-primary" />
        <span>Bangalore, India</span>
      </div>
    </div>
  );
}