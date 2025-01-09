import React from "react";
import { Box, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build"; // Tool icon
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"; // Fuel icon
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull"; // Battery icon
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Car icon
import AcUnitIcon from "@mui/icons-material/AcUnit"; // AC icon
import TrafficIcon from "@mui/icons-material/Traffic"; // Traffic icon
import SettingsIcon from "@mui/icons-material/Settings"; // Settings icon

const services = [
  {
    title: "Oil Change & Filter Replacement",
    description:
      "Regular oil changes are crucial to keeping your engine in top shape. We replace oil filters and use high-quality oil to ensure smooth engine performance and longevity.",
    icon: <LocalGasStationIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Brake Repair & Replacement",
    description:
      "Your safety is our priority. Our technicians specialize in brake system diagnostics, repairs, and replacements to ensure your vehicle stops smoothly and safely.",
    icon: <TrafficIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Tire Services",
    description:
      "Optimize your vehicle’s performance and safety with tire rotations, alignments, and replacements. We help maintain even wear and maximum road grip.",
    icon: <DirectionsCarIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Battery Replacement",
    description:
      "Avoid unexpected breakdowns with a reliable battery replacement service. We provide batteries for all vehicle makes and models.",
    icon: (
      <BatteryChargingFullIcon sx={{ fontSize: 48, color: "primary.main" }} />
    ),
  },
  {
    title: "Engine Diagnostics",
    description:
      "Is your check engine light on? Our advanced diagnostics tools pinpoint issues to provide efficient and accurate repairs for your vehicle.",
    icon: <BuildIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Suspension & Steering Repair",
    description:
      "Ensure a smooth and stable ride with professional suspension and steering system repairs. From shocks to power steering, we’ve got you covered.",
    icon: <SettingsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Air Conditioning Service",
    description:
      "Beat the heat! Our AC service includes refrigerant refills, leak detection, and repair to keep your cabin cool and comfortable.",
    icon: <AcUnitIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
  {
    title: "Brake Pads Services",
    description:
      "Worn-out brake pads can compromise your safety. We provide high-quality brake pad replacements for optimal stopping power and safety on the road.",
    icon: <TrafficIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },

  {
    title: "Headlight Repair & Replacement",
    description:
      "Ensure clear visibility during night drives with our headlight repair and replacement services. We provide solutions for all types of vehicles, ensuring safety and compliance.",
    icon: <SettingsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
  },
];

const Services: React.FC = () => {
  return (
    <Box sx={{ padding: 6, backgroundColor: "primary.main" }} id="services">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 6,
          color: "#000000",
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              {/* Icon */}
              <Box sx={{ marginBottom: 2 }}>{service.icon}</Box>
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 1,
                  color: "text.primary",
                }}
              >
                {service.title}
              </Typography>
              {/* Description */}
              <Typography
                variant="body2"
                color="text.primary"
                textAlign="center"
              >
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
