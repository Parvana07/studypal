import React, { Component } from 'react';
import ProfileMatchBoxes from './Profile.MatchBoxes.jsx';

const ProfileMatches = props => {
  const matches = [];
  for (let i = 0; i < props.matches.length; i++) {
    matches.push(
      <ProfileMatchBoxes
        key={`${i}`}
        className="profileMatchBox"
        username={props.matches[i].username}
        name={props.matches[i].name}
        matchingInterests={props.matches[i].matchingInterests}
      />
    );
  }
  return (
    <div className="profileMatches">
      <h3>StudyPal Matches</h3>
      {matches}
    </div>
  );
};

export default ProfileMatches;
