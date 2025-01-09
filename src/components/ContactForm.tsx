import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const ContactUs: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 6,
        backgroundColor: "#000000",
      }}
      id="contact"
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: "primary.main",
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100%",
              padding: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2, color: "#ffffff" }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, color: "#ffffff" }}
            >
              📍 2095 Pennington Rd, Ewing Township, NJ 08618
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, color: "#ffffff" }}
            >
              📞 Phone: (609) 583-5478
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 1, color: "#ffffff" }}
            >
              ✉️ Email: contact@jazzysgarage.com
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2, color: "#ffffff" }}>
              🕒 Hours: Monday - Saturday: 8:00 AM - 7:00 PM
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="tel:(609) 583-5478"
              sx={{ marginTop: 2 }}
            >
              Call Us Now
            </Button>
          </Box>
        </Grid>

        {/* Google Maps Embed */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.3170295402136!2d-74.78227242397263!3d40.25972007194944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3f4dc44cc0d19%3A0xc8cf3b6d369b46ef!2s2095%20Pennington%20Rd%2C%20Ewing%20Township%2C%20NJ%2008618%2C%20USA!5e0!3m2!1sen!2sus!4v1692466887246!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Garage Location"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
