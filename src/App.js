import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import FETCH_USER_QUERY from "./queries/FetchUserQuery";

import "react-bulma-components/dist/react-bulma-components.min.css";
import "./App.css";

import Main from "./Main";

function useSearchQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryScreen() {
  let query = useSearchQuery();
  let username = query.get("u");
  const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      username: username,
      numberofrepos: 100,
    },
    skip: username === "" || username === null,
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let userData = data ? data.user : null;
  return <Main userData={userData} />;
}
function App() {
  return (
    <Router>
      <QueryScreen />
    </Router>
  );
}

export default App;
