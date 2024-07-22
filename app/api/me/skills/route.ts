import { NextResponse } from 'next/server'
const { skills } = require("../../data");

export async function POST(request: Request) { 
  return NextResponse.json(skills)
}