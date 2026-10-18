import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-500 blur-2xl opacity-20" />

      <Image
        src="/profile.jpeg"
        alt="Aparna T"
        width={400}
        height={400}
        priority
        className="relative h-60 w-60 rounded-full object-cover shadow-2xl md:h-[420px] md:w-[420px]"
      />
    </div>
  );
}