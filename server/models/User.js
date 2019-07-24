/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  createdBy: { type: String, required: true },
  updatedBy: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (firstError, salt) => {
    bcrypt.hash(this.password, salt, (secondError, hash) => {
      this.password = hash;
      next();
    });
  });
});
module.exports = mongoose.model('User', userSchema);
