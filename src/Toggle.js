import React from "react";

import { Button } from "react-materialize";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </Button>
    );
  }
}

export default Toggle;
