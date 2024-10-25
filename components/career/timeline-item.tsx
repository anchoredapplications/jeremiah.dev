"use client"

import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"
import EventBubble from "./event-bubble"
import { Job } from "@/types/job"
import { ComponentOf } from "../utility/componentOf"
import HoverBadgeList from "../shared/hover-badge-list"

interface TimelineItem {
    event: Job
    firstItem?: boolean
    lastItem?: boolean
}

const TimelineItem: FC<TimelineItem> = ({event, firstItem, lastItem}: TimelineItem) => {
    const component = useMemo(() => (
        <div className="w-full h-full flex flex-col items-center gap-4 p-8">
            <div className="w-full h-full shadow-xl bg-card p-4 rounded-xl m-4 flex flex-col justify-between">
                <div className="flex flex-col">
                    <span className="flex justify-between w-full items-center">
                        <h1 className="text-2xl tracking-tighter">{event.title}</h1>
                        <h2>{event.duration}</h2>
                    </span>
                    <h2 className="text-lg tracking-tighter">{event.employer}</h2>
                    <h3 className="text-lg font-light">{event.location}</h3>
                    <hr className="mt-4"></hr>
                    <div className="p-2 h-">
                        <ComponentOf jsx={event.description} style="list-disc"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <hr className="mb-4"></hr>
                    <HoverBadgeList badges={event.skills}/>
                </div>
            </div>
        </div>
    ), [event])

    return component
}

export default memo(TimelineItem)