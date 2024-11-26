import CardSections from "@/app/resume/card/card";
import { Institute } from "@/shared/interfaces";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { education } from "./history/education";
import { experience } from "./history/experience";
import styles from "./page.module.scss";

export default function ResumePage() {
  return (
    <Stack className={styles.resumeStack} spacing={3}>
      <ResumeSection title="Experience" history={experience}></ResumeSection>
      <ResumeSection title="Education" history={education}></ResumeSection>
    </Stack>
  );
}

interface ResumeSectionInput {
  title: string;
  history: Institute[];
}

function ResumeSection({title, history}: ResumeSectionInput) {
  return (
    <Stack spacing={2}>
      <Box className={styles.titleBox}>{title}</Box>
      <CardSections experience={history}></CardSections>
    </Stack>
  );
}
