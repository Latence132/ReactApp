import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle.js";
import Greeting from "./Greeting.js";
import { Comment } from "./Comment.js";
import ListNumbers from "./ListNumbers.js";
import Blog from "./Blog.js";
import NameForm from "./NameForm.js";
import FlavorForm from "./FlavorForm.js";
import Reservation from "./Reservation.js";
import Calculator from "./temperature/calculator.js";

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
      data : { 
                date: new Date(),     
                text: "I hope you enjoy learning React!",    
                author: {
                  name: "Hello Kitty",
                  avatarUrl: "https://placekitten.com/g/64/64"
                }
      },
      user:"anonymous"
    }
    this.handleIsLoggedInChange = this.handleIsLoggedInChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
  }
  handleIsLoggedInChange() {
    this.setState({isLoggedIn: !this.state.isLoggedIn });
  }

  handleUserChange(user) {
    this.setState({user: user });
  }


render() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <section className="container">
        <div className="row">
          <div className="col s4">
          <NameForm  onUserChange={this.handleUserChange} user={this.state.user} />
            <Toggle  onToggleOnChange={this.handleIsLoggedInChange}  isToggleOn={this.state.isLoggedIn} />
          </div>
          <div className="col s4">
            <Greeting isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
          </div>

          <div className="col s4">
            <Comment date={this.state.data.date} text={this.state.data.text} author={this.state.data.author} />
          </div>
        </div>

        <div className="row">
          <div className="col s5 card blue lighten-2">
            <Blog posts={this.state.posts} />
          </div>

          <div className="col s1">
            <ListNumbers numbers={[1, 2, 3, 4, 5]} />
          </div>

          <div className="col s5">
           
          </div>
        </div>

        <div className="row">
          <div className="col s6 ">
            <FlavorForm />
          </div>
          <div className="col s3">
            <Reservation />
          </div>
          <div className="col s3">
            <Calculator />
          </div>
        </div>
      </section>
      <div />
    </div>
  );
}
}

export default App;

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