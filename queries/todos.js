const graphql = require('graphql');
const { Todo } = require('../models');
const { TodoType } = require('../types');

const { GraphQLString, GraphQLList } = graphql;
const getTodo = {
  type: TodoType,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return Todo.findById(args.id);
  },
};

const getTodos = {
  type: new GraphQLList(TodoType),
  resolve() {
    return Todo.find()
      .then(todos => todos)
      .catch((error) => {
        throw new Error(error);
      });
  },
};

module.exports = { getTodo, getTodos };
