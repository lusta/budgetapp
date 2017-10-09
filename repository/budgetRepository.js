var Budget   = require('../models/budget'),
    User   = require('../models/user'),
    ExpenseItem   = require('../models/expenseItem');

module.exports = {
  Save : function(req, res){
    var budget = new Budget(),
    expenseItemIds = req.body.expenseItem;
    
    budget.month = req.body.month;
    budget.description = req.body.description;
	budget.amount = req.body.amount;  
	budget.create_at = req.body.create_at;
    budget.updated_at = req.body.updated_at;

    User.findById(req.body.user, function (error, user) {
        if (error) 
            res.send(err); 
        budget.user = user;
    });

    for(let item in expenseItemIds) {
        budget.expenseItem = expenseItemIds[item];
        budget.save(function(err) {
            if (err)
                res.send(err);
    
        });
    }  
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