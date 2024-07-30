"use client"

import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"
import EventBubble from "./event-bubble"
import { Job } from "@/types/job"
import { componentOf } from "../utility/componentOf"

interface TimelineItem {
    event: Job
}

function Description({description}: any) {
    return (
        <div className="p-4">
            {componentOf(description, "list-disc")}
        </div>
    )
}

const TimelineItem: FC<TimelineItem> = ({event}: TimelineItem) => {
    const {theme} = useTheme()
    const heading = `${event.startDate} - ${event.endDate}`
    const subheading = event.duration
    

    const component = useMemo(() => (
        <li className="w-full flex flex-col items-center gap-4 p-4">
            <EventBubble heading={heading} subheading={subheading} />
            <div className="w-full h-full shadow-xl bg-card p-4 rounded-xl m-4">
                <h1 className="text-2xl">{event.title}</h1>
                <h2 className="text-xl">{event.employer}</h2>
                <h3 className="text-xl font-light">{event.location}</h3>
                <hr className="py-4"></hr>
                <Description description={event.description}/>
            </div>
        </li>
    ), [theme])

    return component
}

export default memo(TimelineItem)