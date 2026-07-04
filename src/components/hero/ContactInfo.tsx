import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactInfo() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <MdEmail className="mb-2 text-2xl text-teal-600" />
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold">aparna@email.com</p>
      </div>

      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <MdPhone className="mb-2 text-2xl text-teal-600" />
        <p className="text-sm text-gray-500">Phone</p>
        <p className="font-semibold">+91 XXXXX XXXXX</p>
      </div>

      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <MdLocationOn className="mb-2 text-2xl text-teal-600" />
        <p className="text-sm text-gray-500">Location</p>
        <p className="font-semibold">Bangalore, India</p>
      </div>
    </div>
  );
}