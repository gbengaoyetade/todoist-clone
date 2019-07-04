const graphql = require('graphql');
const { Todo } = require('../models');

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    // eslint-disable-next-line global-require
    const { TodoType } = require('../types');
    return {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      profilePictureURL: { type: GraphQLString },
      todos: {
        type: new GraphQLList(TodoType),
        resolve(parent) {
          // eslint-disable-next-line no-underscore-dangle
          return Todo.find({ createdBy: parent._id });
        },
      },
    };
  },
});

module.exports = UserType;
