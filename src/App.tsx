import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import MyWork from "./Sections/MyWork";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyWork />
    </>
  );
}
export default App;
