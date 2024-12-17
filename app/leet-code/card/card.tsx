"use client";

import { gitHubRequestHeaders } from "@/shared/constants";
import fetchData from "@/shared/fetch";
import { GitHubContent } from "@/shared/interfaces";
import { buildGitHubFileURL, buildLeetCodeProblemURL } from "@/shared/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import styles from "./card.module.scss";

const codeTagStyling = "padding: 4px; border-radius: 6px; background-color: gainsboro;";
const tableTagStyling = "border: 1px grey solid; border-collapse: collapse;";
const tableCellStyling = tableTagStyling + "padding: 4px;";
const preStyling = "white-space: pre-wrap;";

export interface LeetCodeCardInput {
  leetCode: GitHubContent;
}

export default function LeetCodeCard({ leetCode }: LeetCodeCardInput) {
  const [descriptionHTML, setDescriptionHTML] = React.useState("");
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  const name = leetCode?.name
    ? leetCode.name[0].toUpperCase() + leetCode.name.slice(1).replaceAll("-", " ")
    : "";
  const url = buildLeetCodeProblemURL(leetCode.path);
  fetchData<GitHubContent>(buildGitHubFileURL(leetCode.path, "description.html"), gitHubRequestHeaders)
    .then((d) => {
      if (d?.content) {
        setDescriptionHTML(addDescriptionStyling(atob(d.content)));
      }
    });
  fetchData<GitHubContent>(buildGitHubFileURL(leetCode.path, "main.go"), gitHubRequestHeaders)
    .then((c) => {
      if (c?.content) {
        setCode(atob(c.content));
      }
    });
  const handleExpansion = () => setExpanded(!expanded);
  return (
    <Card>
      <CardHeader title={name}></CardHeader>
      <CardContent>{descriptionHTML ? <span dangerouslySetInnerHTML={{ __html: descriptionHTML }}></span> : <Skeleton variant="rectangular" height={200}></Skeleton>}</CardContent>
      <CardActions className={styles.cardActions}>
        <Link href={url} target="_blank" rel="noreferrer">LeetCode link</Link>
        <Button className={styles.showHideButton} variant="outlined" size="small" onClick={handleExpansion}>
          {!expanded ? "Show code" : "Hide code"}
        </Button>
      </CardActions>
      <Collapse in={expanded}>{code ? <LeetCodeCode code={code}></LeetCodeCode> : <Skeleton variant="rectangular" height={200}></Skeleton>}</Collapse>
    </Card>
  );
}

function addDescriptionStyling(descriptionHTML: string): string {
  descriptionHTML = descriptionHTML.replaceAll("<code>", `<code style="${codeTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<table>", `<table style="${tableTagStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<th>", `<th style="${tableCellStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<td>", `<td style="${tableCellStyling}">`);
  descriptionHTML = descriptionHTML.replaceAll("<pre>", `<pre style="${preStyling}">`);
  return descriptionHTML;
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
