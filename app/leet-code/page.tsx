"use client";

import { leetCodeContentsURL } from "@/shared/constants/constants";
import useFetch from "@/shared/hooks/useFetch";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LeetCodeCard, { LeetCodeProblem } from "./card/card";
import styles from "./page.module.scss";

export interface GitHubDir {
  name: string;
}

export default function LeetCodePage() {
  const [leetCodes] = useFetch<GitHubDir[]>(leetCodeContentsURL, {
    headers: {
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    }
  });
  if (!leetCodes) {
    return (<></>);
  }

  console.log(leetCodes);
  const problems: LeetCodeProblem[] = leetCodes.map((lc) => {
    return {
      name: lc.name,
      description: "something",
      leetCodeURL: `https://leetcode.com/problems/${lc.name}`,
    };
  });
  console.log(problems);
  return (
    <Stack className={styles.leetCodesStack} spacing={2}>
      {problems.map((p) => {
        return (
          <Box key={p.name}><LeetCodeCard problem={p}></LeetCodeCard></Box>
        );
      })}
    </Stack>
  );
}
