import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-500 blur-2xl opacity-20"></div>

      <Image
        src="/profile.jpg"
        alt="Aparna"
        width={450}
        height={550}
        priority
        className="relative rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
}