import React, { Component } from 'react';
import ProfileMessageBoxes from './Profile.MessageBoxes.jsx';

const ProfileMessages = props => {
  const convos = [];
  for (let i = 0; i < props.chats; i++) {
    convos.push(
      <ProfileMessageBoxes
        className="messageBox"
        chat={props.chats[i]}
        sent_id={props.chats[i][0].sent_id}
        rec_id={props.chats[i][0].rec_id}
      />
    );
  }
  return (
    <div className="profileMessages">
      <h3>Messages</h3>
      {convos}
    </div>
  );
};

export default ProfileMessages;
