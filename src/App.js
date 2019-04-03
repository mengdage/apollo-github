import React, { Component } from 'react'
import './App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query GetRepositoriesOfOrganization($login: String!) {
    organization(login: $login) {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`

class App extends Component {
  render() {
    const queryVariable = {
      login: 'the-road-to-learn-react'
    }

    return (
      <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={queryVariable}>
        {({ data, loading, error }) => {
          if (error) return 'error'
          if (loading) return 'loading'

          return (
            <ul>
              {data.organization.repositories.edges.map(repo => (
                <li key={repo.node.id}>
                  <a href={repo.node.url}>{repo.node.name}</a>
                </li>
              ))}
            </ul>
          )
        }}
      </Query>
    )
  }
}

export default App
