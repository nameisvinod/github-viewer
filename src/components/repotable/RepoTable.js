import React, { Component } from "react";
import RepoRows from "./RepoRows";
import RepoFilter from "./RepoFilter";

export default class RepoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoData: [],
      filteredRepoData: [],
      sortSettings: {
        column: "Stars",
        order: "asc",
      },
    };
  }

  componentWillMount() {
    this.setState({
      repoData: this.parseRepoData(),
      filteredRepoData: this.parseRepoData(),
      sortSettings: {
        column: "Stars",
        order: "asc",
      },
    });
  }

  parseRepoData() {
    return this.props.repos.map((repo) => {
      return {
        name: repo.name,
        url: repo.url,
        size: !repo.diskUsage ? 0 : repo.diskUsage,
        created: repo.createdAt,
        updated: repo.updatedAt,
        forks: repo.forkCount,
        issues: repo.issues.totalCount,
        stars: repo.stargazers.totalCount,
        watchers: repo.watchers.totalCount,
        language: !repo.primaryLanguage ? "" : repo.primaryLanguage.name,
      };
    });
  }
  sort = (column) => {
    const order = this.state.sortSettings.order === "asc" ? "desc" : "asc";
    const numeric =
      column === "size" ||
      column === "stars" ||
      column === "forks" ||
      column === "issues" ||
      column === "watchers";

    this.state.filteredRepoData.sort((a, b) => {
      return order === "asc"
        ? a[column]
            .toString()
            .localeCompare(b[column].toString(), undefined, { numeric })
        : b[column]
            .toString()
            .localeCompare(a[column].toString(), undefined, { numeric });
    });

    this.setState({
      sortSettings: {
        column,
        order,
      },
      filteredRepoData: this.state.filteredRepoData,
    });
  };
  filterRepo = (filterRepo) => {
    if (filterRepo === "") {
      this.setState({
        filteredRepoData: this.state.repoData,
      });
      return;
    }
    const filteredRepoData = this.state.repoData.filter((repo) => {
      return repo.name.toLowerCase().includes(filterRepo);
    });
    this.setState({
      filteredRepoData,
    });
  };
  render() {
    return (
      <React.Fragment>
        <RepoFilter onChange={this.filterRepo} />
        <div className="table-container">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th onClick={this.sort.bind(this, "name")}>
                  {" "}
                  Name <i className="fas fa-sort"></i>
                </th>
                <th name="link">Link</th>
                <th onClick={this.sort.bind(this, "size")}>
                  {" "}
                  Size (KB) <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "stars")}>
                  {" "}
                  Stars <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "forks")}>
                  {" "}
                  Forks <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "issues")}>
                  {" "}
                  Issues <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "watchers")}>
                  {" "}
                  Watchers <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "language")}>
                  {" "}
                  Language <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "created")}>
                  {" "}
                  created <i className="fas fa-sort"></i>
                </th>
                <th onClick={this.sort.bind(this, "updated")}>
                  {" "}
                  Updated <i className="fas fa-sort"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <RepoRows
                repos={this.state.filteredRepoData}
                sortColumn={this.state.sortSettings.column}
              />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
