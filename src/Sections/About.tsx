import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        height: "350px",
        position: "relative",
        bgcolor: "#262626",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          borderRight: "1300px solid #131315",
          borderTop: "200px solid transparent",
        }}
      ></Box>

      <Typography
        sx={{
          color: "rgba(0,0,0,0.5)",
          position: "absolute",
          top: { lg: -65, md: -45, sm: -15, xs: -20 },
          left: { lg: 75, md: 40, sm: 20, xs: 35 },
          fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
          zIndex: 1,
          fontWeight: 600,
        }}
      >
        About
      </Typography>
      <Box
        sx={{
          zIndex: "1",
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image="src\assets\about.jpg"
          alt="Me"
          sx={{
            width: "500px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffffff", mb: 1 }}>
          Alexander Garzo
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "600px",
            color: "rgba(255,255,255,0.8)",
            textAlign: "justify",
          }}
        >
          I am industrial engineer and fullstack developer with +2 years of
          experience in the field. I can help you with web development, web
          design, marketing and tasks automatization. <br />
          So, while you focus on running your business, I focus on make it grow.
        </Typography>
      </Box>
    </Box>
  );
}
