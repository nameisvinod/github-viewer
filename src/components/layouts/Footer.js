import React from "react";

function Footer() {
  return (
    <div className="footer margin-top has-background-white">
      <p className="has-text-centered">
        Created by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nameisvinod"
        >
          Vinod Kumar S
        </a>{" "}
        using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          React
        </a>{" "}
        +{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.chartjs.org/"
        >
          Chart.js
        </a>{" "}
        +{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://bulma.io/">
          Bulma
        </a>{" "}
        +{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.github.com/en/graphql"
        >
          Github GraphQL API
        </a>
      </p>
    </div>
  );
}
export default Footer;
