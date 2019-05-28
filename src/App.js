import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./ListNumbers.css";
// import Toggle from "./Toggle.js";
import Greeting from "./Greeting.js";
import { Comment } from "./Comment.js";
import ListNumbers from "./ListNumbers.js";
import Blog from "./Blog.js";
import NameForm from "./NameForm.js";
import FlavorForm from "./FlavorForm.js";
import Reservation from "./Reservation.js";
import Calculator from "./temperature/calculator.js";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import BitCoin from "./BitCoin.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Hello, world",
          content: ":)"
        },
        {
          id: 2,
          title: "Installation",
          content: "Vous pouvez installer React depuis yarn/npm ou CDN"
        }
      ],
      isLoggedIn: false,
      data: {
        date: new Date(),
        text: "I hope you enjoy learning React!",
        author: {
          name: "Kitty",
          avatarUrl: "https://placekitten.com/g/64/64"
        }
      },
      user: "anonymous",
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleIsLoggedInChange = this.handleIsLoggedInChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.onReservationHandle = this.onReservationHandle.bind(this);
  }
  handleIsLoggedInChange() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  handleUserChange(user) {
    this.setState({ user: user });
  }

  onToggleOnChange() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  onReservationHandle(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const styleCenter = { margin: "1% 20% 0% 20%", width: "75%" };
    return (
      <div className="App">
        <section className="container">
          <Timeline lineColor={"#ddd"}>
            <TimelineItem
              key="001"
              dateText="NameForm - Greeting – Blog - Comment"
              style={{ color: "#e86971" }}
            >
              <div className="row center-align">
                <div className="col" style={styleCenter}>
                  <NameForm
                    onUserChange={this.handleUserChange}
                    user={this.state.user}
                    isToggleOn={this.state.isLoggedIn}
                    onToggleOnChange={this.handleIsLoggedInChange}
                  />
                </div>
                <div className="col" style={styleCenter}>
                  <Greeting
                    isLoggedIn={this.state.isLoggedIn}
                    user={this.state.user}
                  />
                </div>
                <div className="col" style={styleCenter}>
                  <Comment
                    isLoggedIn={this.state.isLoggedIn}
                    date={this.state.data.date}
                    text={this.state.data.text}
                    author={this.state.data.author}
                  />
                </div>
              </div>
            </TimelineItem>

            <TimelineItem
              key="002"
              dateText="Blog – list numbers"
              style={{ color: "#e86971" }}
            />
            <div className="row">
              <div className="col s12 m5 card blue lighten-2">
                <Blog
                  posts={this.state.posts}
                  isLoggedIn={this.state.isLoggedIn}
                />
              </div>
              <div className="col">
                <ListNumbers numbers={[1, 2, 3]} />
              </div>
            </div>

            <TimelineItem
              key="003"
              dateText="Flavor – calculation"
              style={{ color: "#e86971" }}
            >
              <div className="row">
                <div className="col s12 m6" style={styleCenter}>
                  <FlavorForm />
                </div>
                <div className="col s12 m3" style={styleCenter}>
                  <Reservation
                    isGoing={this.state.isGoing}
                    numberOfGuests={this.state.numberOfGuests}
                    onReservationChange={this.onReservationHandle}
                  />
                </div>
                <div className="col s12 m3" style={styleCenter}>
                  <Calculator />
                </div>
              </div>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="BitCoin API"
              style={{ color: "#e86971" }}
            >
              <BitCoin />
            </TimelineItem>
          </Timeline>
        </section>
      </div>
    );
  }
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

// const data = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64"
//   }
// };
// const posts = [
//   {
//     id: 1,
//     title: "Hello, world",
//     content: ":)"
//   },
//   {
//     id: 2,
//     title: "Installation",
//     content: "Vous pouvez installer React depuis yarn/npm ou CDN"
//   }
// ];
