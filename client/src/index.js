import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Tickets />
  </React.StrictMode>,
  document.getElementById("root")
);
