"use client";

import { LeetCode } from "@/shared/interfaces";
import { buildLeetCodeProblemURL } from "@/shared/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import React from "react";
import styles from "./card.module.scss";

export interface LeetCodeCardInput {
  leetCode: LeetCode;
}

export default function LeetCodeCard({ leetCode }: LeetCodeCardInput) {
  const [expanded, setExpanded] = React.useState(false);
  const name = leetCode?.path
    ? leetCode.path[0].toUpperCase() + leetCode.path.slice(1).replaceAll("-", " ")
    : "";
  const { descriptionHTML, code } = leetCode;
  const url = buildLeetCodeProblemURL(leetCode.path);
  const handleExpansion = () => setExpanded(!expanded);
  return (
    <Card>
      <CardHeader title={name}></CardHeader>
      <CardContent dangerouslySetInnerHTML={{ __html: descriptionHTML }}></CardContent>
      <CardActions className={styles.cardActions}>
        <Link href={url} target="_blank" rel="noreferrer">LeetCode link</Link>
        <Button className={styles.showHideButton} variant="outlined" size="small" onClick={handleExpansion}>
          {!expanded ? "Show code" : "Hide code"}
        </Button>
      </CardActions>
      <Collapse in={expanded}>
        <LeetCodeCode code={code}></LeetCodeCode>
      </Collapse>
    </Card>
  );
}

interface LeetCodeCodeInput {
  code: string;
}

function LeetCodeCode({ code }: LeetCodeCodeInput) {
  return (
    <pre className={styles.preTag}>
      <Box className={styles.codeBox}><code>{code}</code></Box>
    </pre>
  );
}
