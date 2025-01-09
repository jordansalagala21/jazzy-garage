import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ padding: 6, backgroundColor: "#000000" }} id="about">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: "primary.main",
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{
          marginBottom: 6,
          maxWidth: 800,
          marginX: "auto",
          color: "text.primary",
        }}
      >
        Jazzy's Garage has been serving the community with reliable and
        professional auto repair services for over 15 years. Our skilled
        technicians are committed to providing top-notch repairs, exceptional
        customer service, and honest advice. From routine maintenance to complex
        repairs, we ensure your vehicle is in the best hands.
      </Typography>
    </Box>
  );
};

export default AboutUs;
