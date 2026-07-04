import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-500 blur-2xl opacity-20"></div>

      <Image
        src="/profile.jpg"
        alt="Aparna"
        width={200}
        height={200}
        priority
        className="relative h-60 w-60 rounded-full object-cover shadow-2xl md:h-[500px] md:w-[450px]"
      />
    </div>
  );
}