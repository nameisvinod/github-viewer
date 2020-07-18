import React, { Component } from "react";
import Colors from "../shared/Colors";

export default class RecentSearch extends Component {
  render() {
    return (
      <div className="column is-half">
        <div className="box is-fullheight has-text-left">
          <div className="menu">
            <p className="menu-label">RECENT SEARCHES</p>
            <ul className="menu-list overflow-auto max-height-200">
              {this.props.recentSearches.map((recentSearch) => (
                <RecentSearchTag
                  key={recentSearch.login}
                  recentSearch={recentSearch}
                  currentUser={this.props.currentUser}
                  getUser={this.props.getUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class RecentSearchTag extends Component {
  onClick = (e) => {
    e.preventDefault();
    const userName = e.target.querySelector("span.login").textContent;
    this.props.getUser(userName);
  };
  render() {
    const { login, lastFetch } = this.props.recentSearch;
    return (
      <li onClick={this.onClick}>
        <a
          className="is-size-5 is-relative"
          style={getSelectedUserStyle(login, this.props.currentUser)}
        >
          <span className="login">{login}</span>
          <span className="is-size-7">
            <br />
            Last Fetched @ {lastFetch}
          </span>
        </a>
      </li>
    );
  }
}

const getSelectedUserStyle = (login, currentUser) => {
  return login === currentUser
    ? {
        background: Colors.dodgerblue,
        color: Colors.white,
      }
    : {};
};
