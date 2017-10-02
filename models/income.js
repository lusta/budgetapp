var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("../models/user");

var IncomeSchema = new Schema({
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

module.exports = mongoose.model('Income', IncomeSchema);