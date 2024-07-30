import { Job } from "@/types/job"
import { useTheme } from "next-themes"
import { FC, memo, useMemo } from "react"

interface CareerCard {
    job: Job
}

const CareerCard: FC<CareerCard> = ({job}: CareerCard) => {
    const {theme} = useTheme()

    const component = useMemo(() => (
        
        <table>
            <tbody>
                <tr>
                    <td><h3>{job.title}</h3></td>
                    <td><h4>{job.startDate?.toString()} - {job.endDate?.toString()}</h4></td>
                </tr>
                <tr>
                    <td><h4>{job.employer}</h4></td>
                    <td>
                        <h5>
                            {job.duration} · {job.type}
                        </h5>
                    </td>
                </tr>
                <tr>
                    <td><h5>{job.location}</h5></td>
                    <td></td>
                </tr>
            </tbody>
            </table>
    ), [theme])

    return component
}

export default memo(CareerCard)