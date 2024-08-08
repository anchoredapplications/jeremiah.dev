"use client"
import { useTheme } from "next-themes"
import React, { FC, memo, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Skill as SkillType } from "@/types/skill"
import { ComponentOf } from "../utility/componentOf"

interface SkillsProps {
    skill: SkillType
}

const SkillBadge: FC<SkillsProps> = ({ skill }: SkillsProps) => {
    const component = useMemo(() => (
        <Badge variant="outline" className="flex items-center justify-center gap-2 p-1">
            <ComponentOf jsx={skill.image} style="w-4 h-4" />
            <h5>    
                {skill.subtitle}
            </h5>
        </Badge>
    ), [])

    return component
}

export default memo(SkillBadge)