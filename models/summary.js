var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require("../models/user");

var SummarySchema = new Schema({
 month: {
        type: String,
        required: true
    },
 total: {
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

module.exports = mongoose.model('Summary', SummarySchema);