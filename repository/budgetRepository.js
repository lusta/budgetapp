var Budget   = require('../models/budget'),
    User   = require('../models/user'),
    async = require('async'),
    ExpenseItem   = require('../models/expenseItem');

module.exports = {
  Save : function(req, res){
    var budget = new Budget(),
    expenseItems = req.body.expenseItems;
    
    budget.month = req.body.month;
    budget.description = req.body.description;
    budget.amount = req.body.amount;  
    budget.expenseItem = req.body.expenseItems;
	budget.create_at = new Date();
    budget.updated_at = new Date();

    User.findById(req.body.user, function (error, user) {
        if (error) 
            res.send(err); 
        budget.user = user;
    });

    async.each(expenseItems, function (item, Save) {
        budget.expenseItem = element;
        Save(budget);
    },
    function (error) {
     if (error) 
            res.json(500, {error: error});
        
        return res.json(201, 'Budget saved' );
    });
  },
  
  Save : function ( aModel ) {
    aModel.save(function(err) {
        if (err)
            res.send(err);
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