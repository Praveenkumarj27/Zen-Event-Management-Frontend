import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
function Dashboard() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
    series: [
      {
        data: [30, 40, 45, 50, 34, 64, 50],
      },
    ],
  });
  return (
      <>

      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="container" >
        <div className="row">
          <div className="col-4">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
          </div>
          {/* <div className="col-4">
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="450"
            />
          </div> */}
        </div>
      </div>

     </>
    
  );
}

export default Dashboard;



