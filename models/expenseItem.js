var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require("../models/user"),
    Expense = require("../models/expense");

var ExpenseSchema = new Schema({
  name: {
        type: String,
        required: true
    },
  description: {
        type: String,
        required: true
    },
  price: {
        type: Number,
        required: true
    },
  expense: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
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

module.exports = mongoose.model('ExpenseItem', ExpenseSchema);