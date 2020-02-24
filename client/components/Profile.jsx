import React, { Component } from "react";
import ProfileMatches from "./Profile.Matches.jsx"
import ProfileMessages from "./Profile.Messages.jsx";
// import ProfileMatchBoxes from "./Profile.MatchBoxes.jsx"
// import ProfileMessages from "./Profile.Messages.jsx"
// import ProfileMessageBoxes from "./Profile.MessageBoxes.jsx"

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <p>Hello World</p>
            <div>
                <ProfileMatches />
                <ProfileMessages />
            </div>
        )
    }
}

export default Profile;