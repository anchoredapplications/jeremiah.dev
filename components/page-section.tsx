"use client"
import { CircuitBorder, CircuitBorder2 } from "@/app/images/SVGs";
import { PageSectionVariant } from "@/types/PageVariant";
import { useTheme } from "next-themes";
import { memo, useMemo, FC, ReactNode } from "react"

export interface PageSectionProps {
    children?: ReactNode | ReactNode[]
    variant: PageSectionVariant
    id: string
    showBorder?: boolean
}

const PageSection: FC<PageSectionProps> = ({children, variant, id, showBorder}: PageSectionProps) => {
    const { theme } = useTheme()

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
                return "color-inlay"
            case PageSectionVariant.Secondary:
                return "color-inlay-secondary"
        }
    }

    const border = useMemo(() => {
        const baseCSS = 'absolute z-0 opacity-20'
        const color = theme === 'light' ? "#000000" : "#FFFFFF" 
        const random = Math.random() < 0.5
        return (
            <div className="">
                <div className={`${baseCSS} ${getBorderCSSForVariant(variant)} top-0 left-0 ${random ? "-rotate-180" : "rotate-90"}`}>
                    <CircuitBorder color={color}/>
                </div>
                <div className={`${baseCSS} ${getBorderCSSForVariant(variant)} bottom-0 left-0 ${random ? "rotate-90" : ""}`}>
                    <CircuitBorder2 color={color}/>
                </div>
                <div className={`${baseCSS} ${getBorderCSSForVariant(variant)} bottom-0 right-0 ${random ? "" : "-rotate-90"}`}>
                    <CircuitBorder color={color}/>
                </div>
            </div>
        )
    }, [variant]);

    // Memoized component
    const section = useMemo(() => (
        <section id={id} className={`relative w-full flex flex-col h-full min-h-screen ${getCSSForVariant(variant)}`}>
            { showBorder && border}
            {children}
        </section>
    ), [children, variant]);

    return (section);
};

export default memo(PageSection);