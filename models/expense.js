var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require("../models/user");

var ExpenseSchema = new Schema({
  name: {
        type: String,
        required: true
    },
  description: {
        type: String,
        required: true
    },
  amount: {
        type: Number,
        required: true
    },
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  create_at: {
        type: String,
        required: true
    },
  updated_at: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);