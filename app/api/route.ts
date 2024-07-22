import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const data = { status: 200, message: "API is live.", timestamp: new Date(), owner: "Jeremiah Gage" }
 
  return NextResponse.json({ data })
}