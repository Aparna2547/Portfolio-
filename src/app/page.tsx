import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}