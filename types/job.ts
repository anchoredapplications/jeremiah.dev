import { Skill } from "./skill"

export type Job = {
    title: string, 
    type: string,
    employer: string,
    duration: string, 
    startDate: string,
    endDate: string,
    location: string,
    description: React.ReactNode,
    skills: Skill[]
}

export type ImportedJob = {
    title: string, 
    type: string,
    employer: string,
    startDate: Date,
    endDate?: Date,
    location: string,
    description: React.ReactNode,
    skills: Skill[]
}