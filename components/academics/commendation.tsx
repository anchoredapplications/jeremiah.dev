import React, { FC, memo, useMemo } from "react"
import { Commendation as CommendationType } from "@/types/commendation"
import { ComponentOf } from "../utility/componentOf"

interface CommendationProps {
    commendation: CommendationType
}

const Commendation: FC<CommendationProps> = ({ commendation }: CommendationProps) => {
    const component = useMemo(() => (
        <div className="flex flex-col items-center justify-center">
            <ComponentOf jsx={commendation.image} style="w-32 h-32" />
            <h4>    
                {commendation.title}
            </h4>
            <h5>    
                {commendation.subtitle}
            </h5>
        </div>
    ), [])

    return component
}

export default memo(Commendation)