import React from 'react'

export default function ProfileCard({user}) {
    return (
        <div className="container">
            <div className="column is-one-third">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={user.avatarUrl} alt="alt"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{user.login}</p>
                                <p className="subtitle is-6">@{user.name}</p>
                            </div>
                        </div>

                        <div className="content">
                            <div className="has-text-left">
                                {user.bio}
                            </div>
                            <div className="columns has-text-left">
                                <div className="column">
                                    {/* Followers : {user.followers.totalCount} */}
                                    Followers 12
                                </div>
                                <div className="column">
                                    {/* Following : {user.following.totalCount} */}
                                    Following 12
                                </div>
                                <div className="column">
                                    {/* Repositories : {user.repositories.totalCount} */}
                                    Repositories 21
                                </div>
                            </div>
                            <br/>

                        </div>
                        <time className="has-text-left" dateTime="2016-1-1">{user.updatedAt}</time>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                View on <a target="_blank" rel="noopener noreferrer" href={user.url}>Github</a>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                Share on <a href="#">Linkedin</a>
                            </span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
