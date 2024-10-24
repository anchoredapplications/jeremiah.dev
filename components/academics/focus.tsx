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
        <div className={`flex flex-col w-full m-4 ${isFirst ? 'sm:text-right' : ''} ${isLast ? 'sm:text-left': ''}`}>
            <h4 className={"flex justify-between py-2"}>    
                <b className="text-xl lg:text-2xl xl:text-3xl"> 
                    {focus.name}
                </b>
                <span className="text-lg font-light xl:text-xl">{$t.academics.focus.gpaLabel}{focus.gpa}</span>
            </h4>
            <ComponentOf jsx={focus.description} style="flex flex-col text-lg gap-4 lg:text-xl xl:text-2xl"/>
        </div>
    ), [$t, focus, isFirst, isLast])

    return component
}

export default memo(Focus)