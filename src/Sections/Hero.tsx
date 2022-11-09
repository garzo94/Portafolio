import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import { Button, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import "../App.css";
import Loading from "../components/Loading";
import VisibilityIcon from "@mui/icons-material/Visibility";
const fontStyleHero = { lg: 60, md: 50, sm: 45, xs: 32 };

const fontStyle = {
  color: "white",
  fontSize: fontStyleHero,
  fontWeight: 600,
  lineHeight: 1.3,
};

const iconsHoverStyle = {
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  jusitfyContentL: "center",
  transition: "0.4s",

  "&:hover": {
    boxShadow: "0px 0px 5px white",
  },
};

const textVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    x: 30,
    transition: {
      type: "spring",
    },
  },
};

const splinVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, // only with spring
      damping: 8, //only with spring
      delay: 4,
    },
  },
};

const loadingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Hero() {
  const [displaySplin, setDisplaySpline] = useState(false);
  const [displaySphere, setDisplaySphere] = useState(false);
  const [displayLoading, setDisplayLoading] = useState(true);
  setTimeout(() => setDisplaySpline(true), 14000);
  setTimeout(() => setDisplaySphere(true), 12000);
  setTimeout(() => setDisplayLoading(false), 13000);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          pt: { lg: 20, md: 18, sm: 10, xs: 12 },
          bgcolor: "#131315",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },

          alignItems: { lg: "start", md: "start", sm: "center", xs: "center" },
        }}
      >
        <Box
          sx={{
            width: { lg: "45%", md: "55%", sm: "70%", xs: "90%" },
            p: { lg: 2, md: 2, sm: 5, xs: 5 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <Stack
              direction="column"
              spacing={1}
              sx={{ my: { lg: 2, md: 1.5, sm: 1.9, xs: 1 }, mx: 2 }}
            >
              <Link
                sx={iconsHoverStyle}
                href="https://github.com/garzo94"
                target="_blank"
              >
                <GitHubIcon sx={fontStyleHero} />
              </Link>
              <Link
                sx={iconsHoverStyle}
                href="https://www.linkedin.com/in/alexander-garzo/"
                target="_blank"
              >
                <LinkedInIcon sx={fontStyleHero} />
              </Link>
              <Link
                sx={iconsHoverStyle}
                href="https://twitter.com/alex_garzo/"
                target="_blank"
              >
                <TwitterIcon sx={fontStyleHero} />
              </Link>
            </Stack>
          </motion.div>

          <Box>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography sx={fontStyle}>Building</Typography>
              <Typography sx={fontStyle}>beautiful web</Typography>
              <Typography sx={fontStyle}>experiences.</Typography>
              <Button
                sx={{
                  borderWidth: " 1px",
                  borderStyle: "solid",
                  borderImage: "linear-gradient(to right, #ff3d00, #0400ff) 1",
                  mt: 2,
                  gap: 1,
                  color: "#fff",
                  textTransform: "capitalize",
                  p: { lg: 1, md: 1, sm: 0.5, xs: 0.5 },
                  "&:hover": {
                    boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
                  },
                }}
              >
                <VisibilityIcon
                  sx={{
                    color: "white",
                    fontSize: 18,
                  }}
                />
                My Work
              </Button>
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: "50%", md: "35%", sm: "50%", xs: "100%" },
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {displaySphere && (
            <motion.div
              className="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1 }}
            ></motion.div>
          )}

          {displayLoading && (
            <Box
              className="displayLoading"
              sx={{
                position: "absolute",
                mr: { lg: -50, md: -55, sm: -62, xs: -60 },
              }}
            >
              <motion.div
                variants={loadingVariants}
                initial="hidden"
                animate="visible"
              >
                <Loading />
              </motion.div>
            </Box>
          )}

          <Box
            sx={{
              position: "absolute",
              top: { lg: -100, md: -50, sm: -35, xs: -15 },
              right: { lg: 0, md: -75 },
            }}
          >
            {displaySplin && (
              <motion.div
                variants={splinVariants}
                initial="hidden"
                animate="visible"
              >
                <Spline scene="https://prod.spline.design/pn1r3HV-s4XMZcOP/scene.splinecode" />
              </motion.div>
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
