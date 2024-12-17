"use client";

import { gitHubRequestHeaders, leetCodeGitHubBaseURL } from "@/shared/constants";
import useFetch from "@/shared/hooks/useFetch";
import { GitHubContent } from "@/shared/interfaces";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import LeetCodeCard from "./card/card";
import styles from "./page.module.scss";

export default function LeetCodePage() {
  const [leetCodeList] = useFetch<GitHubContent[]>(leetCodeGitHubBaseURL, gitHubRequestHeaders);
  const leetCodeDirs = leetCodeList?.filter((lc) => lc.type === "dir");
  const codeCards = leetCodeDirs?.map((d) => {
    return (
      <Box key={d.name}><LeetCodeCard leetCode={d}></LeetCodeCard></Box>
    );
  });
  const loadingCards = (
    <>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
      <LoadingCard></LoadingCard>
    </>
  );
  return (
    <Stack className={styles.leetCodesStack} spacing={2}>
      {leetCodeDirs?.length ? codeCards : loadingCards}
    </Stack>
  );
}

function LoadingCard() {
  return (
    <Card>
      <CardHeader title={
        <Skeleton variant="rounded" height={32} width={200}></Skeleton>
      }></CardHeader>
      <CardContent>
        <Skeleton variant="rounded" height={150}></Skeleton>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Skeleton variant="rounded" height={32} width={100}></Skeleton>
        <Skeleton variant="rounded" height={32} width={100}></Skeleton>
      </CardActions>
    </Card>
  );
}
