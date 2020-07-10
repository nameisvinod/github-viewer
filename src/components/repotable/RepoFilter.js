import React, { Component } from "react";

export default class RepoFilter extends Component {
  state = {
    repofilter: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className="columns is-centered">
        <div className="column input-container is-half">
          <div className="field has-addons has-addons-centered">
            <div className="control has-icons-left">
              <input
                className="input is-info"
                type="text"
                placeholder="Filter repos"
                value={this.state.repoFilter}
                onChange={this.onChange}
                name="repofilter"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
