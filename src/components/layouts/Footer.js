import React from "react";

function Footer() {
  return (
    <div className="footer has-background-white">
      <p className="content has-text-centered">
        Created by{" "}
        <a target="_blank" href="https://github.com/nameisvinod">
          Vinod Kumar S
        </a>{" "}
        with{" "}
        <a target="_blank" href="https://reactjs.org/">
          React
        </a>{" "}
        +{" "}
        <a target="_blank" href="https://bulma.io/">
          Bulma
        </a>{" "}
        +{" "}
        <a target="_blank" href="https://docs.github.com/en/graphql">
          Github GraphQL API
        </a>
      </p>
    </div>
  );
}
export default Footer;
