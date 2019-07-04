const graphql = require('graphql');
const { User } = require('../models');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = graphql;

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => {
    // eslint-disable-next-line global-require
    const { UserType } = require('../types');
    return {
      id: { type: GraphQLString },
      text: { type: GraphQLString },
      isComplete: { type: GraphQLBoolean },
      isDeleted: { type: GraphQLBoolean },
      overdue: { type: GraphQLBoolean },
      createdBy: {
        type: UserType,
        resolve(parent) {
          return User.findById(parent.createdBy);
        },
      },
      updatedBy: { type: UserType },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
    };
  },
});

module.exports = TodoType;
