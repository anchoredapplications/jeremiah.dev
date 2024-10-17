import { Project } from "@/types/project";
import { memo, useMemo, FC } from "react"
import ProjectCard from "./project-card";
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProjectCardProps {
    projects: Project[];
    handleClick: (project: Project) => void
}
  
const ProjectCardList: FC<ProjectCardProps> = ({ projects, handleClick }: ProjectCardProps) => {
    // Memoized component
    const content = useMemo(() => (
        <ScrollArea className="max-h-page-content min-w-fit w-full flex flex-col px-2 pb-12 lg:w-fit">
            {projects.map((project: Project) => (<ProjectCard handleClick={handleClick} key={project.name} project={project} />))}
        </ScrollArea>
    ), [projects]);

    return (content);
};

export default memo(ProjectCardList);