import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  Link,
  Stack,
  Snackbar,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useRequestResource from "../hooks/useRequestResource";
import SimpleSnackbar from "../components/SnackComponent";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function Contact() {
  const [openSnack, setOpenSnack] = useState(false);
  const { sendEmail } = useRequestResource();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendEmail(values);
      setOpenSnack(true);
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
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        height: 675,
        width: "100%",
        bgcolor: "#131313",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255,255,255,0.1)",
          position: "absolute",
          top: { lg: 10, md: -45, sm: -15, xs: -20 },
          left: { lg: 75, md: 40, sm: 20, xs: 35 },
          fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
          zIndex: 1,
          fontWeight: 600,
        }}
      >
        Contact
      </Typography>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          px: 10,
        }}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          inputProps={{ style: { backgroundColor: "#262626", color: "#fff" } }}
          InputLabelProps={{
            style: { color: "rgba(255,255,255,0.7)" },
          }}
          sx={textFieldStyle}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          inputProps={{ style: { backgroundColor: "#262626", color: "#fff" } }}
          InputLabelProps={{
            style: { color: "rgba(255,255,255,0.7)" },
          }}
          sx={textFieldStyle}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

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
              margin: 0,
              padding: 0,
              color: "#fff",
            },
          }}
          InputLabelProps={{
            style: { color: "rgba(255,255,255,0.7)" },
          }}
          sx={{ borderRadius: "10px", border: "none", width: "80%" }}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{
            borderWidth: " 1px",
            borderStyle: "solid",
            borderImage: "linear-gradient(to right, #7D00FF, #1976d2) 1",
            background: "linear-gradient(to right, #7D00FF, #1976d2)",
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
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          height: "65%",
        }}
      >
        <Typography sx={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
          Or let's connect via:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ my: { lg: 2, md: 1.5, sm: 1.9, xs: 1 }, mx: 2 }}
        >
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
      </Box>
      {openSnack && <SimpleSnackbar />}
    </Box>
  );
}

const textFieldStyle = {
  borderRadius: "10px",
  border: "none",
  width: "80%",
};
