import { ReactNode } from "react"

export type Commendation = {
    title: string,
    subtitle: string,
    dates: string,
    link?: string,
    image: ReactNode
}