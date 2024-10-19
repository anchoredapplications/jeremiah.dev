import { experiences } from '@/data/career'
import { parseJobs } from './service/parseJobs';

export async function getCareerData() { 
  return parseJobs(experiences) 
}