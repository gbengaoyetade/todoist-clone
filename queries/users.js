const graphql = require('graphql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { UserType } = require('../types');

const {
  GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType,
} = graphql;

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

const login = {
  type: new GraphQLObjectType({
    name: 'Login',
    fields: {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      token: { type: GraphQLString },
    },
  }),
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    const { password, email } = args;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User does not exist');
    }

    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (!isAuthenticated) {
      throw new Error('Password incorrect');
    }

    const userDetails = {
      id: user.id,
      email: user.email,
    };
    const userToken = jwt.sign(userDetails, process.env.TOKEN_SECRET, { expiresIn: '2h' });
    userDetails.token = userToken;
    return userDetails;
  },
};

module.exports = { getUser, getUsers, login };
