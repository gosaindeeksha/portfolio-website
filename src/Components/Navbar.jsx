import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navlinks from "./Navlinks";

function Navbarr() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    // Only allow clicks (not keydowns) to toggle the drawer
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          paddingX: "20px",
          backgroundColor: "black",
          position: "fixed",
          top: 0,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Deeksha Gosain</Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Navlinks />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: "100%", backgroundColor: "black" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Navlinks direction="column" />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbarr;
