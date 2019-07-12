/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
const { User, Todo } = require('../models');

const getTodos = async (args) => {
  const { email } = args;
  try {
    const todos = await Todo.find({ createdBy: email });

    return todos.map(todo => ({
      ...todo._doc,
      createdBy: getUser.bind(this, { email: todo.createdBy }),
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

module.exports = { getTodos, getUser };
