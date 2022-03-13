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
    ["IssueTracker", "test", "Edward", "End"],
    ["IssueTracker", "test", "Edward", "End"],
  ];

  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [projectsOnCurrentPage, setProjectsOnCurrentPage] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(1);
  const MAX_ITEMS_PER_PAGE = 4;

  window.addEventListener("resize", console.log(window.innerHeight));

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
    <div className="project-box">
      <p>Projects</p>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Project</th>
            <th style={{ width: "40%" }}>Description</th>
            <th style={{ width: "20%" }}>Contributors</th>
            <th style={{ width: "20%" }}>Stats</th>
          </tr>
        </thead>
        <tbody>
          {projectsOnCurrentPage.map((element) => {
            return (
              <tr>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
                <td>{element[3]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="nav-buttons">
        {createButtonElements(
          currentProjectPage,
          totalPageNumbers,
          setCurrentProjectPage
        )}
        {console.log(window.onresize)}
      </div>
    </div>
    //   <div className="pagination position-absolute bottom-0">
    //     {createButtonElements(
    //       currentProjectPage,
    //       totalPageNumbers,
    //       setCurrentProjectPage
    //     )}
    //   </div>
    // </div>
  );
};

export default Projects;
