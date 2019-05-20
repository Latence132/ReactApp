import React from "react";

function UserGreeting(props) {
  const user = props.user
  return <h1>Bienvenue {user} !</h1>;
}

export default UserGreeting;
