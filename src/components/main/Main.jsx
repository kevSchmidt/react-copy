import React from "react";

import Profile from "./profile/Profile";
import Gallery from "./gallery/Gallery";

const Main = (props) => {
  return (
    <React.Fragment>
      <main style={mainStyle}>
        {/* Profile */}
        <Profile />
        {/* Gallery */}
        <Gallery mainData={props.infoData} />
      </main>
    </React.Fragment>
  );
};

const mainStyle = {
  height: "100vh",
  fontSize: "3rem",
  display: "flex",
  flexDirection: "column",
  background: "#fafafafa",
};

export default Main;
