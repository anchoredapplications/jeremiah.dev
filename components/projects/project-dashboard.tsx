"use client"
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback } from "react"
import ProjectCardList from "./project-card-list";
import ProjectViewer from "./project-viewer";
import { Info as InfoIcon } from "lucide-react"
import ProjectDrawer from "./project-drawer";
import { getDictionary } from "@/dictionaries";
import MobileTabletOnly from "../breakpoints/mobile-tablet-only";
import DesktopOnly from "../breakpoints/desktop-only";

interface ProjectDashboardProps {
    projects: Project[];
}
  
const ProjectDashboard: FC<ProjectDashboardProps> = ({ projects }: ProjectDashboardProps) => {
    const $t = getDictionary();

    const [selectedProject, setSelectedProject] = useState<Project>()
    const [isPressed, setIsPressed] = useState<boolean>()
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()

    const togglePressed = useCallback(()=>{
        setIsPressed(value => !!value)
    }, [])

    const selectProject = useCallback((project: Project)=>{
        setIsDrawerOpen(true)
        setSelectedProject(project)
    }, [setSelectedProject, setIsDrawerOpen])

    // Memoized component
    const cardList = useMemo(() => (
        <ProjectCardList projects={projects} handleClick={selectProject} />
    ), [projects, selectProject]);
    
    // Memoized component
    const projectViewer = useMemo(() => (
        <ProjectViewer project={selectedProject} />
    ), [selectedProject]);

    // Memoized component
    const projectDrawer = useMemo(() => {
        if (selectedProject) {
            return (
                <ProjectDrawer openState={!!isDrawerOpen} setIsOpen={setIsDrawerOpen}>
                    { projectViewer }
                </ProjectDrawer>
            )
        }
    }, [selectedProject, projectViewer, setIsDrawerOpen, isDrawerOpen]);

    // Memoized component
    const content = useMemo(() => (
        <div className="max-h-page-content w-full flex flex-col overflow-hidden rounded-md bg-dashboard shadow-inner border dark:border-border">
            <div className="min-h-14 p-4 flex flex-row-reverse bg-dashboard-header border-b border-dashboard-header shadow-xl dark:border-border">
                <InfoIcon onClick={togglePressed} className={`cursor-pointer ${isPressed ? "text-neutral-700" : "text-neutral-900"}`}/>
            </div>
            {/* Desktop View */}
            <div className="flex px-2">
                {cardList}
                <div className="hidden w-full pl-6 lg:flex">
                    <DesktopOnly>{projectViewer}</DesktopOnly>
                    <MobileTabletOnly>{projectDrawer}</MobileTabletOnly>
                </div>
            </div>
        </div>
    ), [cardList, projectDrawer, projectViewer, isPressed, togglePressed]);

    return (content);
};

export default memo(ProjectDashboard);