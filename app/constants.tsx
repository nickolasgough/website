import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const smallBP = 600;
export const mediumBP = 900;
export const largeBP = 1200;

export interface NavItem {
  id: string;
  text: string;
  icon: React.ReactElement;
  path: string;
}

export const navItems: NavItem[] = [
  {id: "experience", text: "Experience", icon: (<WorkHistoryIcon></WorkHistoryIcon>), path: "/experience"},
  {id: "projects", text: "Projects", icon: (<EngineeringIcon></EngineeringIcon>), path: "/projects"},
  {id: "leet-code", text: "Leet code", icon: (<CodeIcon></CodeIcon>), path: "/leet-code"},
];
