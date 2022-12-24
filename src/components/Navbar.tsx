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
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-scroll";

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
      background: "linear-gradient(to top left, #371F97 0%, #371F97 100% )",
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
  const pages = ["Home", "My Work", "About", "Hire me"];
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
                      fontFamily: "'Poppins', cursive",
                      fontSize: {
                        lg: "20px",
                        md: "18px",
                        sm: "17px",
                        xs: "16px",
                      },

                      letterSpacing: 0,
                    }}
                  >
                    Alexander Garzo
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
                {/* Menu for responsive */}
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
                      <Link
                        to={page}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography
                            sx={{ fontWeight: 600 }}
                            textAlign="center"
                          >
                            {page}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ) : (
                      <Link
                        to={page}
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                      >
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      </Link>
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
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <Typography sx={navButtonstyle}>Home</Typography>
                </Link>

                <Link
                  to="My Work"
                  spy={true}
                  smooth={true}
                  offset={-250}
                  duration={500}
                >
                  <Typography sx={navButtonstyle}>My Work</Typography>
                </Link>

                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-175}
                  duration={500}
                >
                  <Typography sx={navButtonstyle}>About</Typography>
                </Link>
                <Link
                  to="Hire me"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                >
                  <Typography
                    sx={{
                      // borderWidth: " 1px",
                      // borderStyle: "solid",
                      // borderImage:
                      //   "linear-gradient(to right, #371F97, #371F97) 1",
                      border: "1px solid #371f97",
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      textDecoration: "none",
                      p: 0.8,
                      borderRadius: "5px",

                      transition: "0.3s",
                      "&:hover": {
                        p: 0.8,
                        cursor: "pointer",
                        boxShadow: "0px 0px 30px rgba(55,31,151,1)",
                        border: "1px solid #ffffff",
                      },
                    }}
                  >
                    Hire me
                  </Typography>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    </ThemeProvider>
  );
}
