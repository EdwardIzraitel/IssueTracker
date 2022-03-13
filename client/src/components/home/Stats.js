import React from "react";
import "./Stats.css";
import DonutChart from "react-donut-chart";

const Stats = () => {
  return (
    <div className="stats-flexbox">
      <div className="stat-box">
        <p>Tickets by Type</p>
        <DonutChart
          //   height="500px"
          //   width="750px"
          //   innerRadius={0.2}
          //   outerRadius={0.3}
          data={[
            {
              label: "Bug",
              value: 25,
            },
            {
              label: "Feature",
              value: 75,
            },
          ]}
        />
      </div>
      <div className="stat-box">
        <p>Tickets by Priority</p>
      </div>
      <div className="stat-box">
        <p>Tickets by Status</p>
      </div>
    </div>

    // <div className="row g-0">
    //     <div className="col">
    //         <div className="box shadow">
    //             Tickets by Type
    //         </div>
    //     </div>
    //         <div className="col">
    //         <div className="box shadow">Tickets by Priority</div>
    //     </div>
    //         <div className="col">
    //         <div className="box shadow">Tickets by Status</div>
    //     </div>
    // </div>
  );
};

export default Stats;
