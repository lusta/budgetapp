var Expense   = require('../models/expense'),
    User      = require('../models/user');

module.exports = {
  Save : function(req, res){
    var expense = new Expense();
    expense.name = req.body.name;
    expense.description = req.body.description;
	  expense.amount = req.body.amount;
	  expense.user = req.body.user;
	  expense.create_at = req.body.create_at;
    expense.updated_at = req.body.updated_at;
	  expense.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'expense saved!' });
	});
  },
  getAll : function(res){
    Expense.find({})
    .populate('user')
    .exec(function(error, expenses) {
        if(error)
            res.send(err);
        res.json(expenses);
    })
  },
  edit : function(mExpense , res){
	Expense.findById(req.params._id, function(err, expense) {

		if (err)
            res.send(err);
        expense.name = req.body.name;
        expense.description = req.body.description;
        expense.amount = req.body.amount;
        expense.create_at = req.body.create_at;
        expense.updated_at = req.body.updated_at;

		expense.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'expense updated!' });
		});

	});
  },
 delete : function(req){
    Expense.remove({_id : req.body._id}, function(err){
        if (err)
            res.send(err);

        res.json({ message: 'Expense deleted!' });
    });
 },
};
