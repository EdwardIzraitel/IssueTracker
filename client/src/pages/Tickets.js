import React from "react";
import "./Tickets.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MyTickets from "../components/MyTickets/MyTickets";
const Tickets = () => {
  return (
    <div className="background">
      <div className="row g-0">
        <Sidebar />
        <div className="col">
          <Header />
          <MyTickets />
          <div className="empty_box" />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
