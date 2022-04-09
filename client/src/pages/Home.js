import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  createButtonElements,
  findDisplayableItems,
  findTotalPageNumbers,
} from "../components/ButtonNavigator/ButtonNavigator";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Stats from "../components/DonutChart/Stats";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../app/api/userAPI";

const Home = () => {
  const navigate = useNavigate();
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
  const [verified, setVerified] = useState(false);
  const MAX_ITEMS_PER_PAGE = 4;

  useEffect(() => {
    findDisplayableItems(
      setProjectsOnCurrentPage,
      currentProjectPage,
      list,
      MAX_ITEMS_PER_PAGE
    );
  }, [currentProjectPage]);

  useEffect(() => {
    async function getToken() {
      try {
        const verifiedToken = await verifyToken();
        if (!verifiedToken.data) navigate("/login");
        setVerified(true);
      } catch (error) {
        navigate("/login");
      }
    }
    getToken();
    findTotalPageNumbers(list, setTotalPageNumbers, MAX_ITEMS_PER_PAGE);
  }, []);

  return (
    <div className="content-wrapper">
      <Sidebar />
      <main className="main-content">
        <Header />
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
          </div>
        </div>
        <Stats />
      </main>
    </div>
  );
};

export default Home;
