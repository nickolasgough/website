import { GitHubRepo, Project } from "@/shared/interfaces";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import styles from "./card.module.scss";

export interface ProjectCardInput {
  project: Project;
}

export default function ProjectCard({project}: ProjectCardInput) {
  let cardMedia = (<></>);
  if (project.imageURL) {
    cardMedia = (<CardMedia component="img" height="200px" image={project.imageURL}></CardMedia>);
  }
  return (
    <Card className={styles.projectCard}>
      <CardHeader title={project.name}></CardHeader>
      {cardMedia}
      <CardContent>{project.description}</CardContent>
      <CardActions>
        <ProjectLinks githubRepos={project.githubRepos}></ProjectLinks>
      </CardActions>
    </Card>
  );
}

interface ProjectLinksInput {
  githubRepos: GitHubRepo[];
}

function ProjectLinks({githubRepos}: ProjectLinksInput) {
  if (!githubRepos.length) {
    return (<></>);
  }

  let links = (<Link href={githubRepos[0].githubURL}>GitHub link</Link>);
  if (githubRepos.length > 1) {
    links = (
      <>
        <span>GitHub links: </span>{githubRepos.map((gr) => {
          return (
            <Link key={gr.id} href={gr.githubURL}>{gr.name}</Link>
          );
        })}
      </>
    );
  }
  return (
    <>{links}</>
  );
}