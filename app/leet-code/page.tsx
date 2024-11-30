"use client";

import { leetCodeJSONURL } from "@/shared/constants/constants";
import useFetch from "@/shared/hooks/useFetch";
import { LeetCodeJSON } from "@/shared/interfaces";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LeetCodeCard from "./card/card";
import styles from "./page.module.scss";

export default function LeetCodePage() {
  const [leetCodes] = useFetch<LeetCodeJSON[]>(leetCodeJSONURL);
  if (!leetCodes) {
    return (<></>);
  }
  return (
    <Stack className={styles.leetCodesStack} spacing={2}>
      {leetCodes.map((p) => {
        return (
          <Box key={p.name}><LeetCodeCard problem={p}></LeetCodeCard></Box>
        );
      })}
    </Stack>
  );
}
