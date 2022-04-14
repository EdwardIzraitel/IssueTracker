import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";

import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProtectedRoute from "./protected.route";

//@TODO implemenet lazy loading (code splitting)
//@TODO update protected routes
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/tickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
