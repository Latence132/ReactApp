import React from "react";
import M from "materialize-css";
import { Button } from "react-materialize";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeToast = this.closeToast.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("Votre parfum favori est : " + this.state.value);
    M.toast({
      html: "Votre parfum favori est " + this.state.value,
      classes: "rounded"
    });
    event.preventDefault();
  }
  closeToast() {
    console.log("closeToast");
    // var toastElement = document.querySelector('.toast');
    // var toastInstance = M.Toast.getInstance(toastElement);
    // toastInstance.dismiss();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choisissez votre parfum favori :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <Button type="submit" value="send">
          Envoyer
        </Button>
      </form>
    );
  }
}

export default FlavorForm;
