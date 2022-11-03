import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#white",
        height: "100vh",
        width: "100%",
        mt: 10,
        display: "flex",
      }}
    >
      <Box sx={{ width: "50%", p: 5 }}>
        <Typography>Let's bring your idea</Typography>
        <Typography>to the next level</Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}
