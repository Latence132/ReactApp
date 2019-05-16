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

      <div style={{ width: "1200" }}>
        <Toggle style={{ color: "red" }} />
      </div>
      <section>
        <Greeting isLoggedIn={true} />
        <Comment date={data.date} text={data.text} author={data.author} />
        <div>
          <ListNumbers numbers={[1, 2, 3, 4, 5]} />
        </div>
        <Blog
          posts={[
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
          ]}
        />
        <NameForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
      </section>
      <div />
    </div>
  );
}

export default App;
