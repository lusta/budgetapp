var mongoose = require('mongoose'),
Schema = mongoose.Schema,
User = require("../models/user"),
ExpenseItem = require('../models/expenseItem');

var BudgetSchema = new Schema({
month: {
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
expenseitems: [{
    type: mongoose.Schema.ObjectId,
    ref: 'ExpenseItem'
}],
create_at: {
    type: String,
    required: true
},
updated_at: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Budget', BudgetSchema);
