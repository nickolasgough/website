import { Project } from "@/shared/interfaces";

export const projects: Project[] = [
  {
    id: "website-proj",
    name: "This website",
    description: "This website is fairly simple and I built it to serve as a central hub to showcase my work and skills.",
    technologies: [],
    imageURL: "/coming-soon.png",
    githubRepos: [
      {id: "website-link", name: "", githubURL: "https://github.com/nickolasgough/website"}
    ],
  },
  {
    id: "cloud-9-proj",
    name: "Cloud 9",
    description: "Cloud 9 is a social media web app I built to challenge myself. Reddit was my inspiration because I'm an avid user and I've always been curious about the technical problems the Reddit R&D team have solved.",
    technologies: ["Angular", "Go", "GCP", "OpenAPI", "Docker"],
    imageURL: "/coming-soon.png",
    githubRepos: [
      {id: "client-link", name: "Cloud 9 Client", githubURL: "https://github.com/nickolasgough/cloud-9-client"},
      {id: "iam-link", name: "Cloud 9 IAM", githubURL: "https://github.com/nickolasgough/cloud-9-iam"},
    ],
  },
];
