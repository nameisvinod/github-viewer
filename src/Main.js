import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import FETCH_USER_QUERY from "./queries/FetchUserQuery";
import { formatDate } from "./shared/Utils";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import ProfileSearch from "./components/ProfileSearch";
import Profile from "./components/Profile";
import UserNotFound from "./components/UserNotFound";
import { useHistory } from "react-router-dom";

import data from "./data/data.json";

function Main({ userData }) {
  console.log(userData);
  const history = useHistory();
  const [userNotFound, setUserNotFound] = useState(false);
  let [recentSearches, setRecentSearches] = useState([]);
  const [user, setUser] = useState(userData);
  const [isLoading, setIsLoading] = useState(false);

  const [getUser] = useLazyQuery(FETCH_USER_QUERY, {
    onCompleted: (data) => {
      history.push(`/?u=${data.user.login}`);
      setUser(data.user);
      setUserNotFound(false);
      setIsLoading(false);
      updateRecentSearch(data.user.login);
    },
    onError: ({ graphQLErrors, networkError }) => {
      setUser(null);
      setUserNotFound(true);
      setIsLoading(false);
      if (graphQLErrors) {
        if (graphQLErrors.length > 0)
          console.log(graphQLErrors[0].message, "error");
      } else if (networkError) {
        console.log("Please check your network connection!", "error");
      }
    },
  });

  const updateRecentSearch = (userName) => {
    console.log(recentSearches.length);
    recentSearches = recentSearches.filter((search) => {
      return search.login !== userName;
    });
    recentSearches.unshift({
      login: userName,
      lastFetch: formatDate(new Date(), "DD-MMM-YYYY HH:mm:ss"),
    });
    if (recentSearches.length > 4) recentSearches.pop();
    setRecentSearches(recentSearches);
  };
  const fetchUserData = (username) =>
    getUser({
      variables: {
        username,
        numberofrepos: 100,
      },
    });

  return (
    <div className="App">
      <section className="section min-height-100 flex-column space-between padding-bottom-0">
        <Header />
        <ProfileSearch isLoading={isLoading} onSubmit={fetchUserData} />
        {userNotFound ? (
          <UserNotFound />
        ) : (
          <Profile
            user={user}
            recentSearches={recentSearches}
            getUser={fetchUserData}
          />
        )}
        {/* <Profile user={data} recentSearches={recentSearches} /> */}
        <Footer />
      </section>
    </div>
  );
}

export default Main;
