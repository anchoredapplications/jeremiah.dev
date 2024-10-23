import { InternalGithubProject } from "@/types/github"
import { Project } from "@/types/project"

export function parseProject(project: InternalGithubProject): Project {
    const parsedProject: Project = {
        name: project.name,
        description: project.description ?? "",
        summary: project.description ?? "",
        icon: project.image ? { src: project.image, alt:project.name.split("-").map(e=>e[0].toUpperCase()).join("")} : undefined,
        link: { href: project.html_url, label: ""},
        demo: project.homepage ? { href: project.homepage, label: ""} : undefined,
        image: project.owner?.avatar_url,
    }
    return parsedProject
}

export function parseProjects(projects: InternalGithubProject[]): Project[] {
    return projects.map(parseProject)
}