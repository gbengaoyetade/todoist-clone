const userResolvers = require('./users');
const todoResolvers = require('./todos');
const helpers = require('./helpers');

module.exports = { ...todoResolvers, ...userResolvers, ...helpers };
