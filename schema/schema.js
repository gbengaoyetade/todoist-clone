/* eslint-disable no-use-before-define */
const graphql = require('graphql');
const { users, todos } = require('../helpers/data');

const {
  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList,
} = graphql;

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    isComplete: { type: GraphQLBoolean },
    isDeleted: { type: GraphQLBoolean },
    overdue: { type: GraphQLBoolean },
    createdBy: {
      type: UserType,
      resolve(parent) {
        return users.filter(user => user.id === parent.createdBy)[0];
      },
    },

    updatedBy: { type: UserType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profilePictureURL: { type: GraphQLString },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent) {
        return todos.filter(todo => todo.createdBy === parent.id);
      },
    },
  }),
});

module.exports = { TodoType, UserType };
