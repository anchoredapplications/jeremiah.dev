"use client"
import { CircuitBorder, CircuitBorder2 } from "@/components/utility/SVGs";
import { PageSectionVariant } from "@/types/PageVariant";
import { useTheme } from "next-themes";
import { memo, useMemo, FC, ReactNode, useState, useEffect } from "react"

export interface PageSectionProps {
    children?: ReactNode | ReactNode[]
    variant: PageSectionVariant
    id: string
    showBorder?: boolean
}

const PageSection: FC<PageSectionProps> = ({children, variant, id, showBorder}: PageSectionProps) => {
    const { theme } = useTheme()
    const [colorState, setColorState] = useState<string>()
    const [rotationState, setRotationState] = useState<boolean>()

    useEffect(()=>{ 
        setColorState(theme === 'light' ? "#f0f0f0" : "#2A2A2A" )
        setRotationState(Math.random() < 0.5)
    }, [theme])

    const getCSSForVariant = (variant: PageSectionVariant) => {
        switch(variant) {
            case PageSectionVariant.Primary:
                return "bg-background"
            case PageSectionVariant.Secondary:
                return "bg-background-secondary"
        }
    }

    const getBorderCSSForVariant = (variant: PageSectionVariant) => {
        switch(variant) {
            case PageSectionVariant.Primary:
                return "color-background"
            case PageSectionVariant.Secondary:
                return "color-inlay-secondary"
        }
    }

    const border = useMemo(() => {
        const baseCSS = 'absolute z-0'
        const borderCSS = getBorderCSSForVariant(variant)

        return (
            <div className="">
                <div className={`${baseCSS} ${borderCSS} top-0 left-0 ${rotationState ? "-rotate-180" : "rotate-90"}`}>
                    <CircuitBorder color={colorState}/>
                </div>
                <div className={`${baseCSS} ${borderCSS} bottom-0 left-0 ${rotationState ? "rotate-90" : ""}`}>
                    <CircuitBorder2 color={colorState}/>
                </div>
                <div className={`${baseCSS} ${borderCSS} bottom-0 right-0 ${rotationState ? "" : "-rotate-90"}`}>
                    <CircuitBorder color={colorState}/>
                </div>
            </div>
        )
    }, [variant, colorState]);

    // Memoized component
    const section = useMemo(() => (
        <section id={id} className={`relative w-full flex flex-col h-full min-h-screen ${getCSSForVariant(variant)}`}>
            { showBorder && border}
            <div className="z-10 m-4">
                {children}
            </div>
        </section>
    ), [children, variant, border]);

    return (section);
};

export default memo(PageSection);