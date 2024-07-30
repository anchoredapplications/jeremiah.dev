import { parseJobs } from '@/server/parseJobs';
import { Job } from '@/types/job';
import { NextResponse } from 'next/server'
const { experiences } = require("../../data");

export async function GET(request: Request): Promise<NextResponse<Job[]>> {
  const jobs = parseJobs(experiences) 
  return NextResponse.json(jobs)
}