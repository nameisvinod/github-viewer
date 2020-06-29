import React from 'react'
import ProfileCard from './ProfileCard'

export default function Profile({user}) {
    return (
        <div>
            <ProfileCard user={user}/>
        </div>
    )
}
