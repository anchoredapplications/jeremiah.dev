
import {
    ReactNode
} from "react"
import {
    Tooltip as TooltipBase,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export type TooltipProps = {
    children: ReactNode | ReactNode[],
    tooltip: ReactNode | ReactNode[],
    className?: string,
}

export function HoverTooltip({ children, tooltip, className }: TooltipProps) {
    return (
        <TooltipProvider>
            <TooltipBase>
                <TooltipTrigger className={className}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {tooltip}
                </TooltipContent>
            </TooltipBase>
        </TooltipProvider>
    )
}