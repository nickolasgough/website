import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export interface NavItem {
  id: string;
  text: string;
  icon: React.ReactElement;
  path: string;
}
export const navItems: NavItem[] = [
  {id: "about-me", text: "About me", icon: (<PersonIcon></PersonIcon>), path: "/about-me"},
  {id: "experience", text: "Experience", icon: (<WorkHistoryIcon></WorkHistoryIcon>), path: "/experience"},
  {id: "projects", text: "Projects", icon: (<EngineeringIcon></EngineeringIcon>), path: "/projects"},
  {id: "leet-code", text: "Leet code", icon: (<CodeIcon></CodeIcon>), path: "/leet-code"},
];
