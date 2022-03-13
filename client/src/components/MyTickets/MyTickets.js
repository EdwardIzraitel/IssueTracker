import React, { useState, useEffect } from "react";
import "./MyTickets.css";
import {
  createButtonElements,
  findTotalPageNumbers,
  findDisplayableItems,
} from "../ButtonNavigator/ButtonNavigator";
const MyTickets = () => {
  const listOfTickets = [
    [
      "1",
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      "Edward",
      "Active",
    ],
    ["2", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["4", "test", "Edward", "Active"],
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsOnCurrentPage, setTicketsOnCurrentPage] = useState([]);
  const [totalPageNumbers, setTotalPageNumbers] = useState(1);
  const MAX_ITEMS_PER_PAGE = 13;

  useEffect(() => {
    findDisplayableItems(
      setTicketsOnCurrentPage,
      currentPage,
      listOfTickets,
      MAX_ITEMS_PER_PAGE
    );
  }, [currentPage]);

  useEffect(() => {
    findTotalPageNumbers(
      listOfTickets,
      setTotalPageNumbers,
      MAX_ITEMS_PER_PAGE
    );
  }, []);

  return (
    <div className="tickets shadow position-relative">
      <p className="m-2">My Tickets</p>
      <div className="row g-1 m-2 ticket-header">
        <div className="col-2 text-truncate">Ticket</div>
        <div className="col-4 text-truncate">Project</div>
        <div className="col-4 text-truncate">User</div>
        <div className="col-2 text-truncate">Status</div>
      </div>
      {ticketsOnCurrentPage.map((currentTicket) => {
        return (
          <div className="row g-1 m-2">
            <div className="col-2 text-truncate">{currentTicket[0]}</div>
            <div className="col-4 text-truncate">{currentTicket[1]}</div>
            <div className="col-4 text-truncate">{currentTicket[2]}</div>
            <div className="col-2 text-truncate">{currentTicket[3]}</div>
          </div>
        );
      })}
      <div className="pagination position-absolute bottom-0">
        {createButtonElements(currentPage, totalPageNumbers, setCurrentPage)}
      </div>
    </div>
  );
};

export default MyTickets;
