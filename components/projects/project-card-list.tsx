import { Project } from "@/types/project";
import { memo, useMemo, FC } from "react"
import ProjectCard from "./project-card";
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProjectCardProps {
    projects: Project[];
    handleClick: (project: Project) => void
}
  
const ProjectCardList: FC<ProjectCardProps> = ({ projects, handleClick}: ProjectCardProps) => {
    // Memoized component
    const content = useMemo(() => (
        <ScrollArea className="h-full w-full flex flex-col px-2">
            {projects.map((project: Project) => (<ProjectCard  key={project.name} handleClick={handleClick} project={project} />))}
        </ScrollArea>
    ), [projects, handleClick]);

    return (content);
};

export default memo(ProjectCardList);