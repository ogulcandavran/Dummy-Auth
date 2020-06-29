import React from "react";
import { Redirect, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default function Login({ isLoggedIn, login }) {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => <HomePage isLoggedIn={isLoggedIn} />}
      />
      {!isLoggedIn ? (
        <LoginPage isLoggedIn={isLoggedIn} login={login} />
      ) : (
        <Redirect to="/" />
      )}
    </BrowserRouter>
  );
}
