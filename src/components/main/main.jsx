import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main style={mainStyle}>
        <h4>Instagram Main</h4>
      </main>
    );
  }
}

const mainStyle = {
  height: "100vh",
  fontSize: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#eee",
};

export default Main;
