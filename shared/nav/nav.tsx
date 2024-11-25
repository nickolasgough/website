"use client";

import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from "@mui/material/Toolbar";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { smallBP } from "../constants/constants";
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Router } from '../interfaces';
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
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = React.useState(false);
  const navList = buildNavList(router, path);
  const [{width}] = useWindowDimensions();
  const desktopView = width > smallBP;
  return (
    <>
      <AppBar className={styles.appBar} position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon></MenuIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} variant={desktopView ? "permanent" : "temporary"} onClose={() => setOpen(false)}>
        {navList}
      </Drawer>
      <Box className={styles.main}>{children}</Box>
    </>
  );
}

function buildNavList(router: Router, path: string) {
  return (
    <List className={styles.navList}>
      {navItems.map((ni) => {
        return (
          <ListItem key={ni.id} disablePadding>
            <ListItemButton onClick={() => router.push(ni.path)} selected={ni.path === path}>
              <ListItemIcon>{ni.icon}</ListItemIcon>
              <ListItemText>{ni.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
