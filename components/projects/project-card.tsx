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

interface ProjectCardProps {
    project: Project;
    handleClick: (project: Project) => void
}
  
const ProjectCard: FC<ProjectCardProps> = ({ project, handleClick }: ProjectCardProps) => {
    const onSelect = useCallback(()=>{
        handleClick(project)
    }, [handleClick, project])
    // Memoized component
    const content = useMemo(() => (
        <Card onClick={onSelect} className="rounded-xl my-2 w-full lg:w-80 hover:cursor-pointer hover:shadow-outer">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        {project.name}    
                        <ProjectAvatar icon={project.icon}/> 
                    </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter />
        </Card>
    ), [project, onSelect]);

    return (content);
};

export default memo(ProjectCard);