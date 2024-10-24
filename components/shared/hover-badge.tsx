"use client"
import React, { FC, ReactNode, memo, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { ComponentOf } from "../utility/componentOf"
import { Tooltip } from "./hover-tooltip"

export type Badging = {
    subtitle?: string,
    image?: ReactNode,
    href?: string,
}

interface HoverBadgeProps {
    badge: Badging
}

const HoverBadge: FC<HoverBadgeProps> = ({ badge }: HoverBadgeProps) => {  
    const component = useMemo(() => (
        <Tooltip tooltip={badge.href}>
            <a href={badge.href}>
                <Badge variant="outline" className={`flex items-center justify-center gap-2 p-1`}>
                    { badge.image && <ComponentOf jsx={badge.image} style="w-4 h-4" />}
                    <h5>    
                        {badge.subtitle}
                    </h5>
                </Badge>
            </a>
        </Tooltip>
    ), [badge])

    return component
}

export default memo(HoverBadge)