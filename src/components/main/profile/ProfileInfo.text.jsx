import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileInfoText extends Component {
  render() {
    return (
      <div className="profile-info">
        {/* Row 1 */}
        <div className="profile-row-1">
          <p className="noskro">noskro_lfs</p>
          <button className="btn-profile">Message</button>
          <button className="btn-profile">
            <FontAwesomeIcon icon="user" className="icon-profile" />
          </button>
          <button className="btn-profile-2">
            <FontAwesomeIcon icon="sort-down" className="icon-profile" />
          </button>
          <button className="btn-profile-virgin">
            <span className="strange-btn">...</span>{" "}
          </button>
        </div>

        {/* Row 2 */}
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

        {/* Row 3 */}
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

        {/* Row 4 */}
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

export default ProfileInfoText;
