import React, { Component } from "react";

class ImageBar extends Component {
  render() {
    return (
      <div className="profile-img-container">
        {/* Studio */}
        <div className="profile-img">
          <img
            src="./images/profile-img-1.png"
            alt="icon"
            className="profile-icon"
          />
          <p className="profile-img-title">Studio</p>
        </div>

        {/* 1969 */}
        <div className="profile-img">
          <img
            src="./images/profile-img-2.png"
            alt="icon"
            className="profile-icon"
          />
          <p className="profile-img-title">1969</p>
        </div>

        {/* Concert */}
        <div className="profile-img">
          <img
            src="./images/profile-img-3.png"
            alt="icon"
            className="profile-icon"
          />
          <p className="profile-img-title">Concert</p>
        </div>

        {/* Spotify */}
        <div className="profile-img">
          <img
            src="./images/profile-img-4.png"
            alt="icon"
            className="profile-icon"
          />
          <p className="profile-img-title">SPOTIFY</p>
        </div>
      </div>
    );
  }
}

export default ImageBar;
