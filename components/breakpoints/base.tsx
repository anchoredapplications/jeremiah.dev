import { AspectRatio } from '@/globals/aspect-ratio'
import { FC, ReactNode, useMemo } from 'react'
import MediaQuery from 'react-responsive'

export interface BaseProps {
    children: ReactNode | ReactNode[]
}

export const getBreakpointComponent: (resolutionMin: AspectRatio, resolutionMax: AspectRatio) => FC<BaseProps> = (resolutionMin: number, resolutionMax: number) => ({children}: BaseProps) => {
    const component = useMemo(() => (
        <MediaQuery minWidth={resolutionMin} maxWidth={resolutionMax}>
            {children}
        </MediaQuery>
    ), [children])

    return component
}
