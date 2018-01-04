var Budget   = require('../models/budget'),
    User   = require('../models/user'),
    async = require('async'),
    ExpenseItem   = require('../models/expenseItem');

module.exports = {
  Save : function(req, res){
    var budget = new Budget();

    budget.month = req.body.month;
    budget.description = req.body.description;
    budget.amount = req.body.amount;
    budget.user = req.body.user;
    budget.expenseItem = req.body.expenseItems;
	  budget.create_at = new Date();
    budget.updated_at = new Date();

    budget.save(function(err) {
        if (err)
            res.send(err);
      res.json({ message: 'budget added!' });
    });
  },

  getAll : function(req , res){
    Budget.find()
    .populate('User')
    .populate('ExpenseItem')
    .exec(function(error, budgets) {
        if(error)
            res.send(err);
        res.json(budgets);
    })
  },
 delete : function(req){
    budget.remove({"_id" : req.body._id}, function(err){
        if (err)
            res.send(err);

        res.json({ message: 'budget deleted!' });
    });
 },
};
