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
        <div className={`flex flex-col w-full m-4 p-2 ${isFirst ? 'sm:text-right' : ''} ${isLast ? 'sm:text-left': ''}`}>
            <h4 className={"flex justify-between py-2 md:flex-col xl:flex-row"}>    
                <b className="text-lg xl:text-xl"> 
                    {focus.name} 
                </b>
                <span className="text-xl font-light lg:text-lg xl:text-xl">{$t.academics.focus.gpaLabel}{focus.gpa}</span>
            </h4>
            <ComponentOf jsx={focus.description} style="flex flex-col text-lg gap-4 text-xl lg:text-lg xl:text-xl"/>
        </div>
    ), [$t, focus, isFirst, isLast])

    return component
}

export default memo(Focus)