import React from "react";
import ProfileCard from "./ProfileCard";
import RecentSearch from "./RecentSearch";
import Chart from "./Chart";
import RepoTable from "./repotable/RepoTable";

export default function Profile({ user, recentSearches, getUser }) {
  return (
    user && ( // check if user exist
      <React.Fragment>
        <div className="container profile-card">
          <div className="columns">
            <RecentSearch
              recentSearches={recentSearches}
              currentUser={user.login}
              getUser={getUser}
            />
            <ProfileCard user={user} />
          </div>
        </div>
        <div className="container box">
          <h2 className="title is-2 has-text-left">Overview</h2>
          <div className="columns">
            <Chart user={user} />
          </div>
          <article className="message is-warning">
            <div className="message-body has-text-left">
              <div className="content is-small">
                <p className="is-marginless">
                  <strong>NOTE:</strong>
                </p>
                <ul>
                  <li>
                    Datasets contains only first 100 repos sorted on stars
                  </li>
                  <li>
                    Private and forked repos have been omitted from these
                    results.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <div className="container box">
          <h2 className="title is-2 has-text-left">Repos</h2>
          <RepoTable repos={user.repositories.nodes} key={user.login} />
        </div>
      </React.Fragment>
    )
  );
}

// const profileCardStyle = {
//   marginBottom: "1.5rem !important",
//   backgroundColor: "red",
// };
