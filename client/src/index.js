import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Tickets from "./pages/Tickets";
// import Projects from "./pages/Projects";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tickets" element={<Tickets />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
