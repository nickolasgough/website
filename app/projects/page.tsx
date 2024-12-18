import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ProjectCard from "./card/card";
import styles from "./page.module.scss";
import { projects } from "./projects";

export default function ProjectsPage() {
  return (
    <Stack className={styles.projectsStack} spacing={2}>
      {projects.map((p) => (
        <Box key={p.id} className={styles.projectBox}>
          <ProjectCard project={p}></ProjectCard>
        </Box>
      ))}
    </Stack>
  );
}
