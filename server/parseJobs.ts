import { getDictionary } from "@/dictionaries";
import { ImportedJob, Job } from "@/types/job";
import { getDurationBetweenDates } from "./getDurationBetweenDates";

export function parseJob(job: ImportedJob): Job {
    const $t = getDictionary()

    const parseDate = (date: Date) => date.toLocaleString('default', { month: 'short', year: 'numeric' })
    const parsedJob: Job = {
        ...job,
        startDate: parseDate(job.startDate),
        endDate: job.endDate ? parseDate(job.endDate) : $t.timeline.endDateDefault,
        duration: getDurationBetweenDates(job.startDate, job.endDate ?? new Date())
    }
    return parsedJob
}

export function parseJobs(jobs: ImportedJob[]): Job[] {
    return jobs.map(parseJob)
}