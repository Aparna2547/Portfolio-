import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-between gap-20 px-8 py-16">
      <div className="flex flex-1 justify-center">
        <ProfileImage />
      </div>

      <div className="flex-1">
        <HeroContent />
      </div>
    </section>
  );
}