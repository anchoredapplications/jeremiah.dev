import { parseAcademia } from '@/server/parseAcademics';
import { NextResponse } from 'next/server'
const { academia } = require("../../data");

export async function GET(request: Request) { 
  const academics = parseAcademia(academia) 
  return NextResponse.json(academics)
}