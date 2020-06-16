import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      {/* LOGO INSTAGRAM */}
      <form>
        <input
          type="text"
          name="search"
          className="searchBar"
          placeholder="Search"
        />
      </form>
      {/* ICONS */}
    </header>
  );
}

// Style
const headerStyle = {
  textAlign: "center",
  padding: "1rem",
};

export default Header;
