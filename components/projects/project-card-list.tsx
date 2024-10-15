import { Project } from "@/types/project";
import { memo, useMemo, FC } from "react"
import ProjectCard from "./project-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ProjectCardProps {
    projects: Project[];
    handleClick: (project: Project) => void
}
  
const ProjectCardList: FC<ProjectCardProps> = ({ projects, handleClick }: ProjectCardProps) => {
    // Memoized component
    const content = useMemo(() => (
        <ScrollArea className="max-h-page-content min-w-fit flex flex-col px-4 pb-12">
            {projects.map((project: Project) => (<ProjectCard handleClick={handleClick} key={project.name} project={project} />))}
        </ScrollArea>
    ), [projects]);

    return (content);
};

export default memo(ProjectCardList);