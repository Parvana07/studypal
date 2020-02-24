const path = require('path');
const db = require('../models/userModels.js');

const usersController = {};

//middleware invoked when
usersController.matchUsers = async (req, res, next) => {
  console.log('userController.matchUsers');
  try {
    //query
    const q =
      'SELECT users.username, interests.interest_name, schools.name as school, users._id as user_id ' +
      'FROM users LEFT OUTER JOIN interests ON interests.user_id = users._id LEFT OUTER JOIN schools ' +
      'on schools.user_id = users._id WHERE NOT users._id = $1 AND ' +
      'interests.interest_name = $2 AND schools.name = $3 LIMIT 6';
    const values = ['1', 'Math', 'UCLA']; //HARDCODED FOR NOW

    db.query(q, values).then(data => {
      console.log(data);
      res.locals.match = data.rows;
      return next();
    });
  } catch (err) {
    return next({
      log: `usersController.matchUsers: ERROR: ${err}`,
      message: { err: 'usersController.matchUsers: ERROR: Check server logs for details' }
    });
  }
};


module.exports = usersController;
