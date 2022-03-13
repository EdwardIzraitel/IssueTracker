import React from "react";
import "./Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Projects from "../components/home/Projects";
import Stats from "../components/home/Stats";
const Home = () => {
  return (
    <div className="content-wrapper">
      <Sidebar />
      <main className="main-content">
        <Header />
        <Projects />
        <Stats />
      </main>
    </div>
    // <div className="row g-0">
    //   <Sidebar />
    //   <div className="col">
    //     <Header />
    //     <Projects />
    //     {/* <Stats /> */}
    //   </div>
    // </div>
  );
};

export default Home;
