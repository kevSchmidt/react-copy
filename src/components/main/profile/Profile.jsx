import React, { Component } from "react";
import ImageBar from "./ImageBar";
import ProfileInfoContainer from "./ProfileInfoContainer";

class Profile extends Component {
  render() {
    return (
      <section className="profile-section">
        <ProfileInfoContainer />
        <ImageBar />
      </section>
    );
  }
}

export default Profile;
