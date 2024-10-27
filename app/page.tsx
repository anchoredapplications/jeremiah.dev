import Academics from "@/views/academics";
import Career from "@/views/career";
import Home from "@/views/home";
import Projects from "@/views/projects";
import Contact from "@/views/contact";
import Footer from "@/views/footer";
import Controls from "@/views/controls";
import { getDictionary } from "@/dictionaries";

export default function Page() {
  const $t = getDictionary()
  // Note to developers. 
  console.log($t.dev)

  return (
    <main className="w-full flex min-h-screen flex-col">
      <Controls />
      {/* Sections */}
      <Home />
      <Career />
      <Academics />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
