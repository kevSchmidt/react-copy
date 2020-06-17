import React, { Component } from "react";
import ImageBar from "./ImageBar";
import ProfileInfo from "./ProfileInfo";

class Profile extends Component {
  render() {
    return (
      <section className="profile-section">
        <ProfileInfo />
        <ImageBar />
      </section>
    );
  }
}

export default Profile;
