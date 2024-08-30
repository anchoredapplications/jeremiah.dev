import React, { FC, memo, useMemo } from "react"
import { ComponentOf } from "../utility/componentOf"
import { Focus as FocusType} from "@/types/focus"
import { getDictionary } from "@/dictionaries"

interface FocusProps {
    focus: FocusType,
    isFirst?: boolean,
    isLast?: boolean
}

const Focus: FC<FocusProps> = ({ focus, isFirst, isLast }: FocusProps) => {
    const $t = getDictionary();

    const component = useMemo(() => (
        <div className={`flex flex-col w-full m-4 text-center ${isFirst && 'sm:text-right'} ${isLast && 'sm:text-left'}`}>
            <h4 className={"font-bold text-xl"}>    
                {focus.name}
            </h4>
            <h5 className="font-light text-xl">
                {$t.academics.focus.gpaLabel}{focus.gpa}
            </h5>
            <ComponentOf jsx={focus.description} style="flex flex-col text-lg gap-4"/>
        </div>
    ), [])

    return component
}

export default memo(Focus)