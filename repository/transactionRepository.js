var Transaction = require('../models/transaction'),
    Income    = require('../models/income'),
    Expense   = require('../models/expense'),
    Balance   = require('../models/balance');

module.exports = {
  Save : function(req, res){
	var transaction = new Transaction();
    transaction.item = req.body.item; 
    transaction.place = req.body.place;  
	transaction.user = req.body.user;
	transaction.create_at = req.body.create_at;
    transaction.updated_at = req.body.updated_at;

	transaction.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'transaction successfull!' });
	});
  },
  getAll : function(res){
		Transaction.find(function(err, transactions) {
			if (err)
				res.send(err);

			res.json(transactions);
		});
  },
  edit : function(mIncome , res){
	Transaction.findById(req.params._id, function(err, income) {

		if (err)
			res.send(err);
        income.amount = req.body.amount;  
        income.user = req.body.user;
        income.create_at = req.body.create_at;
        income.updated_at = req.body.updated_at;

		income.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'income updated!' });
		});

	});
  },
 delete : function(req){
    Transaction.remove(req.params._id, function(err){
        if (err)
            res.send(err);

        res.json({ message: 'income deleted!' });
    });
 }
};