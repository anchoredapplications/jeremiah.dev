import { getSkillsData } from '@/server/getSkillsData';
import { NextResponse } from 'next/server'

export async function POST(request: Request) { 
  const data = await getSkillsData()
  return NextResponse.json(data)
}