import React, { Component } from 'react'
import RepoRow from './RepoRow'

export default class RepoRows extends Component {
    render() {
        return this.props.repos.map((repo) => ( <
            RepoRow key = { repo.name }
            repo = { repo }
            />
        ))
    }
}