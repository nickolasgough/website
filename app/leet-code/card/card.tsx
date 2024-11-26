import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import React from "react";
import styles from "./card.module.scss";

export interface LeetCodeProblem {
  name: string;
  description: string;
  leetCodeURL: string;
}

export interface LeetCodeCardInput {
  problem: LeetCodeProblem;
}

export default function LeetCodeCard({problem}: LeetCodeCardInput) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card className={styles.projectCard}>
      <CardHeader title={formatName(problem.name)}></CardHeader>
      <CardContent>{problem.description}</CardContent>
      <CardActions className={styles.cardActions}>
        <Link href={problem.leetCodeURL}>LeetCode link</Link>
        <Button className={styles.showHideButton} variant="outlined" size="small" onClick={() => setExpanded(!expanded)}>{!expanded ? "Show code" : "Hide code"}</Button>
      </CardActions>
      <Collapse in={expanded}><pre>Something something</pre></Collapse>
    </Card>
  );
}

function formatName(rawName: string): string {
  return rawName[0].toUpperCase() + rawName.slice(1).replaceAll("-", " ");
}
