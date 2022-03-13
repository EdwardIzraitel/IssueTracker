import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-welcome">
        <p>Welcome Edward</p>
        <p>Logged in as: Admin</p>
      </div>
      <nav>
        <button>Dashboard</button>
        <button>My Projects</button>
        <button>My Tickets</button>
        <button>User Roles</button>
        <button>Manage Project Users</button>
      </nav>
    </div>
  );
};

export default Sidebar;
