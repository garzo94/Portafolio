import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
export default function Navbar() {
  const navButtonstyle = {
    fontSize: 30,
    letterSpacing: 1,
    px: 1,

    display: { xs: "none", md: "flex" },
    transition: "0.2s",
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.1)",

      px: 1,
      borderRadius: "10px",
      cursor: "pointer",
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 4, ease: "easeInOut" },
    },
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
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
        animate={{ y: -81 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 25 }}
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
                      mt: 0.8,
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "50px",
                      fontWeight: "500",
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
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 2,
                  mr: 5,
                }}
              >
                <Typography sx={navButtonstyle}>Home</Typography>
                <Typography sx={navButtonstyle}>Projects</Typography>
                <Typography sx={navButtonstyle}>About</Typography>
                <Typography sx={navButtonstyle}>Resume</Typography>
                <Typography
                  sx={{
                    fontSize: 30,
                    color: "black",
                    borderRadius: "10px",
                    fontWeight: "900",
                    px: 1,
                    pt: 0.3,
                    bgcolor: "white",
                    transition: "0.2s",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 15px rgba(255,255,255,0.7)",
                    },
                  }}
                >
                  Hire me
                </Typography>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    </ThemeProvider>
  );
}
