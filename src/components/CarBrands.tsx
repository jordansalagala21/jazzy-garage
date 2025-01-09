import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

const brands = [
  { name: "Toyota", logo: "/assets/Toyota.png" },
  { name: "Ford", logo: "/assets/Ford.png" },
  { name: "Honda", logo: "/assets/honda.png" },
  { name: "BMW", logo: "/assets/BMW.png" },
  { name: "Mercedes", logo: "/assets/Mercedes-Benz.png" },
  { name: "Audi", logo: "/assets/Audi.png" },
  { name: "Nissan", logo: "/assets/Nissan.png" },
  { name: "Chevrolet", logo: "/assets/Chevrolet.png" },
  { name: "Jeep", logo: "/assets/Jeep.png" },
];

const CarBrands: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9, // Adjusted number of logos visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true, // Center align the logos
    centerPadding: "0", // Remove default padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: true, // Disable centering for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: 6, backgroundColor: "#f3f3f3" }} id="brands">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: "primary.main",
        }}
      >
        Cars We Service
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
        At Jazzy's Garage, we specialize in repairing and maintaining vehicles
        from a wide range of brands. Whether it's routine maintenance or complex
        repairs, we've got you covered.
      </Typography>

      <Slider {...settings}>
        {brands.map((brand, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              component="img"
              src={brand.logo}
              alt={brand.name}
              sx={{
                height: 80, // Adjust logo size
                width: "auto",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarBrands;
