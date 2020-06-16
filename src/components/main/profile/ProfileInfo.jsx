import React, { Component } from "react";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <div className="profile-row-1">
          <p className="noskro">noskro_lfs</p>
          <button className="btn">Message</button>
          <button className="btn">user</button>
          <button className="btn">arrow</button>
          <button className="btn">...</button>
        </div>

        <div className="profile-row-2">
          <p className="follower">81 Posts</p>
          <p className="follower">1,794 followers</p>
          <p className="follower">289 following</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
