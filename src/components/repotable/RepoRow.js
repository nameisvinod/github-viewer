import React, { Component } from 'react'
import {formatDate} from '../../shared/Utils'

export default class RepoRow extends Component {
    render() {
        const {name, size, forks, issues, stars, watchers, language, created, updated, url} = this.props.repo
        return (
            <tr>
                <td>{name}</td>
                <td>
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        <i className="fab fa-github"></i>
                    </a>
                </td>
                <td>{size}</td>
                <td>{stars}</td>
                <td>{forks}</td>
                <td>{issues}</td>
                <td>{watchers}</td>
                <td>{language}</td>
                <td>{formatDate(created, "YYYY-MM-DD")}</td>
                <td>{formatDate(updated, "YYYY-MM-DD")}</td>
            </tr>
        )
    }
}