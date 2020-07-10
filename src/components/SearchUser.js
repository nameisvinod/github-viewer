import React, { Component } from "react";

export default class SearchUser extends Component {
  state = {
    username: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column input-container is-half">
            <form onSubmit={this.onSubmit} className="align-items-center">
              <div className="field has-addons has-addons-centered">
                <div className="control has-icons-left">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                    name="username"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <button className="button is-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
