import { useEffect, useState } from "react";
import Card from "../components/Card";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import useRequestResource from "../hooks/useRequestResource";
import { DataInterface } from "../Types/types";
import SelectType from "../components/SelectType";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MyWork() {
  const [cardData, setCardData] = useState<DataInterface[]>([]);
  const [type, setType] = useState<string>("all");
  const { data, getResourceList } = useRequestResource(type);

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  useEffect(() => {
    getResourceList();
  }, []);

  useEffect(() => {
    setCardData(data);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#262626",
          height: { lg: "700px", md: "700px", sm: "1000px" },
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
            top: { lg: -65, md: -45, sm: -15, xs: -20 },
            left: { lg: 75, md: 40, sm: 20, xs: 35 },
            fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          My Work
        </Typography>
        <SelectType />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            borderLeft: "1400px solid #131315",
            borderBottom: "200px solid transparent",
          }}
        ></Box>

        <Grid
          container
          sx={{ width: "100%", mt: { lg: 10, md: 10, sm: 15, xs: 10 } }}
          spacing={0.5}
        >
          {cardData.map((data: DataInterface) => {
            return (
              <Grid
                key={data.titleApp}
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card data={data} />
              </Grid>
            );
          })}
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
