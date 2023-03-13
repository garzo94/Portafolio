import React from "react";
import { Box, Divider, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        height: 100,
        bgcolor: "#131313",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Divider
        variant="middle"
        sx={{ color: "white", bgcolor: "rgba(255,255,255,0.5)", width: "85%" }}
      />
      <Typography
        sx={{
          color: "rgba(255,255,255,0.8)",
          marginTop: 2,
          textAlign: "center",
        }}
      >
        © 2023 Alexander Garzo <br />
        All rights reserved.
      </Typography>
    </Box>
  );
}
