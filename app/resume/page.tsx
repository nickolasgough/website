import CardSections from "@/app/resume/card/card";
import { Institute } from "@/shared/interfaces";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { education } from "./history/education";
import { experience } from "./history/experience";
import styles from "./page.module.scss";

export default function ResumePage() {
  return (
    <Stack className={styles.resumeStack}>
      <ResumeSection title="Experience" history={experience}></ResumeSection>
      <Box className={styles.resumeSection}>
        <ResumeSection title="Education" history={education}></ResumeSection>
      </Box>
    </Stack>
  );
}

interface ResumeSectionInput {
  title: string;
  history: Institute[];
}

function ResumeSection({title, history}: ResumeSectionInput) {
  return (
    <Box>
      <Box className={styles.titleBox}>{title}</Box>
      <CardSections experience={history}></CardSections>
    </Box>
  );
}
