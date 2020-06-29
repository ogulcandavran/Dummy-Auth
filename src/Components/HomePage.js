import React from "react";
import { Redirect, BrowserRouter } from "react-router-dom";
import Overview from "./Overview";
import About from "./About";

export default function HomePage({ isLoggedIn, logout }) {
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Overview isLoggedIn={isLoggedIn} logout={logout} />
      ) : (
        <Redirect to="/login" />
      )}
    </BrowserRouter>
  );
}
