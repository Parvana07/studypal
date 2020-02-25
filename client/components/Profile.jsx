import React, { Component, useState, useEffect } from "react";
import ProfileMatches from "./Profile.Matches.jsx";
import ProfileMessages from "./Profile.Messages.jsx";
// import ProfileMatchBoxes from "./Profile.MatchBoxes.jsx"
// import ProfileMessages from "./Profile.Messages.jsx"
// import ProfileMessageBoxes from "./Profile.MessageBoxes.jsx"
const Profile = props => {
  const [chats, setChats] = useState([]);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    console.log("in profile", props);
    // loadChats();
    loadMatches(); //find matched users
  }, []);
  //   const loadChats = async () => {
  //     const res = await fetch(`/msg/${props.username}`);
  //     const allChats = await res.json();
  //     setChats(allChats);
  //   };
  const loadMatches = () => {
    console.log("loadMatches called");
    //   const res = await fetch(`/users/matches/${props.username}`);
    //   const matchList = await res.json();
    //   setMatches(matchList);
  };
  return (
    <div>
      <p>Matches</p>
      {/* <ProfileMessages chats={chats} username={props.username} /> */}
      {/* <ProfileMatches /> */}
    </div>
  );
};
export default Profile;
