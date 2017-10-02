var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require("../models/user"),
    Expense = require("../models/expense"),
    Income = require("../models/income"),
    Balance = require("../models/balance");

var TransactionSchema = new Schema({
 item: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Expense',
        required: true
    },
 place: {
        type: String,
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

TransactionSchema.methods.process = function (passw, cb) {

};

module.exports = mongoose.model('Transaction', TransactionSchema);