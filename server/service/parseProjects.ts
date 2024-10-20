import { GithubRepository } from "@/types/github"
import { Project } from "@/types/project"

export function parseProject(project: GithubRepository): Project {
    const parsedProject: Project = {
        name: project.name,
        description: project.description ?? "",
        summary: project.description ?? "",
        icon: { src: `${project.html_url}/blob/master/thumbnail.png?raw=true`, alt:project.name.split("-").map(e=>e[0].toUpperCase()).join("")} ,
        link: { href: project.html_url, label: ""},
        demo: project.homepage ? { href: project.homepage, label: ""} : undefined,
        image: project.owner.avatar_url,
    }
    return parsedProject
}

export function parseProjects(projects: GithubRepository[]): Project[] {
    return projects.map(parseProject)
}