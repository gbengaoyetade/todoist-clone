const graphql = require('graphql');
const {
  getTodo, getTodos, getUser, getUsers, login,
} = require('../queries');

const { createTodo, signup } = require('../mutations');

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getTodo,
    getTodos,
    getUser,
    getUsers,
    login,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: { createTodo, signup },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
