import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Institute } from "../../../shared/interfaces";
import styles from "./card.module.scss";

export default function CardSections({experience}: {experience: Institute[]}) {
  const sections = experience.map((section) => {
    return (
      <CardSection key={section.id} section={section}></CardSection>
    );
  });
  return (
    <Stack className={styles.pageStack}>
      {sections}
    </Stack>
  );
}

function CardSection({section}: {section: Institute}) {
  let highlights = (<></>);
  if (section.highlights?.length) {
    highlights = (
      <>
        <Box className={styles.subsectionTitle}>Highlights</Box>
        <Box className={styles.subsectionText}>
          <ul>
            {section.highlights.map((h, i) => {
              return (<li key={i}>{h}</li>);
            })}
          </ul>
        </Box>
      </>
    );
  }
  return (
    <Paper className={styles.sectionPaper}>
      <Stack className={styles.sectionBox}>
        <Box>
          <img className={styles.companyLogo} src={section.imageURL}></img>
        </Box>
        <Stack>
          {section.titles.map((p) => {
            const formatter = Intl.DateTimeFormat("en", {dateStyle: "medium"});
            const startDate = formatter.format(p.startDate);
            const endDate = formatter.format(p.endDate);
            return (
              <Box className={styles.titleBox} key={p.id}>
                <span className={styles.titleName}>{p.title}</span>
                <span>{startDate} - {endDate}</span>
              </Box>
            );
          })}
        </Stack>
        <Box className={styles.subsectionTitle}>Summary</Box>
        <Box className={styles.subsectionText}>{section.summary}</Box>
        {highlights}
      </Stack>
    </Paper>
  );
}
