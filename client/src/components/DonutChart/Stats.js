import React from "react";
import "./Stats.css";
import DonutChart from "react-donut-chart";

const Stats = () => {
  return (
    <div className="stats-flexbox">
      <div className="stat-box">
        <p>Tickets by Type</p>
        <DonutChart
          className="dchart"
          height={250}
          width={300}
          innerRadius={0.7}
          outerRadius={0.9}
          data={[
            {
              label: "Bug",
              value: 75,
            },
            {
              label: "Feature",
              value: 25,
            },
          ]}
        />
      </div>
      <div className="stat-box">
        <p>Tickets by Priority</p>
        <DonutChart
          className="dchart"
          height={250}
          width={300}
          innerRadius={0.7}
          outerRadius={0.9}
          selectedOffset={0}
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
        <p>Tickets by Status</p>
        <DonutChart
          className="dchart"
          height={250}
          width={300}
          innerRadius={0.7}
          outerRadius={0.9}
          selectedOffset={0}
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
    </div>
  );
};

export default Stats;
