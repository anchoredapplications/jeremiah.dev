import Menu from "@/components/menu";
import ThemeToggle from "@/components/theme-toggle";
import Academics from "@/views/academics";
import Career from "@/views/career";
import Home from "@/views/home";
import Projects from "@/views/projects";
import Skills from "@/views/skills";

export default function Page() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <span className="z-50">
        <Menu/>
        <ThemeToggle className="absolute top-0 right-0"/>
      </span>
      {/* Sections */}
      <Home />
      <Career />
      <Academics />
      <Skills />
      <Projects />
    </main>
  );
}
