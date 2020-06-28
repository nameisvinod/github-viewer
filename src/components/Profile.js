import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                {this.props.user.name}
            </div>
        )
    }
}
