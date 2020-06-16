import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header style={headerStyle}>
      {/* Icon */}
      <img src="./images/insta-logo.png" alt="logo" />

      {/* Search Bar */}
      <form>
        <input
          type="text"
          name="search"
          className="searchBar"
          placeholder="Search"
        />
      </form>

      {/* Icons */}
      <FontAwesomeIcon icon="home" />
      <FontAwesomeIcon icon="paper-plane" />
      <FontAwesomeIcon icon="compass" />
      <FontAwesomeIcon icon="heart" />
      <img src="./images/avatar-nav.png" alt="avatar-nav" />
    </header>
  );
}

// Style
const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

export default Header;
