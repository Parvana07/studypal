import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:3000';

  useEffect(() => {
    const { room, username } = queryString.parse(location.search);
    console.log('userName: ', username);
    console.log('room: ', room);

    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);
    console.log(socket);
    socket.emit('join', { username, room }, () => {});
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search, ENDPOINT]);
  return <h1>Chat</h1>;
};

export default Chat;
