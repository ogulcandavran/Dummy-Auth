import React from "react";
import Login from "./Login";

export default function LoginPage({ login }) {
  return (
    <div>
      <button onClick={() => login("ogulcan")}>LOGIN</button>
    </div>
  );
}
