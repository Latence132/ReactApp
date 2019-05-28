import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // avant l'état était controlé par le composant
    // this.state = { temperature: "" };
  }

  handleChange(e) {
    // avant l'état était controlé par le composant
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // avant l'état était controlé par le composant
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Saisissez la température en {scaleNames[scale]} :</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
          type="number"
          className="center"
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
