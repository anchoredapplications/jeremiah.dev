import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"

interface EventBubble {
    heading: string
    subheading: string
}

const EventBubble: FC<EventBubble> = ({heading, subheading}: EventBubble) => {
    const {theme} = useTheme()

    const component = useMemo(() => (
        <button className="rounded-full bg-green-900/30 p-2">
            <h3>{heading}</h3>
            <h4>{subheading}</h4>
        </button>
    ), [theme])

    return component
}

export default memo(EventBubble)