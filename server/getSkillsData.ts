import { skills } from '@/data/career'
import { parseSkills } from './service/parseSkills';

export async function getSkillsData() { 
  return parseSkills(Object.values(skills)) 
}