import { Institute } from "@/shared/interfaces";

export const experience: Institute[] = [
  // Vendasta
  {
    id: "vendasta",
    imageURL: "/vendasta.png",
    titles: [
      {
        id: "snr-dev-ven",
        title: "Senior full-stack software developer",
        startDate: new Date("2023-02"),
        endDate: new Date("2024-09"),
      },
      {
        id: "dev-vend",
        title: "Full-stack software developer",
        startDate: new Date("2019-05"),
        endDate: new Date("2023-01"),
      },
      {
        id: "dev-int-ven",
        title: "Full-stack software developer intern",
        startDate: new Date("2017-05"),
        endDate: new Date("2018-08"),
      },
    ],
    summary: "Vendasta is where I've spent most of my professional career, so it's where I've learned most of my skills. During my time at Vendasta, I had the opportunity to work on several teams and projects, with each one in a unique domain.",
    highlights: [
      "Led and planned projects on a full-stack cross-functional team by conducting research and proposing solutions with spikes and RFCs that included code analysis and diagrams",
      "Made critical code contributions in both the frontend (Angular, TypeScript) and backend (Go, GCP) as the team’s technical lead while also reviewing peer work (GitHub PRs)",
      "Worked and communicated with project managers, designers, and stakeholders to influence direction by providing insight into the feasibility and estimation of work",
      "Mentored junior developers and presented learnings to all of R&D",
      "Monitored the software’s health with GCP logs and Datadog monitors and responded to critical bugs by investigating, triaging, and delivering fixes",
      "Solved complex problems in various domains, including orders, inventory, and billing",
      "Integrated internal software with external software, including Google, Microsoft, and Twilio",
    ]
  },
  // University of Saskatchewan
  {
    id: "u-of-s",
    imageURL: "/university-of-saskatchewan.png",
    titles: [
      {
        id: "res-ass-uos",
        title: "Undergraduate Student Research Assistant",
        startDate: new Date("2016-05"),
        endDate: new Date("2016-08"),
      },
    ],
    summary: "The University of Saskatchewan is where I studied my craft, but it's also where I got my first job developing software.",
    highlights: [
      "Worked in the HCI lab to develop experimental software by extending an open-source PDF viewer built with Java and conducted and analyzed data from a research study with the software",
    ]
  },
];
