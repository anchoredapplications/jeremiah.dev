import config from "@/config.json";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
    auth: ""
});

const basePath = config.github.api + config.github.repos

//STATE VARIABLES
interface SimpleCache {
    value: any[], 
    dateUpdated: Date | null 
}

const GITHUB_REPOSITORIES: SimpleCache = { value: [], dateUpdated: null }
const GITHUB_PROJECTS: SimpleCache = { value: [], dateUpdated: null }
const GITHUB_LANGUAGES: SimpleCache = { value: [], dateUpdated: null }
const GITHUB_DOCUMENTS: SimpleCache = { value: [], dateUpdated: null }

function isDifferenceLessThanThreshold(date: Date | null, thresholdInHours: number): boolean {
    if (!date) return false;
    const differenceInMilliseconds = Math.abs(new Date().getTime() - date.getTime());
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    return differenceInHours < thresholdInHours;
}

function StateIsValid(state: SimpleCache) {
    var stateIsNotNull = !!state
    const stateIsNotOutdated = isDifferenceLessThanThreshold(state.dateUpdated, 1)

    return stateIsNotNull && stateIsNotOutdated
}

function StateContainsValue(state: SimpleCache, keyValue: string) {
    for (let item of state.value) {
        if (item.key == keyValue) return item
    }

    return null
}

export async function GetGitHubRepositories() {
    if (!StateIsValid(GITHUB_REPOSITORIES)) {
        await LoadGitHubRepositories() 
    }    
    return GITHUB_REPOSITORIES
}

export async function GetGitHubProjects() {
    if (!StateIsValid(GITHUB_PROJECTS)) {
        await LoadGitHubProjects() 
    }    
    return GITHUB_PROJECTS
}

export async function GetGitHubLanguages() {
    if (!StateIsValid(GITHUB_LANGUAGES)) {
        await LoadGitHubLanguages() 
    }    
    return GITHUB_LANGUAGES
}

export async function GetGitHubDocumentsByDocument(documentPath: string) {
    if (!StateIsValid(GITHUB_DOCUMENTS) || !StateContainsValue(GITHUB_DOCUMENTS, documentPath)) {
        await LoadGitHubDocumentsByDocument(documentPath) 
    }    

    return StateContainsValue(GITHUB_DOCUMENTS, documentPath)
}

async function LoadGitHubDocumentsByDocument(documentPath: string) {
    const response = await octokit.request(basePath + documentPath);
    
    const documents = []
    for (let file of response.data) {
        const document = await octokit.request(file.url);
        documents.push({title: file.name, document: Buffer.from(document.data.content, 'base64').toString('ascii')});
    }

    GITHUB_DOCUMENTS.value.push({ key: documentPath, value: documents})
    GITHUB_DOCUMENTS.dateUpdated = new Date()

    return response.status;
}

async function LoadGitHubRepositories() {
    const response = await octokit.request(basePath)
    const repositories = response.data
    
    GITHUB_REPOSITORIES.value = repositories
    GITHUB_REPOSITORIES.dateUpdated = new Date()
    
    return response.status;
}

async function LoadGitHubProjects() {
    const repositories = await GetGitHubRepositories()
    const projects: any = []
    repositories.value.forEach(repo => {
        projects.push({title: repo.name, summary: repo.description, image: `${repo.html_url}/blob/master/thumbnail.png?raw=true`}) 
    });

    GITHUB_PROJECTS.value = projects
    GITHUB_PROJECTS.dateUpdated = new Date()
    
    return projects;
}

async function LoadGitHubLanguages() {
    const repositories = await GetGitHubRepositories()

    const languageURLs = []
    for (let repo of repositories.value) {
        languageURLs.push(repo.languages_url)
    }

    const languageResponses = []
    for (let url of languageURLs) {
        const languageResponse = await octokit.request(url).catch(console.log)        
        languageResponses.push(languageResponse)
    }

    const languages: any = []
    languageResponses.forEach((languageResponse) => {
        const data = languageResponse?.data
        for (var prop in data) {
            if (
                !languages.some((item: any) => {
                    if (item.name === prop) {
                        item.value += data[prop]
                        return true
                    }
                }) 
                ) {
                languages.push({name : prop, value : data[prop]});  
            }
        } 
    })

    GITHUB_LANGUAGES.value = languages
    GITHUB_LANGUAGES.dateUpdated = new Date()

    return languages;
}