import React from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import { useCookies } from "react-cookie";
import About from "./About";
import CleanCity from "./CleanCity";

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  function login(userName) {
    setCookie("user", userName, { path: "/" });
  }

  function logout() {
    removeCookie("user", { path: "/" });
  }

  function onStart(userName) {
    setCookie("user", userName, { path: "/" });
  }

  /* useEffect(() => onStart("ogulcan"), []); */

  console.log(cookies);

  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() =>
          cookies.user ? (
            <>
              <HomePage isLoggedIn={cookies["user"]} logout={logout} />
              <Link to="/about">ABOUT US </Link>
              <Link to="/cleancity">CLEAN CITY</Link>
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        path="/login"
        exact
        render={() =>
          cookies.user ? (
            <Redirect to="/" />
          ) : (
            <Login isLoggedIn={cookies["user"]} login={login} />
          )
        }
      />
      <Route path="/about" exact render={() => <About />} />
      <Route
        path="/cleancity"
        exact
        render={() =>
          !cookies.user ? <Redirect to="/login" /> : <CleanCity />
        }
      />
    </BrowserRouter>
  );
}
