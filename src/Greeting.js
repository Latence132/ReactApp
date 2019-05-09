import React from "react";
import UserGreeting from "./UserGreeting.js";
import GuestGreeting from "./GuestGreeting.js";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
