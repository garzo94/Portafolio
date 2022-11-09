import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
export default function Navbar() {
  const navButtonstyle = {
    fontSize: 17,
    p: 0.8,
    display: { xs: "none", md: "flex" },
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
    fontFamily: "Poppins, sans-serif",
    color: "#fff",

    "&:before": {
      content: '""',
      width: "0px",
      height: "3px",
      background: "linear-gradient(to top left, #ff3d00 0%, #0400ff 100% )",
      position: "absolute",
      top: "100%",
      left: 0,
      transition: "0.5s",
    },
    "&:hover:before": {
      width: "50%",
      transform: "translateX(100%)",
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };
  const pages = ["Home", "My Work", "About", "Resume", "Hire me"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: -0 }}
        transition={{ delay: 1, type: "spring", stiffness: 25 }}
      >
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#181818",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 70,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  ml: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mx: 1,
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: {
                        lg: "28px",
                        md: "25px",
                        sm: "22px",
                        xs: "20px",
                      },

                      letterSpacing: 2,
                    }}
                  >
                    AlexanderGarzo
                  </Typography>
                </motion.div>
              </Box>

              <Box sx={{ mr: 5, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) =>
                    page === "Hire me" ? (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography sx={{ fontWeight: 600 }} textAlign="center">
                          {page}
                        </Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    )
                  )}
                </Menu>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 2,
                  mr: 5,
                }}
              >
                <Link sx={navButtonstyle}>Home</Link>
                <Link sx={navButtonstyle}>My Work</Link>
                <Link sx={navButtonstyle}>About</Link>
                <Link sx={navButtonstyle}>Resume</Link>
                <Link
                  sx={{
                    borderWidth: " 1px",
                    borderStyle: "solid",
                    borderImage:
                      "linear-gradient(to right, #ff3d00, #0400ff) 1",
                    boxShadow: "0px 0px 10px rgba(255,255,255,0.7)",
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif",
                    textDecoration: "none",
                    p: 0.8,

                    transition: "0.3s",
                    "&:hover": {
                      p: 0.8,
                      cursor: "pointer",
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
                    },
                  }}
                >
                  Hire me
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    </ThemeProvider>
  );
}
