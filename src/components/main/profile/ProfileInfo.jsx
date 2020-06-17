import React, { Component } from "react";
import ProfileInfoText from "./ProfileInfo.text";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info-container">
        {/* Avatar */}
        <img
          src="./images/avatar-profile.png"
          alt="avatar"
          className="avatar"
        />
        {/* Info */}
        <ProfileInfoText />
      </div>
    );
  }
}

export default ProfileInfo;
