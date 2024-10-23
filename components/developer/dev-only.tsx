"use client"
import { getDictionary } from "@/dictionaries"
import { useTheme } from "next-themes"
import { FC, ReactNode, memo, useMemo } from "react"

interface ThemeOnlyProps {
    children: ReactNode | ReactNode[]
}

const DevOnly: FC<ThemeOnlyProps> = ({children}: ThemeOnlyProps) => {
    const {theme} = useTheme()
    const $t = getDictionary()

    const devOnlyComponent = useMemo(() => {
        if (theme === $t.theme.keys.dev) {
            return children
        } else {
            return (<></>)
        }
    }, [theme, children, $t])

    return devOnlyComponent
}

export default memo(DevOnly)