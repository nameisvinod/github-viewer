import React, { useState } from "react";
import "./App.css";
import { useLazyQuery } from "@apollo/react-hooks";
import FETCH_USER_QUERY from "./queries/FetchUserQuery";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import SearchUser from "./components/SearchUser";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Profile from "./components/Profile";

import data from "./data/data.json";

function App() {
  const [searchedUsers, setSearcehedUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [getUser] = useLazyQuery(FETCH_USER_QUERY, {
    onCompleted: (data) => {
      setUser(data.user);
      const searchedUserName = data.user.name;
      console.log("completed : " + searchedUserName);
    },
    onError: ({ graphQLErrors, networkError }) => {
      setUser(null);
      if (graphQLErrors) {
        if (graphQLErrors.length > 0)
          console.log(graphQLErrors[0].message, "error");
      } else if (networkError) {
        console.log("Please check your network connection!", "error");
      }
    },
  });
  return (
    <div className="App">
      <section className="section min-height-100 flex-column space-between padding-bottom-0">
        <Header />
        <SearchUser
          onSubmit={(username) =>
            getUser({
              variables: {
                username,
                numberofrepos: 100,
              },
            })
          }
        />
        {/* <Profile user={user} /> */}
        <Profile user={data} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
