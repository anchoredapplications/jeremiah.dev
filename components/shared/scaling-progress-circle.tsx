"use client"
import React, { FC, ReactNode, memo, useMemo } from "react"
import { CircularProgress } from "../ui/progress"
import { useMediaQuery } from "react-responsive";
import { AspectRatio } from "@/globals/aspect-ratio";
import { getQuery } from "@/lib/aspect-ratio";

export type Badging = {
    subtitle?: string,
    image?: ReactNode,
    href?: string,
}

interface ScalingProgressCircleProps {
    value: number;
    subtitle: string;
}

const ScalingProgressCircle: FC<ScalingProgressCircleProps> = ({ value, subtitle }: ScalingProgressCircleProps) => {  
    const isSmall = useMediaQuery({ query: getQuery({ minWidth: AspectRatio.MIN, maxWidth: AspectRatio.LG})})
    const isMedium = useMediaQuery({ query: getQuery({ minWidth: AspectRatio.LG, maxWidth: AspectRatio.XL})})
    const isLarge = useMediaQuery({ query: getQuery({ minWidth: AspectRatio.XL, maxWidth: AspectRatio.MAX})})
    
    const size = isSmall ? "xl" : isMedium ? "normal" : isLarge ? "lg" : "normal"

    const component = useMemo(() => (
        <CircularProgress  
            value={value}
            subtitle={subtitle}
            size={size}
        />
    ), [size, value, subtitle])

    return component
}

export default memo(ScalingProgressCircle)