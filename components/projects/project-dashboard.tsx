"use client"
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback } from "react"
import ProjectCardList from "./project-card-list";
import { Info as InfoIcon } from "lucide-react"
import ProjectDrawer from "./project-drawer";
import MobileTabletOnly from "../breakpoints/mobile-tablet-only";
import DesktopOnly from "../breakpoints/desktop-only";
import ProjectDisplay from "./project-display";
import ProjectContent from "./project-content";
import { getDictionary } from "@/dictionaries";
import { ClickTooltip } from "../shared/click-tooltip";

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
    const content = useMemo(() => (
        <div className="max-h-page-content p-4 w-full flex flex-col overflow-hidden rounded-md bg-dashboard shadow-inner border dark:border-border">
            <div className="min-h-14 p-4 flex flex-row-reverse bg-dashboard-header border-b border-dashboard-header shadow-xl dark:border-border">
                <ClickTooltip tooltip={$t.projects.info} className="font-serif tracking-tight">
                    <InfoIcon onClick={togglePressed} className={`cursor-pointer ${isPressed ? "text-neutral-700" : "text-neutral-900"}`}/>
                </ClickTooltip>
            </div>
            {/* Desktop View */}
            <div className="h-dashboard-content">
                <DesktopOnly>
                    <div className="h-dashboard-content w-full flex gap-4 p-2">
                        <div className="h-full lg:w-80 xl:w-dashboard-pane xl:min-w-dashboard-pane">
                            <ProjectCardList projects={projects} handleClick={selectProject} />
                        </div>
                        <div className="w-full flex flex-col gap-4 xl:flex-row">
                            <div className="h-3/4 w-full xl:h-full">
                                <ProjectDisplay project={selectedProject}/>
                            </div>
                            <div className="w-full xl:w-dashboard-pane xl:min-w-dashboard-pane">
                                <ProjectContent project={selectedProject} />
                            </div>
                        </div>
                    </div>
                </DesktopOnly>
                {/* Mobile & Tablet View */}
                <MobileTabletOnly>
                    <ProjectCardList projects={projects} handleClick={selectProject} />
                    <ProjectDrawer openState={!!isDrawerOpen} setIsOpen={setIsDrawerOpen}>
                        <div className="h-dashboard-content w-full flex py-2 gap-4 flex-col">
                            <ProjectDisplay project={selectedProject}/>
                            <ProjectContent project={selectedProject} />
                        </div>
                    </ProjectDrawer>
                </MobileTabletOnly>
            </div>
        </div>
    ), [projects, selectedProject, isDrawerOpen, isPressed, selectProject, setIsDrawerOpen, togglePressed]);

    return (content);
};

export default memo(ProjectDashboard);