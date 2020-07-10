import React, { Component } from "react";
import { formatDate } from "../../shared/Utils";

export default class RepoRow extends Component {
  getSortClass = (column) => {
    return column === this.props.sortColumn ? "has-background-light" : "";
  };
  render() {
    const {
      name,
      size,
      forks,
      issues,
      stars,
      watchers,
      language,
      created,
      updated,
      url,
    } = this.props.repo;
    return (
      <tr>
        <td className={this.getSortClass("name")}>{name}</td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <i className="fab fa-github"></i>
          </a>
        </td>
        <td className={this.getSortClass("size")}>{size}</td>
        <td className={this.getSortClass("stars")}>{stars}</td>
        <td className={this.getSortClass("forks")}>{forks}</td>
        <td className={this.getSortClass("issues")}>{issues}</td>
        <td className={this.getSortClass("watchers")}>{watchers}</td>
        <td className={this.getSortClass("language")}>{language}</td>
        <td className={this.getSortClass("created")}>
          {formatDate(created, "YYYY-MM-DD")}
        </td>
        <td className={this.getSortClass("updated")}>
          {formatDate(updated, "YYYY-MM-DD")}
        </td>
      </tr>
    );
  }
}
