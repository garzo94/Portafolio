import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import MyWork from "./Sections/MyWork";
import "./App.css";
import { Provider } from "./globalState/filterContext";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TechStack from "./Sections/TechStack";
import Footer from "./Sections/Footer";
// import ChatSystem from "./Sections/ChatSystem";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Navbar />
        <Hero />
        <MyWork />
        <About />
        <TechStack />
        <Contact />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
export default App;
