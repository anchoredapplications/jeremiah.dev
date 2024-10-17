import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import Image from "next/image";
import { memo, useMemo, FC } from "react"

interface ProjectViewerProps {
    project?: Project;
}
  
const ProjectViewer: FC<ProjectViewerProps> = ({ project }: ProjectViewerProps) => {
    const $t = getDictionary();

    const display = useMemo(() => {
        if (project?.demo) {
            return (
                <iframe src={project?.link?.href} className="rounded-md w-full h-full"/>
            )
        } else if (project?.image) {
            return (
                <Image src={project?.image} alt={project.name} width={100} height={100}  className="m-4 rounded-md w-full h-full"/>
            ) 
        } else {
            return (
                <h1 className="text-4xl font-extrabold font-mono text-dashboard text-center">{ $t.projects.placeholder }</h1>
            ) 
        }
    }, [project, $t]);
    // Memoized component
    const content = useMemo(() => (
        <div className="flex-1 flex pt-4 w-full h-screen gap-4 flex-col">
            <div className="rounded-md w-full h-full shadow-inner bg-dashboard-header flex items-center justify-center">
                {display}
            </div>
            <h1 className="text-4xl font-tight">{project?.name}</h1>
            <div className="h-full w-full">
                {project?.description}
            </div>
        </div>
    ), [project, display]);

    return (content);
};

export default memo(ProjectViewer);