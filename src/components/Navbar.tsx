import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/assets/logo.jpg"; // Replace with the correct path to your logo

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#F3F3F3",
          color: "#000000",
          height: 100, // Increased navbar height
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "unset",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 2,
          }}
        >
          {/* Left Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="#services" sx={{ fontSize: 16, color: "#000000" }}>
              Services
            </Button>

            <Button href="#contact" sx={{ fontSize: 16, color: "#000000" }}>
              Timings
            </Button>
          </Box>

          {/* Center Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Jazzy's Garage Logo"
              sx={{
                height: 100, // Adjust logo size
              }}
            />
          </Box>

          {/* Right Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="#about" sx={{ fontSize: 16, color: "#000000" }}>
              About Us
            </Button>
            <Button href="#contact" sx={{ fontSize: 16, color: "#000000" }}>
              Contact
            </Button>
          </Box>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#000000" }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
          }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            <ListItem component="a" href="#services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem component="a" href="#about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem component="a" href="#contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
