const express = require('express');
const usersController = require('../controllers/usersController.js')
const usersRouter = express.Router();

//called at /login to authenticate user
usersRouter.post('/validateUser', usersController.validateUser, (req, res, next) => {
    console.log('usersRouter.get/validateUser called');
    console.log('res.locals.validate', res.locals.validate);
    // if(res.locals.validate) { //user is validated

    //   res.redirect('/profile');
    // }
    // else {
    return res.status(200).json(res.locals.validate);

})

usersRouter.get('/profile', usersController.matchUsers, (req, res, next) => {
    console.log('usersRouter.get');
    return res.status(200).json(res.locals.match);
})

//caled at /register to add new user to database
usersRouter.post('/addUser', usersController.addUser, (req, res, next) => {
    console.log('usersRouter.add called');
    return res.status(200).json({});
})


module.exports = usersRouter;
