const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = 3000;

io.on('connection', socket => {
  console.log('New Connection!');
  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) {
      return callback(error);
    }
    socket.emit('message', { user: 'admin', text: `${user.username}, welcome to StudNet` });
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin, text:`${user.username} has joined!' });
    socket.join(user.room);

    callback();
  });
  socket.on('disconnect', () => {
    console.log('user left the chat');
  });
});

app.use(express.json()); // needed to be able read the body

//require routers here
const apiRouter = require('../server/routes/api');
const usersRouter = require('../server/routes/users');
const msgRouter = require('../server/routes/msgs');

//define route handlers
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/msg', msgRouter);

// route handler to respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  res.sendStatus(404);
});

//express global error handler
app.use((err, req, res, next) => {
  let defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  res.status(errorObj.status).send(errorObj.message);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
