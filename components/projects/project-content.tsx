import { getDictionary } from "@/dictionaries";
import { Project } from "@/types/project";
import { memo, useMemo, FC, useState, useCallback, useEffect } from "react"
import { GitBranch, Lock } from "lucide-react"
import { twMerge } from "tailwind-merge";
import { Tooltip } from "../hover-tooltip";

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
    ), [project]);

    // Memoized component
    const content = useMemo(() => (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
                <h1 className="text-4xl font-tight font-serif">{project?.name}</h1>
                { project && link }
            </div>
            <p>
                {project?.description}
            </p>
        </div>
    ), [$t, project, link]);

    return (content);
};

export default memo(ProjectContent);