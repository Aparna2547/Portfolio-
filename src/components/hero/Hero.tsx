import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 pb-16 md:flex-row md:gap-16 lg:gap-24"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative flex-1 text-center md:text-left">
        <HeroContent />
      </div>
      <div className="relative flex flex-1 justify-center md:justify-end">
        <ProfileImage />
      </div>
    </section>
  );
}