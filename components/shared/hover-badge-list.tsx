import { FC, memo, useMemo } from "react"
import Badge, { Badging } from "./hover-badge"

interface BadgeListProps {
    badges?: Badging[]
}

const HoverBadgeList: FC<BadgeListProps> = ({ badges }: BadgeListProps) => {
    const component = useMemo(() => {
        return (<div className="flex flex-wrap gap-2">
            { badges?.map((badge, index) => (
                <Badge key={`${badge.subtitle}-${index}`} badge={badge} />
            ))}
        </div>)
    }, [badges])

    return component
}

export default memo(HoverBadgeList)