import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback, useEffect } from "react"
import { Skeleton } from "../ui/skeleton";
import { twMerge } from "tailwind-merge";

interface ProjectDisplayProps {
    project?: Project;
}
  
const ProjectDisplay: FC<ProjectDisplayProps> = ({ project }: ProjectDisplayProps) => {
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
                <div className="w-full h-full rounded-md shadow-inner border">
                    { frameIsLoading && (<Skeleton className="w-full h-full rounded-md " />) }
                    <iframe onLoad={handleLoadFrame} src={project?.demo?.href} className={twMerge("w-full h-full rounded-md", frameIsLoading ? "hidden" : "")}/>
                </div>
            )
        } else {
            return (
                <h1 className="w-full h-full flex justify-center items-center bg-dashboard-header text-4xl font-extrabold font-mono text-dashboard rounded-md shadow-inner">{ $t.projects.placeholder }</h1>
            ) 
        }
    }, [project, $t, frameIsLoading, handleLoadFrame]);

    return (display);
};

export default memo(ProjectDisplay);