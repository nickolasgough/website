import { gitHubRequestHeaders, leetCodeGitHubBaseURL } from "@/shared/constants";
import { GitHubContent } from "@/shared/interfaces";
import { buildGitHubFileURL } from "@/shared/utils";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LeetCodeCard from "./card/card";
import styles from "./page.module.scss";

export default async function LeetCodePage() {
  const leetCodeList: GitHubContent[] = await fetchGitHubDirectories();
  const leetCodeDirs = leetCodeList?.filter((lc) => lc.type === "dir");
  const codeCards = leetCodeDirs?.map(async (d) => {
    const path = d.path;
    const descriptionHTML = addStylingToDescriptionHTML(
      await fetchGitHubFileContents(d.path, "description.html")
    );
    const code = await fetchGitHubFileContents(d.path, "main.go");
    return (
      <Box key={d.name}><LeetCodeCard leetCode={{ path, descriptionHTML, code }}></LeetCodeCard></Box>
    );
  });
  return (
    <Stack className={styles.leetCodesStack} spacing={2}>
      {codeCards}
    </Stack>
  );
}

async function fetchGitHubDirectories(): Promise<GitHubContent[]> {
  const res = await fetch(leetCodeGitHubBaseURL, gitHubRequestHeaders);
  const resJson = await res.json();
  return resJson;
}

async function fetchGitHubFileContents(path: string, filename: string): Promise<string> {
  const url = buildGitHubFileURL(path, filename);
  const res = await fetch(url, gitHubRequestHeaders);
  const resJson = await res.json();
  return atob(resJson.content);
}


function addStylingToDescriptionHTML(descriptionHTML: string): string {
  const codeTagStyling = "padding: 4px; border-radius: 6px; background-color: gainsboro;";
  const tableTagStyling = "border: 1px grey solid; border-collapse: collapse;";
  const tableCellStyling = tableTagStyling + "padding: 4px;";
  const preStyling = "white-space: pre-wrap;";

  descriptionHTML = descriptionHTML.replaceAll("<code>", `<code style="${codeTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<table>", `<table style="${tableTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<th>", `<th style="${tableCellStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<td>", `<td style="${tableCellStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<pre>", `<pre style="${preStyling}">`);
  return descriptionHTML;
}
