"use client";

import MenuIcon from '@mui/icons-material/Menu';
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
import React from 'react';
import { navItems, smallBP } from "./constants";
import styles from "./nav.module.scss";
import useWindowDimensions from './useWindowDimensions';

export default function AppNav({children}: {children: React.ReactNode}) {
  const [open, setOpen] = React.useState(false);
  const navList = buildNavList();
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

function buildNavList() {
  return (
    <List className={styles.navList}>
      {navItems.map((ni) => {
        return (
          <ListItem key={ni.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{ni.icon}</ListItemIcon>
              <ListItemText>{ni.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
