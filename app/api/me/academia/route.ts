import { NextResponse } from 'next/server'
const { academia } = require("../../data");

export async function GET(request: Request) { 
  return NextResponse.json(academia)
}