import React from "react";

export default function Overview({ isLoggedIn, logout }) {
  return (
    <div>
      OVERVIEW
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}
