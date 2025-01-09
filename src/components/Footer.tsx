import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "text.",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Jazzy's Garage. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        <Link
          href="https://jordansalagala.com"
          color="inherit"
          underline="hover"
        >
          Made with ❤️ by Jordan Salagala
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
