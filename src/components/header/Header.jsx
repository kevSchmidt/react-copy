import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Instagram Header</h1>
    </header>
  );
}

// Style
const headerStyle = {
  textAlign: "center",
  padding: "1rem",
};

export default Header;
