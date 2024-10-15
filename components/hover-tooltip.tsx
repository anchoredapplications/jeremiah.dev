
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
    tooltip: ReactNode | ReactNode[]
}

export function Tooltip({ children, tooltip }: TooltipProps) {
    return (
        <TooltipProvider>
            <TooltipBase>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {tooltip}
                </TooltipContent>
            </TooltipBase>
        </TooltipProvider>
    )
}