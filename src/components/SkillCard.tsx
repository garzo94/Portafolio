import React from "react";
import { Box, Link, Typography, CardMedia, Card, Button } from "@mui/material";
import { height } from "@mui/system";
export default function SkillCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <Box
      component="div"
      sx={{
        width: 200,
        height: 100,
        border: "1px solid rgba(255,255,255,0.4)",
        borderRight: "1px solid rgba(255,255,255,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.4)",
        boxShadow: "0 5px 45px rgba(255,255,255,0.1)",
        backdropFilter: "blur(2px)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 8,
        transition: "0.5s",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-20px)",
        },
        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "50px",
          height: "100%",
          background: "rgba(255,255,255,0.2)",
          transform: "skewX(45deg) translateX(250px)",
          transition: "0.5s",
        },
        "&:hover:before": {
          transform: "skewX(45deg) translateX(-150px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="python"
        sx={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
        }}
      />
      <Typography style={{ fontSize: 21, color: "rgba(255,255,255,0.6)" }}>
        {name}
      </Typography>
    </Box>
  );
}
