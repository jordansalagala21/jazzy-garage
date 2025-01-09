import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"; // Quote icon

const testimonials = [
  {
    feedback:
      "Jazzy's Garage is the best in town! They fixed my car quickly and at a reasonable price. Highly recommend their services!",
  },
  {
    feedback:
      "Fantastic service! The team was professional, and my car has never run better. I’ll definitely come back for future maintenance.",
  },
  {
    feedback:
      "Excellent customer service and great quality work. They explained everything clearly and didn’t charge for unnecessary repairs.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ padding: 6, backgroundColor: "#f4f4f4" }} id="testimonials">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: "primary.main",
        }}
      >
        What Our Customers Say
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{
          marginBottom: 6,
          maxWidth: 800,
          marginX: "auto",
          color: "text.secondary",
        }}
      >
        Hear from our satisfied customers about their experience with Jazzy's
        Garage.
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: 2,
            }}
          >
            {/* Quote Icon */}
            <FormatQuoteIcon
              sx={{
                fontSize: 48,
                color: "primary.main",
                marginBottom: 2,
              }}
            />
            {/* Feedback */}
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                marginBottom: 2,
                color: "text.secondary",
              }}
            >
              "{testimonial.feedback}"
            </Typography>
            {/* Name */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
              }}
            ></Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
