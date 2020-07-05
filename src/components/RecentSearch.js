import React from 'react'

export default function RecentSearch() {
    return (
        <div className="column is-half">
            <div className="card">
                <RecentSearchTag />
                <RecentSearchTag />
                <RecentSearchTag />
            </div>
        </div>
    )
}

function RecentSearchTag({recentSearchedUser}){
    return (
        <div>
            search one
        </div>
    )
} 