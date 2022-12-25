import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  SelectChangeEvent,
  Grow,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import useRequestResource from "../hooks/useRequestResource";
import { DataInterface } from "../Types/types";
import SelectType from "../components/SelectType";
import useFilter from "../globalState/filterContext";
import { Results } from "../Types/types";
import { motion } from "framer-motion";
import { sectionName } from "../components/Variants";
import useOnScreen from "../hooks/useOnScreen";

export default function MyWork() {
  const ref = useRef<null | HTMLParagraphElement>(null);
  const isVisible = useOnScreen(ref);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    isVisible && setVisible(true);
  }, [isVisible]);
  //pageApi
  const [pageApi, setPageApi] = useState(1);

  const { filterType } = useFilter();

  const [cardData, setCardData] = useState<Results[]>();

  const { data, getResourceList } = useRequestResource();
  console.log(pageApi, "api");

  useEffect(() => {
    getResourceList(filterType, `?page=${pageApi}`);
    // : getResourceList(filterType, "");
  }, [pageApi]);

  useEffect(() => {
    setPageApi(1);
    getResourceList(filterType, "");
  }, [filterType]);

  useEffect(() => {
    setCardData(data?.results);
  }, [data]);

  console.log(cardData, "cardDataaaa");

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <ThemeProvider theme={theme}>
        <Box
          id="My Work"
          sx={{
            bgcolor: "#262626",
            height: { lg: "500px", md: "100%", sm: "800px" },
            width: "100vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            jusfityContent: "center",
            pt: { lg: 0, md: 1, sm: 3, xs: 5 },
            pb: { lg: 0, md: 0, sm: 0, xs: 10 },
          }}
        >
          <motion.div variants={sectionName}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.1)",
                position: "absolute",
                top: { lg: -65, md: -45, sm: -15, xs: -35 },
                left: { lg: 75, md: 40, sm: 20, xs: 35 },
                fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
                fontWeight: 600,
                zIndex: 500,
              }}
            >
              My Work
            </Typography>
          </motion.div>
          <motion.div variants={sectionName}>
            <SelectType />
          </motion.div>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              borderLeft: "100vw solid #131313",
              borderBottom: "200px solid transparent",
            }}
          ></Box>

          <Grid
            container
            sx={{
              width: "100%",
              mt: { lg: 10, md: 10, sm: 15, xs: 10 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            spacing={0.5}
          >
            {cardData?.map((data: Results) => {
              return (
                <Grow
                  key={data.titleApp}
                  in={visible}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(true ? { timeout: 2000 } : {})}
                >
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
                </Grow>
              );
            })}
          </Grid>

          <Stack>
            <Pagination
              siblingCount={1}
              defaultPage={1}
              page={pageApi}
              count={
                typeof data?.count === "number" ? Math.ceil(data?.count / 3) : 1
              }
              size="small"
              sx={{
                button: { color: "rgba(255,255,255,0.7)" },
                mt: { lg: 0, md: 0, sm: 0, xs: -5 },
              }}
              onChange={(e, value) => setPageApi(value)}
            />
          </Stack>
        </Box>
      </ThemeProvider>
    </motion.div>
  );
}
