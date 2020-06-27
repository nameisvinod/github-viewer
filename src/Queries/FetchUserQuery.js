import gql from "graphql-tag";

const FETCH_USER_QUERY = gql `query ($number_of_repos: Int!, $user_name: String!) {
    user(login: $user_name) {
      login
      name
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(ownerAffiliations: [OWNER], last: $number_of_repos, orderBy: {field: STARGAZERS, direction: DESC}) {
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