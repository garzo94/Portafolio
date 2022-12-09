import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        height: { lg: "450px", md: "350px", sm: "400px", xs: "490px" },
        position: "relative",
        bgcolor: "#262626",
        display: "flex",
        alignItems: "center",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
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
          image="src\assets\me.png"
          alt="Me"
          sx={{
            width: { lg: "400px", md: "450px", sm: "450px", xs: "300px" },
            height: { lg: "425px", md: "250px" },
            m: 1,
            mt: { lg: 0, md: 0, sm: 0, xs: 3 },
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { lg: "50%", md: "50%", sm: "50%", xs: "85%" },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: { lg: "start", md: "center", sm: "center", xs: "center" },
        }}
      >
        <Typography
          sx={{ color: "#ffffff", mb: 2, fontSize: { lg: "22px", md: "20px" } }}
        >
          Alexander Garzo
        </Typography>
        <Typography
          sx={{
            width: { lg: "550px", md: "375px", sm: "550px", xs: "320px" },
            color: "rgba(255,255,255,0.8)",
            textAlign: "justify",
            fontSize: { lg: "18px", md: "17px", sm: "16px" },
          }}
        >
          I am industrial engineer and fullstack developer with +2 years of
          experience. I specialize in web development and tasks automatization.
          My passion is to build tech solutions for your business and
          productivity. <br />
          Let's grow together while you focus on running your business and I
          focus on make it profitable.
        </Typography>
      </Box>
    </Box>
  );
}
