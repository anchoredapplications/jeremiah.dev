import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback, useEffect } from "react"
import { GitBranch, Lock } from "lucide-react"
import { twMerge } from "tailwind-merge";
import { Tooltip } from "../shared/hover-tooltip";
import ScalingProgressCircle from "../shared/scaling-progress-circle";

interface ProjectContentProps {
    project?: Project;
}
  
const ProjectContent: FC<ProjectContentProps> = ({ project }: ProjectContentProps) => {
    const $t = getDictionary();
    const linkStyle = "text-xl font-tight font-serif flex px-4 gap-2 text-blue-600"
    
    // Memoized component
    const link = useMemo(() => (
        project?.private 
            ? (
                <Tooltip tooltip={$t.projects.github.private} className={twMerge(linkStyle, "opacity-40")}>
                    {$t.projects.github.link}
                    <Lock />
                </Tooltip>
              )
            : (
                <Tooltip tooltip={$t.projects.github.public}>
                    <a href={project?.link.href} target="_blank" className={twMerge(linkStyle, "hover:underline")}>
                        {$t.projects.github.link}
                        <GitBranch />
                    </a>
                </Tooltip>
            )
    ), [$t, project]);

    // Memoized component
    const languages = useMemo(() => project?.languages 
        ?  Object.entries(project.languages).map(([key, value]) => <ScalingProgressCircle key={key} subtitle={key} value={value}/>
        ) : (<></>)
    , [project]);

    // Memoized component
    const content = useMemo(() => project && (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
                <h1 className="text-4xl font-tight font-serif">{project.name}</h1>
                { project && link }
            </div>
            <p>
                {project.description}
            </p>
            <div className="flex flex-wrap justify-around gap-4">
                <h1 className="text-2xl text-center font-tight font-serif w-full">{$t.projects.languages}</h1>
                { languages }
            </div>
        </div>
    ), [$t, project, link, languages]);

    return (content);
};

export default memo(ProjectContent);