import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { navItems } from "./constants";
import styles from "./page.module.scss";

export default function AppHome() {
  const navLinks = navItems.map((ni) => {
    return (
      <Link className={styles.link} href={ni.path}>
        {ni.icon} <span className={styles.linkText}>{ni.text}</span>
      </Link>
    );
  });
  return (
    <>
      <Container className={styles.homeBox}>
        <Avatar className={styles.nickPhoto} alt="Nick's profile picture" src="/nick.png"></Avatar>
        <Container className={styles.introBox}>
          <p>Hey there!</p>
          <p>Welcome to my website! Click one of the following links or click the menu in the top-left corner to learn more about me! 😁</p>
        </Container>
        <Box className={styles.linksBox}>{navLinks}</Box>
      </Container>
    </>
  );
}
