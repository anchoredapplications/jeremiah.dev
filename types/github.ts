import { Endpoints } from "@octokit/types";

export interface SimpleCache<T> {
    value: T[], 
    dateUpdated: Date | null 
}

export type GithubRepository = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type GithubDocument = Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];

export type GithubLanguages = Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"];

export type InternalGithubProject = GithubRepository & { image?: string };

export interface InternalGithubDocument {
    key: string,
    documents: {
        title: string,
        document: string;
    }[]
}

export interface InternalGithubLanguages {
    key: string,
    name: string,
    value: number;
}
