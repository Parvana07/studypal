import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { matchUsers } from "../../server/controllers/usersController";

class ProfileMatchBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="matchBox">
        {/* <p>Username</p>
        <p>Interests:</p>
        <ul>
          <li>Math</li>
          <li>Computer Science</li>
          <li>Liberal Arts</li>
        </ul> */}
        {/* <Link> */}
        {/* <button className="center" type="submit">
            Message
          </button> */}
        {/* </Link> */}
      </div>
    );
  }
}
// function ProfileMatchBoxes({ school, index }) {
//   return <div className="boxes">{matches.school}</div>;
// }

export default ProfileMatchBoxes;
