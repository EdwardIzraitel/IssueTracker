import React from "react";
import "./Projects.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MyProjects from "../components/MyProjects/MyProjects";
const Projects = () => {
  return (
    <div className="background">
      <div className="row g-0">
        <Sidebar />
        <div className="col">
          <Header />
          <MyProjects />
          <div className="empty_box" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
