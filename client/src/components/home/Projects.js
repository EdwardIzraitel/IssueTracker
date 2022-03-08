import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  createButtonElements,
  findTotalPageNumbers,
  findDisplayableItems,
} from "../ButtonNavigator/ButtonNavigator";
const Projects = () => {
  const list = [
    ["e", "test", "Edward", "Complete"],
    ["f", "test", "Edward", "Complete"],
    ["g", "test", "Edward", "Complete"],
    ["IssueTracker", "test", "Edward", "End"],
  ];

  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [projectsOnCurrentPage, setProjectsOnCurrentPage] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(1);
  const MAX_ITEMS_PER_PAGE = 3;

  useEffect(() => {
    findDisplayableItems(
      setProjectsOnCurrentPage,
      currentProjectPage,
      list,
      MAX_ITEMS_PER_PAGE
    );
  }, [currentProjectPage]);

  useEffect(() => {
    findTotalPageNumbers(list, setTotalPageNumbers, MAX_ITEMS_PER_PAGE);
  }, []);

  return (
    <div className="project-box shadow">
      <p className="m-md-2">Projects</p>
      <div style={{ height: "68%" }}>
        <div className="row g-0 m-md-2" style={{ backgroundColor: "#D8F2DF" }}>
          <div className="col-2">Project</div>
          <div className="col-5">Description</div>
          <div className="col-3">Contributors</div>
          <div className="col">Status</div>
        </div>
        {projectsOnCurrentPage.map((element) => {
          return (
            <div className="m-md-2">
              <div className="row g-0">
                <div className="col-2">{element[0]}</div>
                <div className="col-5">{element[1]}</div>
                <div className="col-3">{element[2]}</div>
                <div className="col">{element[3]}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="position-relative">
        <div className="pagination position-aboslute bottom-0">
          {/* {createButtonProjectElements()} */}
          {createButtonElements(
            currentProjectPage,
            totalPageNumbers,
            setCurrentProjectPage
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
