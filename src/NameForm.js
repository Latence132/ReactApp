import React from "react";
import { Button } from "react-materialize";
import M from "materialize-css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { user: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.setUser = this.setUser.bind(this);
  }

  handleChange(event) {
    // this.setState({ user: event.target.value });
    console.log("handleChange: ", event.target.value);
    this.props.onUserChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("Le nom a été soumis : " + event.target.value);
    // console.log("handleSubmit");
    M.toast({
      html: "Le nom a été soumis est " + this.props.user,
      classes: "rounded"
    });
    this.props.onToggleOnChange(this.props.isToggleOn);
  }

  render() {
    const user = this.props.user;

    const isToggleOn = this.props.isToggleOn;
    // const divStyle = {
    //   color: "white"
    // };
    // style = { divStyle };
    return (
      <form
        onSubmit={this.handleSubmit}
        className="input-field label-30 input-70"
      >
        <label>Nom :</label>
        <input type="text" value={user} onChange={this.handleChange} />

        <Button type="submit" value="send">
          {isToggleOn ? "Déconnection" : "Connection"}
        </Button>
      </form>
    );
  }
}

export default NameForm;
