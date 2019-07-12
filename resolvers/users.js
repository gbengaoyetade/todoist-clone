/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { generateUserToken } = require('./helpers');

const userResolvers = {
  getUsers: () => User.find()
    .then(users => users)
    .catch(error => error),

  login: async (args) => {
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
    const userToken = generateUserToken(user);
    userDetails.token = userToken;
    return userDetails;
  },

  signup: async (args) => {
    const { email, password } = args;
    const transformedEmail = email.toLowerCase();
    const newUser = new User({
      password,
      email,
      createdBy: transformedEmail,
      updatedBy: transformedEmail,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    try {
      const createdUser = await newUser.save();
      const token = generateUserToken(newUser);
      createdUser.token = token;
      return createdUser;
    } catch (error) {
      return error;
    }
  },
};

module.exports = userResolvers;
