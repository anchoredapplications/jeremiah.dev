import { GetGitHubRepositories } from './gateway/github';
import { parseProjects } from './service/parseProjects';

export async function getProjectsData() { 
  const data = await GetGitHubRepositories()
  const projects = parseProjects(data.value)
  return projects
}