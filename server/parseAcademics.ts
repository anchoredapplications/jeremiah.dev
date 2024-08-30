import { getDictionary } from "@/dictionaries";
import { getDurationBetweenDates } from "./getDurationBetweenDates";
import { Academics, ImportedAcademics } from "@/types/academics";


export function parseAcademia(academics: ImportedAcademics): Academics {
    const $t = getDictionary()

    const parseDate = (date: Date) => date.toLocaleString('default', { month: 'short', year: 'numeric' })
    
    const parsedAcademics: Academics = {
        ...academics,
        startDate: parseDate(academics.startDate),
        endDate: academics.endDate ? parseDate(academics.endDate) : $t.timeline.endDateDefault,
        duration: getDurationBetweenDates(academics.startDate, academics.endDate ?? new Date())
    }
    return parsedAcademics
}

export function parseAcademics(academics: ImportedAcademics[]): Academics[] {
    return academics.map(parseAcademia)
}