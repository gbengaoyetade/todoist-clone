const { Todo } = require('../models');

const todoResolvers = {
  createTodo: (args) => {
    const { text, createdBy } = args.todoInput;
    const newTodo = new Todo({
      text,
      createdBy,
      isDeleted: false,
      isComplete: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return newTodo
      .save()
      .then(savedTodo => savedTodo)
      .catch(error => error);
  },

  getTodo: args => Todo.findById(args.id),
};
module.exports = todoResolvers;
