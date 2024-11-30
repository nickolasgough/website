import { LeetCodeJSON } from "@/shared/interfaces";
import { CardHeader, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import React from "react";
import styles from "./card.module.scss";

export interface LeetCodeCardInput {
  problem: LeetCodeJSON;
}

export default function LeetCodeCard({problem}: LeetCodeCardInput) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card>
      <CardHeader title={problem.name}></CardHeader>
      <CardMedia component="img" image={problem.imageURL} width="300px"></CardMedia>
      <CardActions className={styles.cardActions}>
        <Link href={problem.url} target="_blank" rel="noreferrer">LeetCode link</Link>
        <Button className={styles.showHideButton} variant="outlined" size="small" onClick={() => setExpanded(!expanded)}>{!expanded ? "Show code" : "Hide code"}</Button>
      </CardActions>
      <Collapse in={expanded}><pre>Something something</pre></Collapse>
    </Card>
  );
}
