"use client"

import { getDictionary } from "@/dictionaries"
import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"
import CareerCard from "./career-card"

interface CareerCardList {
    jobs: Job[]
}

const CareerCardList: FC<CareerCardList> = ({jobs}: CareerCardList) => {
    const {theme} = useTheme()
    const $t = getDictionary()

    const component = useMemo(() => (
        <ul>
            {jobs.map((job: Job) => (
                <li>
                    <CareerCard job={job}/>
                </li>
            ))}
        </ul>
    ), [theme, jobs])

    return component
}

export default memo(CareerCardList)