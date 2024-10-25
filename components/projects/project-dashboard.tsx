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
import { Skeleton } from "../ui/skeleton";
import { Skeletons } from "../breakpoints/Skeletons";

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
    const content = useMemo(() => (
        <div className="max-h-page-content w-full flex flex-col overflow-hidden rounded-md bg-dashboard shadow-inner border dark:border-border">
            <div className="min-h-14 p-4 flex flex-row-reverse bg-dashboard-header border-b border-dashboard-header shadow-xl dark:border-border">
                <ClickTooltip tooltip={$t.projects.info} className="font-serif tracking-tight">
                    <InfoIcon onClick={togglePressed} className="cursor-pointer hover:text-muted-foreground"/>
                </ClickTooltip>
            </div>
            <div className="w-full flex">
                <div className="max-h-page-content w-full flex flex-col lg:min-w-dashboard-pane lg:max-w-dashboard-pane">
                    <ProjectCardList projects={projects} handleClick={selectProject} />
                </div>
                <div className="hidden m-4 flex-col lg:w-full lg:flex xl:flex-row">
                    <div className="max-h-dashboard-content h-full w-full xl:h-full">
                        <ProjectDisplay project={selectedProject}/>
                    </div>
                    <div className="w-full h-full px-4 xl:w-dashboard-pane xl:min-w-dashboard-pane">
                        <ProjectContent project={selectedProject} />
                    </div>
                </div>
            </div>
            <MobileTabletOnly>
                <ProjectDrawer openState={!!isDrawerOpen} setIsOpen={setIsDrawerOpen}>
                    <div className="w-full flex py-2 gap-4 flex-col">
                        <ProjectDisplay project={selectedProject}/>
                        <ProjectContent project={selectedProject} />
                    </div>
                </ProjectDrawer>
            </MobileTabletOnly>
        </div>
    ), [$t, projects, selectedProject, isDrawerOpen, selectProject, setIsDrawerOpen, togglePressed]);

    return (content);
};

export default memo(ProjectDashboard);