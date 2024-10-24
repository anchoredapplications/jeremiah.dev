
import {
    ReactNode
} from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export type ClickTooltipProps = {
    children: ReactNode | ReactNode[],
    tooltip: ReactNode | ReactNode[],
    className?: string,
}

export function ClickTooltip({ children, tooltip, className }: ClickTooltipProps) {
    return (
        <Popover> 
            <PopoverTrigger>
                <p className={className}>
                    {children}
                </p>
            </PopoverTrigger>
            <PopoverContent>{tooltip}</PopoverContent>
        </Popover>
    )
}