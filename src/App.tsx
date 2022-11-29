import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import MyWork from "./Sections/MyWork";
import "./App.css";
import { Provider } from "./globalState/filterContext";
import About from "./Sections/About";

function App() {
  return (
    <Provider>
      <Navbar />
      <Hero />
      <MyWork />
      <About />
    </Provider>
  );
}
export default App;
