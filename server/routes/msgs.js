const express = require("express");

const msgRouter = express.Router();

//define all the routers later
msgRouter.get("/:username", (req, res) => {
  res.send("server is running here");
});

module.exports = msgRouter;
