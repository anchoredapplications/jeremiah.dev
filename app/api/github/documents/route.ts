import { getDocumentsData } from '@/server/getDocumentsData'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: Request) { 
  const data = await getDocumentsData()
  return NextResponse.json(data)
}