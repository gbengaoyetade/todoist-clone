const graphl = require('graphql');
const { UserType } = require('../models');
const { User } = require('../models');

const { GraphQLString } = graphl;
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
