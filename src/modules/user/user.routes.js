const { createUser, getUsers, deleteUser, updateUser, getUser } = require('./user.controller');

module.exports = (app) => {
  app.route('/users')
      .post(createUser)
      .get(getUsers)

  app.route('/users/:email')
      .patch(updateUser)
      .get(getUser)
      .delete(deleteUser);
}

