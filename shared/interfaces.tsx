export interface Router {
  push(path: string): void;
}

export interface Title {
  id: string;
  title: string;
  startDate: Date;
  endDate?: Date;
}

export interface Institute {
  id: string;
  imageURL: string;
  titles: Title[];
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageURL: string;
  githubRepos: GitHubRepo[];
}

export interface GitHubRepo {
  id: string;
  name: string;
  githubURL: string;
}

export type GitHubContentType = "file" | "dir";

export interface GitHubContent {
  name: string;
  path: string;
  url: string;
  type: GitHubContentType;
  content?: string;
}

export interface LeetCodeJSON {
  name: string;
  url: string;
  imageURL: string;
  solutionURL: string;
  descriptionHTML: string;
}
