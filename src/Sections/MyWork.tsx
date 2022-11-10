import Card from "../components/Card";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
export default function MyWork() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#262626",
          height: "700px",
          width: "100vw",
          position: "relative",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          jusfityContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
            position: "absolute",
            top: -145,
            left: 75,
            fontSize: "45px",
            fontWeight: 600,
          }}
        >
          My Work
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            borderLeft: "1400px solid #131315",
            borderBottom: "200px solid transparent",
          }}
        ></Box>
        <Grid container sx={{ width: "90%" }}>
          <Grid item lg={4}>
            <Card />
          </Grid>
          <Grid item lg={4}>
            <Card />
          </Grid>
          <Grid item lg={4}>
            <Card />
          </Grid>
          <Grid item lg={4}>
            <Card />
          </Grid>
          <Grid item lg={4}>
            <Card />
          </Grid>
          <Grid item lg={4}>
            <Card />
          </Grid>
        </Grid>
        <Stack>
          <Pagination
            count={3}
            size="small"
            sx={{ button: { color: "rgba(255,255,255,0.7)" } }}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
