import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="col-1 side-bar">
      <div style={{ paddingLeft: "1vh", paddingTop: "3vh" }}>
        <p>Welcome Edward</p>
        <p>Logged in as: Admin</p>
        <div className="d-grid gap-2">
          <button className="btn btn-border-slide shadow-none">
            Dashboard
          </button>
          <button className="btn btn-border-slide shadow-none">
            My Projects
          </button>
          <button className="btn btn-border-slide shadow-none">
            My Tickets
          </button>
          <button className="btn btn-border-slide shadow-none">
            User Roles
          </button>
          <button className="btn btn-border-slide shadow-none">
            Manage Project Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
