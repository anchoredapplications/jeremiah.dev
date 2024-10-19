import { parseAcademia } from '@/server/service/parseAcademics';
import { academics } from '@/data/academics'

export async function getAcademicData() { 
  return parseAcademia(academics) 
}