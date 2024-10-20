import config from "@/config.json";
import { Octokit } from "octokit";
import { GithubDocument, GithubRepository, InternalGithubDocument, InternalGithubLanguages, SimpleCache } from "@/types/github";

const octokit = new Octokit({
    auth: ""
});

const basePath = config.github.api + config.github.repos

//STATE VARIABLES
const GITHUB_REPOSITORIES: SimpleCache<GithubRepository> = { value: [], dateUpdated: null }
const GITHUB_LANGUAGES: SimpleCache<InternalGithubLanguages> = { value: [], dateUpdated: null }
const GITHUB_DOCUMENTS: SimpleCache<InternalGithubDocument> = { value: [], dateUpdated: null }

function isDifferenceLessThanThreshold(date: Date | null, thresholdInHours: number): boolean {
    if (!date) return false;
    const differenceInMilliseconds = Math.abs(new Date().getTime() - date.getTime());
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    return differenceInHours < thresholdInHours;
}

function stateIsValid(state: SimpleCache<GithubRepository | InternalGithubLanguages | InternalGithubDocument>) {
    var stateIsNotNull = !!state
    const stateIsNotOutdated = isDifferenceLessThanThreshold(state.dateUpdated, 1)

    return stateIsNotNull && stateIsNotOutdated
}

function stateContainsValue(state: SimpleCache<InternalGithubLanguages | InternalGithubDocument>, keyValue: string) {
    for (const item of state.value) {
        if (item.key === keyValue) return item
    }

    return null
}

export async function GetGitHubRepositories() {
    if (!stateIsValid(GITHUB_REPOSITORIES)) {
        await LoadGitHubRepositories() 
    }    
    return GITHUB_REPOSITORIES
}

export async function GetGitHubLanguages() {
    if (!stateIsValid(GITHUB_LANGUAGES)) {
        await LoadGitHubLanguages() 
    }    
    return GITHUB_LANGUAGES
}

export async function GetGitHubDocumentsByDocument(documentPath: string) {
    if (!stateIsValid(GITHUB_DOCUMENTS) || !stateContainsValue(GITHUB_DOCUMENTS, documentPath)) {
        await LoadGitHubDocumentsByDocument(documentPath) 
    }    

    return stateContainsValue(GITHUB_DOCUMENTS, documentPath)
}

async function LoadGitHubDocumentsByDocument(documentPath: string) {
    const response = await octokit.request(basePath + documentPath);
    
    const documents = []
    for (let file of response.data) {
        const document = await octokit.request(file.url);
        documents.push({title: file.name, document: Buffer.from(document.data.content, 'base64').toString('ascii')});
    }

    GITHUB_DOCUMENTS.value.push({ key: documentPath, documents: documents})
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