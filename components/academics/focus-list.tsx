import { FC, memo, useMemo } from "react"
import Focus from "./focus"
import { Focus as FocusType } from "@/types/focus"

interface FocusListProps {
    focuses: FocusType[]
}

const FocusList: FC<FocusListProps> = ({ focuses }: FocusListProps) => {
    const component = useMemo(() => {
        return (<div className="flex gap-4 w-full">
            { focuses.map((focus, index) => (
                <Focus key={`${focus.name}-${index}`} focus={focus} />
            ))}
        </div>)
    }, [focuses])

    return component
}

export default memo(FocusList)