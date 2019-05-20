import React from "react";
import UserGreeting from "./UserGreeting.js";
import GuestGreeting from "./GuestGreeting.js";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const user = props.user
  if (isLoggedIn) {
    return <UserGreeting user={user} />;
  }
  return <GuestGreeting />;
}

export default Greeting;
