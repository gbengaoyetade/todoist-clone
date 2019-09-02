const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    profilePicURL: String!
    token: String
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
    updatedBy: User!
    createdAt: String!
    updatedAt: String!
  }

  type RootQuery {
    getTodo(id: String! ): Todo!
    getTodos(email: String): [Todo]
    getUser(email: String!): User!
    getUsers: [User]!
  }

  type RootMutation {
    createTodo(text: String!, createdBy: String!): Todo!
    signup(email: String!, password: String!): User
    login(email: String!, password: String!): User
    googleAuth(accessToken: String!): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
