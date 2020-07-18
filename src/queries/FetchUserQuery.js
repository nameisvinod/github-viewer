import gql from "graphql-tag";

const FETCH_USER_QUERY = gql `query ($numberofrepos: Int!, $username: String!) {
    user(login: $username) {
      login
      name
      bio
      url
      avatarUrl
      updatedAt
      location
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      pullRequests{
        totalCount
      },
      commitComments{
          totalCount
      },
      issues{
        totalCount
      }
      repositories(ownerAffiliations: [OWNER], last: $numberofrepos, orderBy: {field: STARGAZERS, direction: DESC}) {
        totalCount
        nodes {
          diskUsage
          name
          description
          url
          createdAt
          updatedAt
          forkCount
          issues(states: [OPEN]) {
            totalCount
          }
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
          primaryLanguage {
            name
          }
        }
      }
    }
}`


export default FETCH_USER_QUERY