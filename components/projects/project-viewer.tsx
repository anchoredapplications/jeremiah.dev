import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import Image from "next/image";
import { memo, useMemo, FC, useState, useCallback, useEffect } from "react"
import { Skeleton } from "../ui/skeleton";
import { twMerge } from "tailwind-merge";

interface ProjectViewerProps {
    project?: Project;
}
  
const ProjectViewer: FC<ProjectViewerProps> = ({ project }: ProjectViewerProps) => {
    const [frameIsLoading, setIsFrameLoading] = useState<boolean>(true)
    const $t = getDictionary();
    
    const handleLoadFrame = useCallback(()=>{ 
        setIsFrameLoading(false) 
    }, [setIsFrameLoading])

    // Reset loading state when project changes
    useEffect(() => {
        setIsFrameLoading(true);
    }, [project]);


    const display = useMemo(() => {
        
        if (project?.demo) { 
            return (
                <div className="w-full h-full rounded-md">
                    { frameIsLoading && (<Skeleton className="w-full h-full rounded-md " />) }
                    <iframe onLoad={handleLoadFrame} src={project?.demo?.href} className={twMerge("w-full h-full rounded-md", frameIsLoading ? "w-full h-full" : "")}/>
                </div>
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
    }, [project, $t, frameIsLoading, handleLoadFrame]);

    // Memoized component
    const content = useMemo(() => (
        <div className="max-h-dashboard-content flex-1 flex py-2 w-full gap-4 flex-col xl:flex-row ">
            <div className="h-3/4 rounded-md w-full shadow-inner bg-dashboard-header flex items-center justify-center xl:h-full">
                {display}
            </div>
            <div className="w-full p-2 flex flex-col gap-4 xl:w-1/3">
                <h1 className="text-4xl font-tight font-serif">{project?.name}</h1>
                <div className="h-full w-full">
                    {project?.description}
                </div>
            </div>
        </div>
    ), [project, display]);

    return (content);
};

export default memo(ProjectViewer);