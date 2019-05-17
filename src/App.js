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

function App() {
  const data = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };
  const posts = [
    {
      id: 1,
      title: "Bonjour, monde",
      content: "Bienvenue sur la doc de React !"
    },
    {
      id: 2,
      title: "Installation",
      content: "Vous pouvez installer React depuis npm."
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
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
      </header>

      <div />
      <section className="container">
        <div className="row">
          <div className="col s4">
            <Toggle />
          </div>
          <div className="col s4">
            <Greeting isLoggedIn={false} />
          </div>

          <div className="col s4">
            <Comment date={data.date} text={data.text} author={data.author} />
          </div>
        </div>

        <div className="row">
          <div className="col s5 card blue lighten-2">
            <Blog posts={posts} />
          </div>

          <div className="col s1">
            <ListNumbers numbers={[1, 2, 3, 4, 5]} />
          </div>

          <div className="col s5">
            <NameForm />
          </div>
        </div>

        <div className="row">
          <div className="col s3 ">
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

export default App;
