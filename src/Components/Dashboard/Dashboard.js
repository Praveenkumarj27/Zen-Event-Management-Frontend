import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Card from "./Card";

function Dashboard() {
  const cards = [
    {
      title: "Hackathon Tasks",
      amount: "50%",
      theme: "primary",
      icons: "calendar",
    },
    {
      title: "Capstone Tasks",
      amount: "18%",
      theme: "success",
      icons: "dollar",
    },
    {
      title: "Hackathon Submission",
      amount: "50%",
      theme: "info",
      icons: "clipboard",
    },
    {
      title: "Capstone Submission",
      amount: "18%",
      theme: "warning",
      icons: "comments",
    },
  ];
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          <div className="row">
            {cards.map((card) => {
              return <Card data={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
