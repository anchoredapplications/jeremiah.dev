import { NextRequest, NextResponse } from 'next/server'
import { GetGitHubDocumentsByDocument } from '../github'
 
export async function POST(request) { 
  const body = await request.json();
  return NextResponse.json(await GetGitHubDocumentsByDocument(body.path))
}