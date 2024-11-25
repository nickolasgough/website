import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import styles from "./page.module.scss";

export default function AppHome() {
  return (
    <>
      <Container className={styles.homeBox}>
        <Grid className={styles.gridBox} container spacing={2} columns={2}>
          <Grid className={styles.gridCol} size={{md: 1, sm: 2}}>
            <Container className={styles.introBox}>
              <p>Hey there!</p>
              <p>Welcome to my humble website! My name is Nick, my pronouns are he/him/his, and I'm based in Saskaton, SK, Canada.</p>
              <p>I have 7+ years of experience working as a full-stack software developer with the Google tech stack, particularly with Go, Angular, and the Google Cloud Platform.</p>
              <p>I've worked on several different teams and projects throughout my career and I have experience working as a Senior Software Developer leading and mentoring a team of 5 developers, a project manager, and a designer. I've also been working a remote/hybrid role since 2020.</p>
            </Container>
          </Grid>
          <Grid className={styles.gridCol} size={{md: 1, sm: 2}}>
            <Avatar className={styles.nickPhoto} alt="Nick's profile picture" src="/nick.png"></Avatar>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
