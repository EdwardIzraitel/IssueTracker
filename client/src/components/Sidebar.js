import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="user-welcome">
        <p>Welcome Edward</p>
        <p>Logged in as: Admin</p>
      </div>
      <nav>
        <button onClick={() => navigate("/")}>Dashboard</button>
        <button onClick={() => navigate("/projects")}>My Projects</button>
        <button onClick={() => navigate("/tickets")}>My Tickets</button>
        <button>User Roles</button>
        <button>Manage Project Users</button>
      </nav>
    </div>
  );
};

export default Sidebar;
