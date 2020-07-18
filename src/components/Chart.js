import React from "react";
import { BarChart, DoughnutChart, RadarChart } from "./charts/index.js";
import createChartData from "../data/CreateChartData";

export default function Chart({ user }) {
  const { popularReposData, languagesData, userStats } = createChartData(user);

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
