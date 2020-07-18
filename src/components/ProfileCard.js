import React from "react";
import { formatDate } from "../shared/Utils";

export default function ProfileCard({ user }) {
  return (
    <div className="column is-half">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={user.avatarUrl} alt="alt" />
              </figure>
            </div>
            <div className="media-content">
              <p className="has-text-weight-semibold is-size-3">
                <a target="_blank" rel="noopener noreferrer" href={user.url}>
                  {user.login}
                </a>
              </p>
              <p className="subtitle is-6">@ {user.name}</p>
              <p className="subtitle is-6">{user.bio}</p>
            </div>
          </div>
          <div className="columns has-text-center">
            <UserStats text="Followers" count={user.followers.totalCount} />
            <UserStats text="Following" count={user.following.totalCount} />
            <UserStats
              text="Repositories"
              count={user.repositories.totalCount}
            />
          </div>
          <div className="columns">
            {user.location && (
              <div className="column">
                <div className="tag">
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  {user.location}
                </div>
              </div>
            )}
            <div className="column">
              <div className="tag">
                <span className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                {formatDate(user.createdAt, "DD-MMM-YYYY")}
              </div>
            </div>
            <div className="column">
              <div className="tag">
                <span className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                {formatDate(user.updatedAt, "DD-MMM-YYYY")}
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
        {/* <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on{" "}
              <a target="_blank" rel="noopener noreferrer" href={user.url}>
                Github
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on{" "}
              <a target="_blank" rel="noopener noreferrer" href={user.url}>
                Linkedin
              </a>
            </span>
          </p>
        </footer> */}
      </div>
    </div>
  );
}

function UserStats({ text, count }) {
  return (
    <div className="column">
      <div className="subtitle is-4"> {text} </div>
      <div className="subtitle is-3"> {count} </div>
    </div>
  );
}
