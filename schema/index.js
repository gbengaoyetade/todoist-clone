const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    profilePicURL: String!
    token: String!
    createdAt: String!
    updatedAt: String!
    updatedBy: String!
    todos: [Todo]
  }

  type Todo {
    id: ID!
    text: String!
    isComplete: Boolean!
    isDeleted: Boolean!
    createdBy: User!
    createdAt: String!
    updatedAt: String!
  }

   input TodoInput {
    text: String!
    createdBy: String!
  }

  type RootQuery {
    getTodo(id: String! ): Todo!
    getTodos(email: String): [Todo]
    getUser(email: String!): User!
    getUsers: [User]!
    login(email: String!, password: String!): User
  }

  type RootMutation {
    createTodo(todoInput: TodoInput): Todo!
    signup(email: String!, password: String!): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
