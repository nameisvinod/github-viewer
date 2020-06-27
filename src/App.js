import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import FETCH_USER_QUERY from "./Queries/FetchUserQuery";

function App() {
  const { data, loading, error } = useQuery(FETCH_USER_QUERY, {
    variables: {
      user_name:'shawn', 
      number_of_repos: 100
    }
  });
  if(loading) return <p>Loading .... </p>
  if(error) return <p>Failed to load</p>

  console.log(data);

  return (
    <div className="App">
      <p>{data.user.login}</p>
    </div>
  );
}

export default App;
