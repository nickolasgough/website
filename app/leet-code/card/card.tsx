"use client";

import fetchData from "@/shared/fetch";
import { LeetCodeJSON } from "@/shared/interfaces";
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

const codeTagStyling = "padding: 4px; border-radius: 6px; background-color: gainsboro;";
const tableTagStyling = "border: 1px grey solid; border-collapse: collapse;";
const tableCellStyling = tableTagStyling + "padding: 4px;"

export interface LeetCodeCardInput {
  problem: LeetCodeJSON;
}

export default function LeetCodeCard({problem}: LeetCodeCardInput) {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const handleExpansion = () => {
    const newExpandedVal = !expanded;
    setExpanded(newExpandedVal);
    if (newExpandedVal && !code) {
      fetchData<string>(problem.solutionURL, {contentType: "text"})
        .then((c) => setCode(c));
    }
  };
  const descriptionHTML = addDescriptionStyling(problem.descriptionHTML);
  return (
    <Card>
      <CardHeader title={problem.name}></CardHeader>
      <CardContent><span dangerouslySetInnerHTML={{__html: descriptionHTML}}></span></CardContent>
      <CardActions className={styles.cardActions}>
        <Link href={problem.url} target="_blank" rel="noreferrer">LeetCode link</Link>
        <Button className={styles.showHideButton} variant="outlined" size="small" onClick={handleExpansion}>
          {!expanded ? "Show code" : "Hide code"}
        </Button>
      </CardActions>
      <Collapse in={expanded}><LeetCodeCode code={code}></LeetCodeCode></Collapse>
    </Card>
  );
}

function addDescriptionStyling(descriptionHTML: string): string {
  descriptionHTML = descriptionHTML.replaceAll("<code>", `<code style="${codeTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<table>", `<table style="${tableTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<th>", `<th style="${tableCellStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<td>", `<td style="${tableCellStyling}">`);
  return descriptionHTML;
}

interface LeetCodeCodeInput {
  code: string;
}

function LeetCodeCode({code}: LeetCodeCodeInput) {
  return (
    <pre className={styles.preTag}>
      <Box className={styles.codeBox}><code>{code}</code></Box>
    </pre>
  );
}
