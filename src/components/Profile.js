import React from 'react'
import ProfileCard from './ProfileCard'
import RecentSearch from './RecentSearch'
import Chart from './Chart'
import RepoTable from './repotable/RepoTable'

export default function Profile({user}) {
    return (
        user &&                 // check if user exist
        <React.Fragment>
            <div className="container ">
                <div className="columns">
                    <RecentSearch />
                    <ProfileCard user={user}/>
                </div>
            </div>
            <div className="container">
                <div className="box">
                    <h2 className="title is-2 has-text-left">Overview</h2>
                    <div className="columns">
                        <Chart user={user}/>
                    </div>
                </div>
            </div>
            <div className="container box">
                <h2 className="title is-2 has-text-left">Repos</h2>
                <RepoTable repos={user.repositories.nodes} key={user.login} />
            </div>
        </React.Fragment>
    )
}
