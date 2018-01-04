var ExpenseItem   = require('../models/expenseItem');

module.exports = {
  Save : function(req, res){
    var expenseItem = new ExpenseItem();
    expenseItem.name = req.body.name;
    expenseItem.description = req.body.description;
	  expenseItem.price = req.body.price;
	  expenseItem.expense = req.body.expense;
	  expenseItem.create_at = req.body.create_at;
    expenseItem.updated_at = req.body.updated_at;

	expenseItem.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'expenseItem saved!' });
	});
  },
  getAll : function(req , res){
    ExpenseItem.find({expense : req.query.expense})
    .populate('expense')
    .exec(function(error, expenseItems) {
        if(error)
            res.send(err);
        res.json(expenseItems);
    })
  },
 delete : function(req){
    ExpenseItem.remove({_id : req.body._id}, function(err){
        if (err)
            res.send(err);

        res.json({ message: 'ExpenseItem deleted!' });
    });
 },
};
