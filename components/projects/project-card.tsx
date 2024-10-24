import { Project } from "@/types/project";
import { memo, useMemo, FC, useCallback } from "react"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ProjectAvatar from "./project-avatar";
import HoverBadgeList from "../shared/hover-badge-list";

interface ProjectCardProps {
    project: Project;
    handleClick: (project: Project) => void
}
  
const ProjectCard: FC<ProjectCardProps> = ({ project, handleClick }: ProjectCardProps) => {
    const badges = project.topics?.map(el =>({ subtitle: el}))

    const onSelect = useCallback(()=>{
        handleClick(project)
    }, [handleClick, project])

    // Memoized component
    const content = useMemo(() => (
        <Card onClick={onSelect} className="rounded-xl my-4 w-full hover:cursor-pointer hover:shadow-outer">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between tracking-tight font-mono gap-2">
                        {project.name}    
                        <ProjectAvatar icon={project.icon}/> 
                    </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <HoverBadgeList badges={badges}/>
            </CardHeader>
            <CardFooter />
        </Card>
    ), [project, onSelect, badges]);

    return (content);
};

export default memo(ProjectCard);