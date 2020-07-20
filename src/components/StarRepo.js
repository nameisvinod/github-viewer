import React, { Component } from "react";
import "bulma-tooltip";

export default class StarRepo extends Component {
  render() {
    return (
      <div style={{ margin: "5px" }}>
        <span className="icon" data-tooltip="Star this repo">
          <a
            href="https://github.com/nameisvinod/github-viewer"
            target="_blank"
          >
            <i className="far fa-star" style={starStyle}></i>
          </a>
        </span>
      </div>
    );
  }
}

const starStyle = {
  marginLeft: "5px",
  marginTop: "8px",
  color: "gold",
  fontSize: "1.5em",
  cursor: "pointer",
};
