import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import MyWork from "./Sections/MyWork";
import "./App.css";
import { Provider } from "./globalState/filterContext";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
// import ChatSystem from "./Sections/ChatSystem";
import Box from "@mui/material";

function App() {
  return (
    <Provider>
      <Navbar />
      <Hero />
      <MyWork />
      <About />
      <Contact />
      {/* <ChatSystem /> */}
    </Provider>
  );
}
export default App;
