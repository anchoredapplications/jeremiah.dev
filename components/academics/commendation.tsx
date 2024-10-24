import React, { FC, memo, useMemo } from "react"
import { Commendation as CommendationType } from "@/types/commendation"
import { ComponentOf } from "../utility/componentOf"

interface CommendationProps {
    commendation: CommendationType
}

const Commendation: FC<CommendationProps> = ({ commendation }: CommendationProps) => {
    const component = useMemo(() => (
        <div className="flex flex-col items-center justify-center tracking-tight text-md lg:text-lg xl:text-xl">
            <ComponentOf jsx={commendation.image} style="aspect-square w-32 lg:w-36 xl:w-40" />
            <h4 className="font-bold font-mono">    
                {commendation.title}
            </h4>
            <h5 className="font-light font-serif">    
                {commendation.subtitle}
            </h5>
            <h5 className="font-semibold font-serif">    
                {commendation.dates}
            </h5>
        </div>
    ), [commendation])

    return component
}

export default memo(Commendation)