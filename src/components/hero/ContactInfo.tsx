import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

      {/* Email */}
      <div className="flex items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          <MdEmail className="text-gray-600" />
        </div>
        <p className="font-medium break-all">
          manikandanaparna18@gmail.com
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          <MdPhone className="text-gray-600" />
        </div>
        <p className="font-medium">+91 7736982547</p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 rounded-full border bg-white px-5 py-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          <MdLocationOn className="text-gray-600" />
        </div>
        <p className="font-medium">Bangalore, India</p>
      </div>

    </div>
  );
}