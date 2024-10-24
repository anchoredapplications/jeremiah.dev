"use client"
import { FC, ReactNode, useEffect, useMemo, useState } from 'react'

export interface BaseProps {
    children: ReactNode | ReactNode[],
}

export const Skeletons: FC<BaseProps> = ({children}: BaseProps) => {
    const [onClient, setOnClient] = useState<boolean>(false)
    useEffect(() => { setOnClient(true) }, [setOnClient])

    const component = useMemo(() => onClient ? (<></>) : children, [ onClient, children])

    return component
}
