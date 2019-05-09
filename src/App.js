import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle.js";
import Greeting from "./Greeting.js";
// import Comment from "./Comment.js";
// import data from "./data.js";

function App() {
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
      <div>
        <Greeting isLoggedIn={true} />
        {/* <Comment date={data.date} text={data.text} author={data.author} /> */}
      </div>
    </div>
  );
}

export default App;
