const { Octokit } = require("octokit");
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.API_GITHUB_SITE_AUTH ?? ""
});

//STATE VARIABLES
const GITHUB_REPOSITORIES = { value: [], dateUpdated: null }
const GITHUB_PROJECTS = { value: [], dateUpdated: null }
const GITHUB_LANGUAGES = { value: [], dateUpdated: null }
const GITHUB_DOCUMENTS = { value: [], dateUpdated: null }

function StateIsValid(state) {
    var stateIsNotNull = !!state
    const ONE_HOUR = 60 * 60 * 1000
    var stateIsNotOutdated = ((new Date()) - state.dateUpdated) < ONE_HOUR

    return stateIsNotNull && stateIsNotOutdated
}

function StateContainsValue(state, keyValue) {
    for (let item of state.value) {
        if (item.key == keyValue) return item
    }

    return null
}

async function GetGitHubRepositories() {
    if (!StateIsValid(GITHUB_REPOSITORIES)) {
        await LoadGitHubRepositories() 
    }    
    return GITHUB_REPOSITORIES
}

async function GetGitHubProjects() {
    if (!StateIsValid(GITHUB_PROJECTS)) {
        await LoadGitHubProjects() 
    }    
    return GITHUB_PROJECTS
}

async function GetGitHubLanguages() {
    if (!StateIsValid(GITHUB_LANGUAGES)) {
        await LoadGitHubLanguages() 
    }    
    return GITHUB_LANGUAGES
}

async function GetGitHubDocumentsByDocument(documentPath) {
    if (!StateIsValid(GITHUB_DOCUMENTS) || !StateContainsValue(GITHUB_DOCUMENTS, documentPath)) {
        await LoadGitHubDocumentsByDocument(documentPath) 
    }    

    return StateContainsValue(GITHUB_DOCUMENTS, documentPath)
}

async function LoadGitHubDocumentsByDocument(documentPath) {
    const response = await octokit.request(process.env.GITHUB_API_URL + documentPath);
    
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
    const response = await octokit.request(process.env.GITHUB_API_URL + process.env.GITHUB_API_REPOS_URL)
    const repositories = response.data
    
    GITHUB_REPOSITORIES.value = repositories
    GITHUB_REPOSITORIES.dateUpdated = new Date()
    
    return response.status;
}

async function LoadGitHubProjects() {
    const repositories = await GetGitHubRepositories()
    const projects = []
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
        const languageResponse = await octokit.request(url).catch(error => console.log(error))        
        languageResponses.push(languageResponse)
    }

    const languages = []
    languageResponses.forEach((languageResponse) => {
        const data = languageResponse.data
        for (var prop in data) {
            if (
                !languages.some(item => {
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

module.exports = { GetGitHubLanguages, GetGitHubProjects, GetGitHubDocumentsByDocument};