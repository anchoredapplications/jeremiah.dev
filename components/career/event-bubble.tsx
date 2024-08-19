import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
interface EventBubble {
    heading: string
    subheading: string
    showRightArrow: boolean
    showLeftArrow: boolean
}

const EventBubble: FC<EventBubble> = ({heading, subheading, showLeftArrow, showRightArrow}: EventBubble) => {
    const {theme} = useTheme()

    const component = useMemo(() => (
        <span className="flex items-center justify-center">
            { showLeftArrow && <ChevronLeft className="sm:hidden"/> }
            <button className="rounded-full bg-lime-400/80 px-4 py-2">
                <h3>{heading}</h3>
                <h4>{subheading}</h4>
            </button>
            { showRightArrow && <ChevronRight className="sm:hidden"/> }
        </span>
    ), [theme])

    return component
}

export default memo(EventBubble)