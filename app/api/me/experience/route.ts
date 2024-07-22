import { NextResponse } from 'next/server'
const { experiences } = require("../../data");

export async function GET(request: Request) { 
  return NextResponse.json(experiences)
}