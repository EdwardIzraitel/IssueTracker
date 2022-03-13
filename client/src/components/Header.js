import React from "react";
import "./Header.css";
import home from "../images/home.png";
import downarrow from "../images/downarrow.png";
import notification from "../images/notification.png";

const Header = () => {
  return (
    <div className="headerbg">
      <div className="header-content">
        <input type="text" placeholder="Search" />
        <div className="header-buttons">
          <img src={home} alt="" />
          <div className="dividor" />
          <img src={notification} alt="" />
          <div className="dividor" />
          <div className="user-dropdown">
            <p style={{ color: "black" }}>Edward</p>
            <img src={downarrow} style={{ marginLeft: "5px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
