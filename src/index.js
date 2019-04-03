import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
})

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
