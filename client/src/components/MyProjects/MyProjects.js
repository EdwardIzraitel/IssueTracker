import React, { useState, useEffect } from "react";
import "./MyProjects.css";
import {
  createButtonElements,
  findTotalPageNumbers,
  findDisplayableItems,
} from "../ButtonNavigator/ButtonNavigator";
const MyProjects = () => {
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
  const MAX_ITEMS_PER_PAGE = 13;

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
    <div className="tickets shadow position-relative">
      <p className="m-2">My Projects</p>
      <div className="row g-1 m-2 ticket-header">
        <div className="col-4 text-truncate">Project</div>
        <div className="col-1 text-truncate">Priority</div>
        <div className="col-1 text-truncate">Type</div>
        <div className="col-2 text-truncate">Creator</div>
        <div className="col-2 text-truncate">Created</div>
        <div className="col-2 text-truncate">Status</div>
      </div>
      {projectsOnCurrentPage.map((currentTicket) => {
        return (
          <div className="row g-1 m-2">
            <div className="col-4 text-truncate">{currentTicket[0]}</div>
            <div className="col-1 text-truncate">{currentTicket[1]}</div>
            <div className="col-1 text-truncate">{currentTicket[2]}</div>
            <div className="col-2 text-truncate">{currentTicket[3]}</div>
            <div className="col-2 text-truncate">{currentTicket[4]}</div>
            <div className="col-2 text-truncate">{currentTicket[5]}</div>
          </div>
        );
      })}
      <div className="pagination position-absolute bottom-0">
        {createButtonElements(currentPage, totalPageNumbers, setCurrentPage)}
      </div>
    </div>
  );
};

export default MyProjects;
