import React, { FC, memo, useMemo } from "react"
import { ComponentOf } from "../utility/componentOf"
import { Focus as FocusType} from "@/types/focus"
import { getDictionary } from "@/dictionaries"

interface FocusProps {
    focus: FocusType
}

const Focus: FC<FocusProps> = ({ focus }: FocusProps) => {
    const $t = getDictionary();

    const component = useMemo(() => (
        <div className="flex flex-col w-full">
            <h4 className="font-bold">    
                {focus.type} <span className="font-light">({$t.academics.focus.gpaLabel}{focus.gpa})</span>
            </h4>
            <h5 className="font-light">    
                {focus.name}
            </h5>
            <ComponentOf jsx={focus.description} />
        </div>
    ), [])

    return component
}

export default memo(Focus)