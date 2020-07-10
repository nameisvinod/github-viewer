import React from "react";
import {
  LineChart,
  BarChart,
  DoughnutChart,
  RadarChart,
} from "./charts/index.js";
import createChartData from "../data/CreateChartData";

export default function Chart({ user }) {
  const { popularReposData, languagesData, userStats } = createChartData(user);

  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall 1",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        data:
          // [65, 59, 80, 81, 56],
          [12, 89, 12, 19, 90],
      },
      {
        label: "Rainfall 2",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(0,192,192,1)",
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="column is-one-third-desktop">
        <div className="is-size-5">Repo Stats</div>
        <RadarChart data={userStats} />
      </div>
      <div className="column is-one-third-desktop">
        <div className="is-size-5">Popular Repos</div>
        <BarChart data={popularReposData} />
      </div>
      <div className="column is-one-third-desktop">
        <div className="is-size-5">Languages</div>
        <DoughnutChart data={languagesData} />
      </div>
    </React.Fragment>
  );
}
