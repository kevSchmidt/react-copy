import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <div className="profile-row-1">
          <p className="noskro">noskro_lfs</p>
          <button className="btn">Message</button>
          <button className="btn">
            <FontAwesomeIcon icon="user" className="icon-profile" />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon="sort-down" className="icon-profile" />
          </button>
          <button className="btn">...</button>
        </div>

        <div className="profile-row-2">
          <p className="follower">
            {" "}
            <span className="bold">81</span> Posts
          </p>
          <p className="follower">
            <span className="bold">1,794</span> followers
          </p>
          <p className="follower">
            <span className="bold">289</span> following
          </p>
        </div>

        <div className="profile-row-3">
          <h4 className="info-title">Noskro - LFS</h4>
          <p className="info info-link">
            <span className="scotch" role="img">
              🥃
            </span>{" "}
            @lesfrerescotch{" "}
            <span className="scotch" role="img">
              🥃
            </span>
          </p>
          <p className="info">▪️booking : lesfrerescotch@gmail.com</p>
          <p className="info">▪️Paris XIX, France.</p>
          <p className="info">Nouvel EP « 1969 » DISPONIBLE </p>
          <p className="info info-link">lesfreresscotch.Ink.to/1969</p>
        </div>

        <div className="profile-row-4">
          <p className="follower2">
            Followed by{" "}
            <span className="bold">cap10_sebisto, aure_stg, stxleslowly</span> +
            1more
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
