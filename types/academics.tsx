import { ReactNode } from "react"
import { Commendation } from "./commendation"

export type Academics = {
    degree: string,
    majors: string[],
    description: ReactNode,
    institution: string,
    location: string,
    startDate: Date,
    endDate: Date,
    commendations: Commendation[]
}
