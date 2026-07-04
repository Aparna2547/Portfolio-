import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-16 lg:gap-20">
      <div className="flex-1 text-center md:text-left">
        <HeroContent />
      </div>
      <div className="flex flex-1 justify-center md:justify-end">
        <ProfileImage />
      </div>
    </section>
  );
}