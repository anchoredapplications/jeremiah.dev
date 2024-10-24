import { InternalGithubProject } from "@/types/github"
import { Languages } from "@/types/languages"
import { Project } from "@/types/project"

export function parseLanguages(languages?: Languages): Languages {
    if (!languages) return {};
    const totalBytes = Object.values(languages).reduce((acc, bytes)=>acc+=bytes, 0)
    const parsedLanguage: Languages = {}
    Object.entries(languages).forEach(([key, value]) => {
        const newValue = Math.round((value*1000/totalBytes))/10
        if (newValue > 0) parsedLanguage[key]=newValue
    })
    
    return parsedLanguage
}

export function parseProject(project: InternalGithubProject): Project {
    const parsedProject: Project = {
        name: project.name,
        description: project.description ?? "",
        summary: project.description ?? "",
        icon: project.image ? { src: project.image, alt:project.name.split("-").map(e=>e[0].toUpperCase()).join("")} : undefined,
        private: project.private,
        link: { href: project.html_url, label: ""},
        demo: project.homepage ? { href: project.homepage, label: ""} : undefined,
        image: project.owner?.avatar_url,
        topics: project.topics,
        languages: parseLanguages(project.languages)
    }
    return parsedProject
}

export function parseProjects(projects: InternalGithubProject[]): Project[] {
    return projects.map(parseProject)
}