const userResolvers = require('./users');
const todoResolvers = require('./todos');
const helpers = require('./includes');

module.exports = { ...todoResolvers, ...userResolvers, ...helpers };
