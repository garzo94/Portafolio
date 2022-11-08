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
// import useSpline from '@splinetool/r3f-spline'
// import { OrthographicCamera } from '@react-three/drei'

const fontStyle = {
  color: "white",
  fontSize: 60,
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
  setTimeout(() => setDisplaySphere(true), 10000);
  setTimeout(() => setDisplayLoading(false), 11000);
  console.log(displaySphere, "sphere");
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          pt: 20,
          bgcolor: "#131315",
          height: "100vh",
          width: "100%",
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%", p: 5, display: "flex" }}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <Stack direction="column" spacing={1} sx={{ my: 2, mx: 2 }}>
              <Link
                sx={iconsHoverStyle}
                href="https://github.com/garzo94"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </Link>
              <Link
                sx={iconsHoverStyle}
                href="https://www.linkedin.com/in/alexander-garzo/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                sx={iconsHoverStyle}
                href="https://twitter.com/alex_garzo/"
                target="_blank"
              >
                <TwitterIcon fontSize="large" />
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
              <Typography sx={{ fontStyle }}>experiences.</Typography>
              <Button
                sx={{
                  borderWidth: " 1px",
                  borderStyle: "solid",
                  borderImage: "linear-gradient(to right, #ff3d00, #0400ff) 1",
                  mt: 2,
                  color: "#fff",
                  p: 1,
                  "&:hover": {
                    boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
                  },
                }}
              >
                My Work
              </Button>
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
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
            <motion.div
              variants={loadingVariants}
              initial="hidden"
              animate="visible"
            >
              <Loading />
            </motion.div>
          )}

          <Box sx={{ position: "absolute", top: -100 }}>
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
