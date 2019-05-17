import React from "react";
import { Button } from "react-materialize";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Le nom a été soumis : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="input-field label-30 input-70"
      >
        <label>
          Nom :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <Button type="submit" value="send">
          Envoyer
        </Button>
      </form>
    );
  }
}

export default NameForm;
