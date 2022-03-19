import React, { useEffect, useState } from "react";
import "./Tickets.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  createButtonElements,
  findDisplayableItems,
  findTotalPageNumbers,
} from "../components/ButtonNavigator/ButtonNavigator";
const Tickets = () => {
  const listOfTickets = [
    [
      "1",
      "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      "Edward",
      "Active",
    ],
    ["2", "test", "Edward", "Active"],
    ["3", "test", "Edward", "Active"],
    ["4", "test", "Edward", "Active"],
    ["5", "test", "Edward", "Active"],
    ["6", "test", "Edward", "Active"],
    ["7", "test", "Edward", "Active"],
    ["8", "test", "Edward", "Active"],
    ["9", "test", "Edward", "Active"],
    ["10", "test", "Edward", "Active"],
    ["11", "test", "Edward", "Active"],
    ["12", "test", "Edward", "Active"],
    ["13", "test", "Edward", "Active"],
    ["14", "test", "Edward", "Active"],
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
    <div className="content-wrapper">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="tickets">
          <p>My Tickets</p>
          <table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Project</th>
                <th style={{ width: "30%" }}>Ticket</th>
                <th style={{ width: "20%" }}>User</th>
                <th style={{ width: "20%" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {ticketsOnCurrentPage.map((currentTicket) => {
                return (
                  <tr>
                    <td>{currentTicket[0]}</td>
                    <td>{currentTicket[1]}</td>
                    <td>{currentTicket[2]}</td>
                    <td>{currentTicket[3]}</td>
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
    // <div className="tickets shadow position-relative">
    //   <p className="m-2">My Tickets</p>
    //   <div className="row g-1 m-2 ticket-header">
    //     <div className="col-2 text-truncate">Ticket</div>
    //     <div className="col-4 text-truncate">Project</div>
    //     <div className="col-4 text-truncate">User</div>
    //     <div className="col-2 text-truncate">Status</div>
    //   </div>
    //   {ticketsOnCurrentPage.map((currentTicket) => {
    //     return (
    //       <div className="row g-1 m-2">
    //         <div className="col-2 text-truncate">{currentTicket[0]}</div>
    //         <div className="col-4 text-truncate">{currentTicket[1]}</div>
    //         <div className="col-4 text-truncate">{currentTicket[2]}</div>
    //         <div className="col-2 text-truncate">{currentTicket[3]}</div>
    //       </div>
    //     );
    //   })}
    //   <div className="pagination position-absolute bottom-0">
    //     {createButtonElements(currentPage, totalPageNumbers, setCurrentPage)}
    //   </div>
    // </div>
  );
};

export default Tickets;
