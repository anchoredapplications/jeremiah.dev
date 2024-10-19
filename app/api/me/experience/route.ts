import { getCareerData } from '@/server/getCareerData';
import { Job } from '@/types/job';
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse<Job[]>> {
  const data = await getCareerData()
  return NextResponse.json(data)
}