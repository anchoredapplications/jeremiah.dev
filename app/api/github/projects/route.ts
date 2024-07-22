import { NextResponse } from 'next/server'
import { GetGitHubProjects } from '../github'
 
export async function GET(request: Request) { 
  return NextResponse.json(await GetGitHubProjects())
}