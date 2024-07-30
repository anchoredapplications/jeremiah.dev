"use client"

import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"
import TimelineItem from "./timeline-item"
import { Job } from "@/types/job"

interface Timeline {
    events: Job[]
}

const Timeline: FC<Timeline> = ({events}: Timeline) => {
    const {theme} = useTheme()

    const component = useMemo(() => (
        <ul className="flex flex-row-reverse w-full">
            {events.map((job: Job) => (
                <TimelineItem key={job.endDate} event={job} />
            ))}
        </ul>
    ), [theme, events])

    return component
}

export default memo(Timeline)