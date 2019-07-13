/* eslint-disable no-underscore-dangle */
const { Todo } = require('../models');
const { getUser } = require('./includes');
const { AUTH_ERROR } = require('../helpers');

const todoResolvers = {
  createTodo: async (args, req) => {
    if (!req.isAuthenticated) {
      throw new Error(AUTH_ERROR);
    }
    const { text, createdBy } = args;
    const newTodo = new Todo({
      text,
      createdBy,
      updatedBy: createdBy,
      isDeleted: false,
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    try {
      const savedTodo = await newTodo.save();
      return {
        ...savedTodo._doc,
        createdBy: getUser.bind(this, { email: createdBy }),
        updatedBy: getUser.bind(this, { email: createdBy }),
      };
    } catch (error) {
      throw new Error(error);
    }
  },

  getTodo: (args, req) => {
    if (!req.isAuthenticated) {
      throw new Error(AUTH_ERROR);
    }
    return Todo.findById(args.id);
  },
};
module.exports = todoResolvers;
