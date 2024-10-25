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
    const isSmall = useMediaQuery({ query: getQuery({ minWidth: AspectRatio.MIN, maxWidth: AspectRatio.MD})})
    const isTabletOrLargePhone = useMediaQuery({ query: getQuery({ minWidth: AspectRatio.SM, maxWidth: AspectRatio.LG})})

    const size = isSmall ? 'sm' : isTabletOrLargePhone ? "lg" : "normal"

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