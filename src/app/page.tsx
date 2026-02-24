import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
