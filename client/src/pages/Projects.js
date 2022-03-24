import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  createButtonElements,
  findDisplayableItems,
  findTotalPageNumbers,
} from "../components/ButtonNavigator/ButtonNavigator";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const Projects = () => {
  const listOfProjects = [
    [
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      "Urgent",
      "Bug",
      "Edward",
      "Tomorrow",
      "Active",
    ],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
    ["test", "Urgent", "Bug", "Edward", "Today", "Active"],
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsOnCurrentPage, setProjectsOnCurrentPage] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(1);
  const MAX_ITEMS_PER_PAGE = 8;

  useEffect(() => {
    findDisplayableItems(
      setProjectsOnCurrentPage,
      currentPage,
      listOfProjects,
      MAX_ITEMS_PER_PAGE
    );
  }, [currentPage]);

  useEffect(() => {
    findTotalPageNumbers(
      listOfProjects,
      setTotalPageNumbers,
      MAX_ITEMS_PER_PAGE
    );
  }, []);

  return (
    <div className="content-wrapper">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="projects">
          <p>My Projects</p>
          <table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Project</th>
                <th>Priority</th>
                <th>Type</th>
                <th>Creator</th>
                <th>Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectsOnCurrentPage.map((currentTicket) => {
                return (
                  <tr>
                    <td>{currentTicket[0]}</td>
                    <td>{currentTicket[1]}</td>
                    <td>{currentTicket[2]}</td>
                    <td>{currentTicket[3]}</td>
                    <td>{currentTicket[4]}</td>
                    <td>{currentTicket[5]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="nav-buttons">
            {createButtonElements(
              currentPage,
              totalPageNumbers,
              setCurrentPage
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
