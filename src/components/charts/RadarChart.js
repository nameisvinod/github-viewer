import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  scale: {
    ticks: {
      beginAtZero: true,
    },
  },
  tooltips: {
    callbacks: {
      title: function (tooltipItems, data) {
        return "";
      },
      label: function (tooltipItem, data) {
        return (
          data.labels[tooltipItem.index] +
          " : " +
          data.datasets[0].data[tooltipItem.index]
        );
      },
    },
  },
  aspectRatio: 1,
};

export default class RadarChart extends Component {
  render() {
    return (
      <Radar
        options={options}
        data={this.props.data}
        height={null}
        width={null}
      />
    );
  }
}
