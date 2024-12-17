import { leetCodeGitHubBaseURL, leetCodeProblemsBaseURL } from "./constants";

export function buildGitHubFileURL(path: string, filename: string): string {
  return `${leetCodeGitHubBaseURL}/${path}/${filename}`;
}

export function buildLeetCodeProblemURL(path: string): string {
  return `${leetCodeProblemsBaseURL}/${path}`;
}
