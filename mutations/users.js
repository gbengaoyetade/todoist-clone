const graphql = require('graphql');
const { UserType } = require('../types');
const { User } = require('../models');

const { GraphQLString } = graphql;
const signup = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parent, args) {
    const { email, password } = args;
    const newUser = new User({
      password,
      email,
      createdBy: email,
      updatedBy: email,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return newUser
      .save()
      .then(user => user)
      .catch(error => error);
  },
};

module.exports = { signup };
