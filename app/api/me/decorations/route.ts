import { NextResponse } from 'next/server'
const { decorations } = require("../../data");

export async function GET(request: Request) { 
  return NextResponse.json(decorations)
}