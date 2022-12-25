import React, { useState } from "react";
import { TextField, Box, Button, Typography, Link, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useRequestResource from "../hooks/useRequestResource";
import SimpleSnackbar from "../components/SnackComponent";
import { motion, Variants } from "framer-motion";
import { sectionName } from "../components/Variants";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function Contact() {
  const formVariants: Variants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };

  const socialVariants: Variants = {
    offscreen: {
      x: 400,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };

  const [openSnack, setOpenSnack] = useState(false);
  const { sendEmail } = useRequestResource();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      setOpenSnack(true);
      resetForm();
      setTimeout(() => setOpenSnack(false), 4000);
    },
  });

  const fontStyleHero = { lg: 60, md: 50, sm: 45, xs: 32 };

  const iconsHoverStyle = {
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContentL: "center",
    transition: "0.4s",
    "&:hover": {
      boxShadow: "0px 0px 5px white",
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Box
        id="Hire me"
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          height: { lg: 675, md: 475, sm: 600, xs: 500 },
          pt: { lg: 10, md: 0, sm: 0, xs: 0 },
          width: "100vw",
          bgcolor: "#131313",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <motion.div variants={sectionName}>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.1)",
              position: "absolute",
              top: { lg: 75, md: -45, sm: -15, xs: -20 },
              left: { lg: 75, md: 40, sm: 20, xs: 35 },
              fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            Contact
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { lg: 5, md: 4, sm: 3, xs: 3 },
            px: { lg: 10, md: 10, sm: 7, xs: 2 },
            flexGrow: 0.5,
          }}
        >
          <motion.div variants={formVariants}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              inputProps={{
                style: {
                  backgroundColor: "#262626",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                style: { color: "rgba(255,255,255,0.7)" },
              }}
              sx={textFieldStyle}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </motion.div>

          <motion.div variants={formVariants}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              inputProps={{
                style: {
                  backgroundColor: "#262626",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
              InputLabelProps={{
                style: { color: "rgba(255,255,255,0.7)" },
              }}
              sx={textFieldStyle}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </motion.div>
          <motion.div variants={formVariants}>
            <TextField
              fullWidth
              multiline
              rows={5}
              id="message"
              name="message"
              label="Message"
              inputProps={{
                style: {
                  backgroundColor: "#262626",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: 15,
                },
              }}
              InputLabelProps={{
                style: { color: "rgba(255,255,255,0.7)" },
              }}
              sx={{
                borderRadius: "10px",
                border: "none",
                width: { lg: "80%", md: "82%", sm: "100%" },
              }}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </motion.div>

          <motion.div variants={formVariants}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              sx={{
                borderRadius: "10px",
                borderWidth: " 1px",
                borderStyle: "solid",
                borderImage: "linear-gradient(to right, #371F97, #371F97) 1",
                background: "linear-gradient(to right, #371F97, #371F97)",
                mt: 2,
                gap: 1,
                color: "#fff",
                textTransform: "capitalize",
                border: "none",
                width: "30%",
                p: { lg: 1, md: 1, sm: 0.5, xs: 0.5 },
                transition: "0.4s",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
                },
              }}
            >
              Submit
            </Button>
          </motion.div>
        </Box>

        {/* let connect */}
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: { lg: "65%", md: "65%", sm: "65%", xs: "77%" },
          }}
        >
          <motion.div variants={socialVariants}>
            <Typography
              sx={{
                fontSize: { lg: 18, md: 17, sm: 16, xs: 12 },
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Let's connect:
            </Typography>
          </motion.div>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              my: { lg: 2, md: 1.5, sm: 1.9, xs: 1 },
            }}
          >
            <motion.div variants={socialVariants}>
              <Link
                sx={iconsHoverStyle}
                href="https://www.linkedin.com/in/alexander-garzo/"
                target="_blank"
              >
                <LinkedInIcon sx={fontStyleHero} />
              </Link>
            </motion.div>
            <motion.div variants={socialVariants}>
              <Link
                sx={iconsHoverStyle}
                href="https://twitter.com/alex_garzo/"
                target="_blank"
              >
                <TwitterIcon sx={fontStyleHero} />
              </Link>
            </motion.div>
          </Stack>
        </Box>
        {openSnack && <SimpleSnackbar />}
      </Box>
    </motion.div>
  );
}

const textFieldStyle = {
  border: "none",
  width: { lg: "80%", md: "82%", sm: "100%" },
};
