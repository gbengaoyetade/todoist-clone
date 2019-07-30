/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
const jwt = require('jsonwebtoken');
const { User, Todo } = require('../../models');

const getTodos = async (args) => {
  const { email } = args;
  try {
    const todos = await Todo.find({ createdBy: email });
    return todos.map(todo => ({
      ...todo._doc,
      createdBy: getUser.bind(this, { email: todo.createdBy }),
      updatedBy: getUser.bind(this, { email: todo.updatedBy }),
    }));
  } catch (error) {
    return error;
  }
};

const getUser = (args) => {
  const { email } = args;
  return User.findOne({ email }, { password: 0 })
    .then((userDetails) => {
      const todos = getTodos.bind(this, email);
      return { ...userDetails._doc, todos };
    })
    .catch(error => error);
};

const generateUserToken = (user) => {
  const userDetails = {
    id: user.id,
    email: user.email,
  };
  const token = jwt.sign(userDetails, process.env.TOKEN_SECRET, { expiresIn: '2h' });
  return token;
};

module.exports = { getTodos, getUser, generateUserToken };
