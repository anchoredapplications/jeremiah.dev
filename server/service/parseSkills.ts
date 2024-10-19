import { ImportedSkill, Skill } from "@/types/skill"

export function parseSkill(skill: ImportedSkill): Skill {
    const parsedSkill: Skill = {
        ...skill,
    }
    return parsedSkill
}

export function parseSkills(skills: ImportedSkill[]): Skill[] {
    return skills.map(parseSkill)
}