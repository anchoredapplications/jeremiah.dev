"use client"
import { FC, memo, useMemo } from "react"
import TimelineItem from "./timeline-item"
import { Job } from "@/types/job"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

interface Timeline {
    events: Job[]
}

const Timeline: FC<Timeline> = ({events}: Timeline) => {
    const component = useMemo(() => (
        <Carousel opts={{
            align: "start",
            loop: false,
          }}
          className="flex flex-row-reverse w-full">
            <CarouselContent>
                <CarouselItem className="hidden md:block md:basis-1/4 lg:basis-1/3 xl:hidden"/>
                {events.map((job: Job, index: number) => (
                    <CarouselItem key={job.endDate} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <TimelineItem event={job} firstItem={index == 0} lastItem={index == events.length-1}/>
                    </CarouselItem>   
                ))}
            </CarouselContent>
        </Carousel>
    ), [events])

    return component
}

export default memo(Timeline)