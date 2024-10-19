import PageSection from "@/components/page/page-section";
import { PageSectionVariant } from '@/types/page';
import PageSectionHeader from "@/components/page/page-section-header";
import { getDictionary } from '@/dictionaries';
import PageSectionContent from "@/components/page/page-section-content";
import { Project } from "@/types/project";
import ProjectDashboard from "@/components/projects/project-dashboard";
import config from "@/config.json";

function getProjectTestData(): Project[] {
  return [
      {
          name: "Weather App",
          description: "A web application that provides real-time weather updates.",
          summary: "Get accurate and up-to-date weather information based on your location.",
          icon: { src: "/next.svg", alt: "Next.js Icon" },  // Assigned next.svg
          link: { href: "https://www.weather.com", label: "View Project" },
          image: "/next.svg"
      },
      {
          name: "Portfolio",
          description: "An intuitive task management tool to help you stay organized.",
          summary: "Create, manage, and prioritize your tasks effortlessly.",
          icon: { src: "/vercel.svg", alt: "Vercel Icon" },  // Assigned vercel.svg
          link: { href: "https://www.jeremiah.dev", label: "View Project" },
          demo: { href: "https://www.jeremiah.dev", label: "View Project" }
      },
      {
          name: "Portfolio Website",
          description: "A personal portfolio site to showcase my work and projects.",
          summary: "Highlighting my skills, projects, and experiences.",
          icon: { src: "/next.svg", alt: "Next.js Icon" },  // Assigned next.svg
          link: { href: "https://myportfolio.example.com", label: "View Project" }
      },
      {
          name: "E-Commerce Platform",
          description: "A robust platform for buying and selling products online.",
          summary: "Connecting buyers and sellers in a seamless online marketplace.",
          icon: { src: "/vercel.svg", alt: "Vercel Icon" },  // Assigned vercel.svg
          link: { href: "https://ecommerce.example.com", label: "View Project" }
      },
      {
          name: "Blogging Platform",
          description: "A simple blogging platform for sharing thoughts and ideas.",
          summary: "Write, publish, and share your blog posts with the world.",
          icon: { src: "/next.svg", alt: "Next.js Icon" },  // Assigned next.svg
          link: { href: "https://blogplatform.example.com", label: "View Project" }
      }
  ]; 
}

async function getProjectData() {
  const res = await fetch(config.api.me.academics)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default function Projects() {
  const $t = getDictionary();
  const projects = getProjectTestData()

  return (
    <PageSection id={$t.projects.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.projects.heading}</PageSectionHeader>
      <PageSectionContent>
        <ProjectDashboard projects={projects}/>
      </PageSectionContent>
    </PageSection>
  );
}
