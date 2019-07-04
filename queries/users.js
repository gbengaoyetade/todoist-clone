const graphql = require('graphql');
const { User } = require('../models');
const { UserType } = require('../types');

const { GraphQLString, GraphQLList } = graphql;

const getUser = {
  type: UserType,
  args: { id: { type: GraphQLString }, email: { type: GraphQLString } },
  resolve(parent, args) {
    const { email } = args;
    return User.findOne({ email })
      .then(userDetails => userDetails)
      .catch(error => error);
  },
};

const getUsers = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find()
      .then(users => users)
      .catch(error => error);
  },
};

module.exports = { getUser, getUsers };
