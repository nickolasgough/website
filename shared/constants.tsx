export const smallBP = 600;
export const mediumBP = 900;
export const largeBP = 1200;

export const gitHubAccessToken = process.env.GITHUB_ACCESS_TOKEN;

export const gitHubRequestHeaders = {
  method: "GET",
  headers: {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${gitHubAccessToken}`,
  }
};

export const leetCodeGitHubBaseURL = "https://api.github.com/repos/nickolasgough/leet-code/contents";
export const leetCodeProblemsBaseURL = "https://leetcode.com/problems";
