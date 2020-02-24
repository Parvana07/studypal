import React, { Component } from 'react';

const ProfileMessageBoxes = props => {
  return (
    <div className="messageBox">
      <p>Username</p>
      <p>{props.chat[props.chats.length - 1]}</p>
      <div>
        <Link to={`/chat?username=${props.username}&room=${props.sent_id}-${props.rec_id}`}>
          <button className={'button mt-20'} type="submit">
            Message
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMessageBoxes;
