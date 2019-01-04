var { User } = require('./../models/user');

/**
 * Middleware function to authenticate, it checks whether the user has an x-auth token an dif so retrieves the user
 * from the db
 */
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();

  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = { authenticate };