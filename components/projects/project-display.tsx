import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback, useEffect } from "react"
import { Skeleton } from "../ui/skeleton";
import { twMerge } from "tailwind-merge";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { Button } from "../ui/button";
import ProjectDrawerButton from "./project-drawer-button";

interface ProjectDisplayProps {
    skeleton?: boolean;
    project?: Project;
}
  
const ProjectDisplay: FC<ProjectDisplayProps> = ({ project }: ProjectDisplayProps) => {
    const [frameIsLoading, setIsFrameLoading] = useState<boolean>(true)
    const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false)
    const $t = getDictionary();
    
    const handleLoadFrame = useCallback(()=>{ 
        setIsFrameLoading(false) 
    }, [setIsFrameLoading])

    const toggleFullScreen = useCallback(()=>{ 
        setIsDemoOpen(val => !val) 
    }, [setIsDemoOpen])

    // Reset loading state when project changes
    useEffect(() => {
        setIsFrameLoading(true);
    }, [project]);

    const frame = useMemo(() => (                    
        <iframe onLoad={handleLoadFrame} src={project?.demo?.href} className={twMerge("w-full h-full rounded-md", frameIsLoading && "hidden")}/>
    ), [project, handleLoadFrame, frameIsLoading]);

    const overlay = useMemo(() => isDemoOpen 
    ? ( <ProjectDrawerButton handleClick={toggleFullScreen}>{$t.projects.closeDemo}</ProjectDrawerButton>) 
    : ( <div onClick={toggleFullScreen} className="absolute h-full w-full flex justify-center items-center text-white text-2xl font-mono font-extrabold bg-black/70 hover:bg-black/80 hover:cursor-pointer lg:hidden">
            <h4 className="transition-transform duration-300 transform hover:scale-110">{$t.projects.viewDemo}</h4>
        </div>
    ), [$t, isDemoOpen, toggleFullScreen]);


    const display = useMemo(() => {     
        if (isDemoOpen) { 
            return (
                <Drawer open={isDemoOpen} onOpenChange={toggleFullScreen}>
                    <DrawerTitle className="sr-only">{$t.projects.heading}</DrawerTitle>
                    <DrawerDescription className="sr-only">{$t.projects.description}</DrawerDescription>
                    <DrawerContent className="h-full w-full">
                        {frame}
                        { overlay }
                    </DrawerContent>
                </Drawer>
            )
        } else if (project?.demo) { 
            return (
                <div className="relative w-full h-64 rounded-md shadow-inner lg:h-full">
                    { overlay }
                    { frameIsLoading && (<Skeleton className="w-full h-full rounded-md" />) }
                    { frame }
                </div>
            )
        } else {
            return (
                <h1 className="w-full h-full flex justify-center items-center bg-dashboard-header text-4xl font-extrabold font-mono text-dashboard rounded-md shadow-inner">{ $t.projects.placeholder }</h1>
            ) 
        }
    }, [project, $t, frame, frameIsLoading, overlay, isDemoOpen, toggleFullScreen]);

    return (display);
};

export default memo(ProjectDisplay);