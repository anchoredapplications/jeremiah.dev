import { getSkillsData } from '@/server/getSkillsData';
import { NextResponse } from 'next/server'
const { skills } = require("../../data");

export async function POST(request: Request) { 
  const data = await getSkillsData()
  return NextResponse.json(skills)
}