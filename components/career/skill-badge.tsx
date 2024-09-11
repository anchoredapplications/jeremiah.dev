"use client"
import { useTheme } from "next-themes"
import React, { FC, memo, useCallback, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Skill as SkillType } from "@/types/skill"
import { ComponentOf } from "../utility/componentOf"
import { Tooltip } from "../Tooltip"

interface SkillsProps {
    skill: SkillType
}

const SkillBadge: FC<SkillsProps> = ({ skill }: SkillsProps) => {  
    const component = useMemo(() => (
        <Tooltip tooltip={skill.href}>
            <a href={skill.href}>
                <Badge variant="outline" className={`flex items-center justify-center gap-2 p-1`}>
                    <ComponentOf jsx={skill.image} style="w-4 h-4" />
                    <h5>    
                        {skill.subtitle}
                    </h5>
                </Badge>
            </a>
        </Tooltip>
    ), [])

    return component
}

export default memo(SkillBadge)