const express = require("express");
const usersController = require("../controllers/usersController.js");
const usersRouter = express.Router();

//called at /login to authenticate user
usersRouter.post(
  "/validateUser",
  usersController.validateUser,
  (req, res, next) => {
    // console.log('usersRouter.get/validateUser called');
    // console.log('res.locals.validate', res.locals.validate);
    return res.status(200).json(res.locals.validate);
  }
);

//caled at /register to add new user to database
usersRouter.post("/addUser", usersController.addUser, (req, res, next) => {
  console.log("usersRouter.add called");
  return res.status(200).json({});
});

//called at /profile to find matched users
usersRouter.get(
  "/matches/:username",
  usersController.matchUsers,
  (req, res, next) => {
    console.log("usersRouter.get");
    return res.status(200).json(res.locals.match);
  }
);

module.exports = usersRouter;
