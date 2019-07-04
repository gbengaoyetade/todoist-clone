const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  id: String,
  text: { type: String, required: true },
  isComplete: Boolean,
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
  createdBy: String,
  updatedBy: String,
});

module.exports = mongoose.model('Todo', todoSchema);
