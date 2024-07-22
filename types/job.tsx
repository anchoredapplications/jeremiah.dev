type Job = {
    title: string, 
    type: string,
    employer: string,
    displayDate: string,
    duration: string, 
    startDate: Date,
    endDate: Date,
    location: string,
    description: React.ReactNode | string,
    skills: Skill[]
}