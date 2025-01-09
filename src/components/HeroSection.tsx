import React from "react";
import { Box, Typography, Button } from "@mui/material";
import garage from "/assets/garage.jpg"; // Ensure the logo path is correct

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "text.primary",
        minHeight: "70vh", // Slightly taller section
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 4,
        backgroundImage: `url(${garage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        },
      }}
    >
      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1, // Ensures content is above the overlay
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Erica One",
            marginBottom: 2,
            color: "#FFFFFF", // White text for better contrast
          }}
        >
          Welcome to Jazzy's Garage
        </Typography>

        {/* Call-to-Action Button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#contact"
          sx={{
            paddingX: 4,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Contact Info
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
