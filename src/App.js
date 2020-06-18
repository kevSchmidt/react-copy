import React, { Component } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Data from "./data.json";

import "./components/icons/FontAwesomeIcons";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main gallery={Data} />
      </div>
    );
  }
}

export default App;
