import React, { Component } from "react";

export default class UserNotFound extends Component {
  render() {
    return (
      <div className="container has-text-left">
        <div className="columns is-centered">
          <div className="column">
            <article className="message is-danger">
              <div className="message-header">
                <p>Error</p>
              </div>
              <div className="message-body">
                A GitHub user with the name does not exist. Please try another
                search.
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
