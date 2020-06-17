import React, { Component } from "react";

import Profile from "./profile/Profile";

class Main extends Component {
  render() {
    return (
      <main style={mainStyle}>
        {/* Profile */}
        <Profile />

        {/* Gallery */}
      </main>
    );
  }
}

const mainStyle = {
  height: "100vh",
  fontSize: "3rem",
  display: "flex",
  flexDirection: "column",
  background: "#fafafafa",
};

export default Main;
