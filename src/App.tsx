import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import MyWork from "./Sections/MyWork";
import "./App.css";
import { Provider } from "./globalState/filterContext";

function App() {
  return (
    <Provider>
      <Navbar />
      <Hero />
      <MyWork />
    </Provider>
  );
}
export default App;
