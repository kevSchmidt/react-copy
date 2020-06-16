import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo";

class ProfileInfoContainer extends Component {
  render() {
    return (
      <div className="profile-info-container">
        <img
          src="./images/avatar-profile.png"
          alt="avatar"
          className="avatar"
        />
        <ProfileInfo />
      </div>
    );
  }
}

export default ProfileInfoContainer;
