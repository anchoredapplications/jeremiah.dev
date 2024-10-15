import { Project } from "@/types/project";
import Image from "next/image";
import { memo, useMemo, FC } from "react"

interface ProjectViewerProps {
    project?: Project;
}
  
const ProjectViewer: FC<ProjectViewerProps> = ({ project }: ProjectViewerProps) => {
    const display = useMemo(() => {
        if (project?.demo) {
            return (
                <iframe src={project?.link?.href} className="rounded-md w-full h-full"/>
            )
        } else if (project?.image) {
            return (
                <Image src={project?.image} alt={project.name} width={100} height={100}  className="rounded-md w-full h-full"/>
            ) 
        }
    }, [project]);
    // Memoized component
    const content = useMemo(() => (
        <div className="flex-1 hidden pt-4 w-full h-screen gap-4 flex-col md:flex">
            {display}
            <h1 className="text-4xl font-tight">{project?.name}</h1>
            <div className="h-full w-full">
                {project?.description}
            </div>
        </div>
    ), [project, display]);

    return (content);
};

export default memo(ProjectViewer);