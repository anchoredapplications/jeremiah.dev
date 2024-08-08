import { FC, memo, useMemo } from "react"
import { Skill as SkillType } from "@/types/skill"
import SkillBadge from "./skill-badge"

interface SkillBadgeListProps {
    skills: SkillType[]
}

const SkillBadgeList: FC<SkillBadgeListProps> = ({ skills }: SkillBadgeListProps) => {
    const component = useMemo(() => {
        return (<div className="flex flex-wrap gap-2">
            { skills.map((skill, index) => (
                <SkillBadge key={`${skill.subtitle}-${index}`} skill={skill} />
            ))}
        </div>)
    }, [skills])

    return component
}

export default memo(SkillBadgeList)