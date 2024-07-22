import { NextResponse } from 'next/server'
import { GetGitHubLanguages } from '../github'
 
export async function GET(request: Request) { 
  return NextResponse.json(await GetGitHubLanguages())
}