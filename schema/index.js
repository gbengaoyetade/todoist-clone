const graphql = require('graphql');
const { TodoType, UserType } = require('./schema');
const { users, todos } = require('../helpers/data');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todos: {
      type: TodoType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        const foundTodo = todos.filter(todo => todo.id === args.id);
        return foundTodo[0];
      },
    },

    users: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return users.filter(user => user.id === args.id)[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
