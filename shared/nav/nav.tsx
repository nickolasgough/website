"use client";

import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from "./nav.module.scss";

export interface NavItem {
  id: string;
  text: string;
  icon: React.ReactElement;
  path: string;
}

export const navItems: NavItem[] = [
  {id: "home", text: "Home", icon: (<HomeIcon></HomeIcon>), path: "/"},
  {id: "resume", text: "Resume", icon: (<WorkHistoryIcon></WorkHistoryIcon>), path: "/resume"},
  {id: "projects", text: "Projects", icon: (<EngineeringIcon></EngineeringIcon>), path: "/projects"},
  {id: "leet-code", text: "Leet code", icon: (<CodeIcon></CodeIcon>), path: "/leet-code"},
];

export default function AppNav({children}: {children: React.ReactNode}) {
  const path = usePathname();
  const initTabValue = navItems.findIndex((ni) => ni.path === path);
  const [tabValue, setTabValue] = React.useState(initTabValue);
  const onTabChange = (e: React.SyntheticEvent, v: number) => setTabValue(v);
  return (
    <>
      <AppBar className={styles.appBar} color="inherit" position="fixed">
        <Tabs value={tabValue} role="navigation" textColor="primary" indicatorColor="primary" onChange={onTabChange} centered>
          {navItems.map((ni) => {
            return (
              <Tab key={ni.id} component="a" label={ni.text} href={ni.path} icon={ni.icon} iconPosition="start"></Tab>
            );
          })}
        </Tabs>
      </AppBar>
      <Box className={styles.main}>{children}</Box>
    </>
  );
}
