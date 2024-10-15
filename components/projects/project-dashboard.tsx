"use client"
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback } from "react"
import ProjectCardList from "./project-card-list";
import ProjectViewer from "./project-viewer";
import { Button } from "../ui/button";
import { Info as InfoIcon } from "lucide-react"

interface ProjectDashboardProps {
    projects: Project[];
}
  
const ProjectDashboard: FC<ProjectDashboardProps> = ({ projects }: ProjectDashboardProps) => {
    const [selectedProject, setSelectedProject] = useState<Project>()
    const [isPressed, setIsPressed] = useState<Boolean>()
    const togglePressed = useCallback(()=>{
        setIsPressed(value => !!value)
    }, [])
    // Memoized component
    const content = useMemo(() => (
        <div className="max-h-page-content w-full flex flex-col overflow-hidden rounded-md bg-dashboard shadow-inner">
            <div className="p-4 flex flex-row-reverse bg-dashboard-header border-b border-dashboard-header shadow-xl">
                <InfoIcon onClick={togglePressed} className={`cursor-pointer ${isPressed ? "text-neutral-700" : "text-neutral-900"}`}/>
            </div>
            <div className="flex px-4 gap-6">
                <ProjectCardList projects={projects} handleClick={setSelectedProject} />
                <ProjectViewer project={selectedProject} />
            </div>
        </div>
    ), [projects, selectedProject, setSelectedProject]);

    return (content);
};

export default memo(ProjectDashboard);