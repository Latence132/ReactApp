import React from "react";
import { Checkbox } from "react-materialize";
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isGoing: true,
    //   numberOfGuests: 2
    // };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.onReservationChange(name, value);
  }

  render() {
    const numberOfGuests = this.props.numberOfGuests;
    const isGoing = this.props.isGoing;
    return (
      <div>
        <Checkbox
          // className="filled-in "
          label="Participe:"
          checked={isGoing}
          onChange={this.handleInputChange}
        />

        <br />
        <label htmlFor="numberOfGuests">Nombre d'invités :</label>
        <input
          id="numberOfGuests"
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={this.handleInputChange}
          style={{ width: 50 }}
          className="center"
        />
      </div>
    );
  }
}

export default Reservation;
