import { FC, memo, useMemo } from "react"
import { Commendation as CommendationType } from "@/types/commendation"
import Commendation from "./commendation"

interface CommendationListProps {
    commendations: CommendationType[]
}

const CommendationList: FC<CommendationListProps> = ({ commendations }: CommendationListProps) => {
    const component = useMemo(() => {
        return (<div className="p-4 flex flex-wrap justify-around w-full gap-4 lg:w-3/4">
            { commendations.map((commendation, index) => (
                <Commendation key={`${commendation.subtitle}-${index}`} commendation={commendation} />
            ))}
        </div>)
    }, [commendations])

    return component
}

export default memo(CommendationList)