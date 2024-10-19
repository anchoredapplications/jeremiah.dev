import { getAcademicData } from '@/server/getAcademicData';
import { NextResponse } from 'next/server'

export async function GET(request: Request) { 
  const data = await getAcademicData()
  return NextResponse.json(data)
}