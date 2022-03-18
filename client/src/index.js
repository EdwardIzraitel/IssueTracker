import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Projects from "./pages/Projects";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Tickets />
    {/* <Projects /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
