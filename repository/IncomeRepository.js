var Income   = require('../models/income');

module.exports = {
  Save : function(req, res){
	var income = new Income();
	income.amount = req.body.amount;  
	income.user = req.body.user;
	income.create_at = req.body.create_at;
  income.updated_at = req.body.updated_at;

	income.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'income saved!' });
	});
  },
  getAll : function(res){
		Income.find({})
    .populate('user')
    .exec(function(error, incomes) {
        if(error)
            res.send(err);
        res.json(incomes);           
    })
  },
  edit : function(mIncome , res){
	Income.findById(req.params._id, function(err, income) {

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
    Income.remove({_id : req.body._id}, function(err){
        if (err)
            res.send(err);

        res.json({ message: 'income deleted!' });
    });
 }
};