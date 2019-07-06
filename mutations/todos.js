const graphql = require('graphql');
const { TodoType } = require('../types');
const { Todo } = require('../models');

const { GraphQLString } = graphql;
const createTodo = {
  type: TodoType,
  args: {
    text: { type: GraphQLString },
    createdBy: { type: GraphQLString },
  },
  resolve(parent, args) {
    const { text, createdBy } = args;
    const newTodo = new Todo({
      text,
      createdBy,
      isDeleted: false,
      isComplete: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return newTodo
      .save()
      .then(savedTodo => savedTodo)
      .catch(error => error);
  },
};

module.exports = { createTodo };
