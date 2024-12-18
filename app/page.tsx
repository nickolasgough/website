import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import styles from "./page.module.scss";

const linkedInURL = "https://www.linkedin.com/in/nickolasgough/";
const gitHubURL = "https://www.github.com/nickolasgough";

export default function AppHome() {
  return (
    <>
      <Container className={styles.homeBox}>
        <Grid className={styles.gridBox} container spacing={2} columns={2}>
          <Grid className={styles.gridCol} size={{ md: 1, sm: 2 }}>
            <Paper className={styles.introPaper}>
              <Box className={styles.introBox}>
                <p>Hey there!</p>
                <p>Welcome to my humble website! My name is Nick, my pronouns are he/him/his, and I'm based in Saskaton, SK, Canada.</p>
                <p>I have 7+ years of experience working as a full-stack software developer with the Google tech stack, particularly with Go, Angular, and the Google Cloud Platform.</p>
                <p>I've worked on several different teams and projects throughout my career and I have experience working as a Senior Software Developer leading and mentoring a team of 5 developers, a project manager, and a designer. I've also been working a remote/hybrid role since 2020.</p>
                <Box className={styles.linksBox}>
                  <Box className={styles.linkBox}>
                    <Link href="tel:+13064915869">+1 (306) 491-5869</Link>
                  </Box><Box className={styles.linkBox}>
                    <Link href="mailto:nickolas.v.gough@gmail.com">nickolas.v.gough@gmail.com</Link>
                  </Box>
                  <Box className={styles.linkBox}>
                    <span>
                      <Button component="a" href={linkedInURL} target="_blank" variant="outlined" size="small" endIcon={<LinkedInIcon></LinkedInIcon>} sx={{ textTransform: "none" }}>LinkedIn</Button> <Button component="a" href={gitHubURL} target="_blank" variant="outlined" size="small" endIcon={<GitHubIcon></GitHubIcon>} sx={{ textTransform: "none" }}>GitHub</Button>
                    </span>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid className={styles.gridCol} size={1}>
            <Avatar alt="Nick's profile picture" src="/nick.png" sx={{
              height: "auto",
              maxHeight: "70vh",
              width: "100%",
              maxWidth: "80vw",
              margin: "0 auto"
            }}></Avatar>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
