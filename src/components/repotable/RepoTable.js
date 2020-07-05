import React, { Component } from 'react'
import RepoRows from './RepoRows'

export default class RepoTable extends Component {
    
    constructor(props){
        super(props)
        this.state={
            localReposData: this.parseRepoData(),
            sortSettings : {
                column: 'Stars',
                order: 'asc'
            }
        };
    }

    parseRepoData(){
        return this.props.repos.map((repo)=>{
            return {
                name      : repo.name,
                url       : repo.url,
                size      : repo.diskUsage,
                created   : repo.createdAt,
                updated   : repo.updatedAt,
                forks     : repo.forkCount,
                issues    : repo.issues.totalCount, 
                stars     : repo.stargazers.totalCount, 
                watchers  : repo.watchers.totalCount, 
                language  : !repo.primaryLanguage ? '' : repo.primaryLanguage.name
            }
        })
    }
    sort = (column)=>{
        const order = this.state.sortSettings.order === 'asc' ? 'desc' : 'asc';
        const numeric = column === 'size' || column === 'stars' || column === 'forks' || column === 'issues' || column === 'watchers'

        this.state.localReposData.sort((a, b)=>{
            return order === 'asc'
                    ?a[column].toString().localeCompare(b[column].toString(), undefined, {numeric})
                    :b[column].toString().localeCompare(a[column].toString(), undefined, {numeric})
        })

        this.setState({
            sortSettings:{
                column,
                order
            },
            localReposData: this.state.localReposData
        })
    }
    removeItems(){
        alert("remove");
      }
    render() {
        return (
        <table className="table is-fullwidth">
            <thead>
              <tr>
                <th onClick={this.sort.bind(this, 'name')} > Name <i className="fas fa-sort" ></i></th>
                <th name='link'>Link</th>
                <th onClick={this.sort.bind(this, 'size')} > Size (KB)  <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'stars')} > Stars <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'forks')} > Forks <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'issues')} > Issues <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'watchers')} > Watchers <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'language')} > Language <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'created')} > created <i className="fas fa-sort" ></i></th>
                <th onClick={this.sort.bind(this, 'updated')} > Updated <i className="fas fa-sort" ></i></th>
              </tr>
            </thead>
            <tbody>
                <RepoRows repos={this.state.localReposData}/>
            </tbody> 
        </table>
        )
    }
}
