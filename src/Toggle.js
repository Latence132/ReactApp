import React from "react";

import { Button } from "react-materialize";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isToggleOn: null };

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(isToggleOn) {
    this.props.onToggleOnChange(!isToggleOn);
  }

  render() {
    const isToggleOn = this.props.isToggleOn;
    return (
      <Button onClick={this.handleClick} value={isToggleOn}>
        {isToggleOn ? "Déconnection" : "Connection"}
      </Button>
    );
  }
}

export default Toggle;
