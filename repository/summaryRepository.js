var Summary   = require('../models/summary');

module.exports = {
  getAll : function(res){
    Summary.find(function(err, incomes) {
        if (err)
            res.send(err);

        res.json(incomes);
    });
  },
  summaryBymonth : function (res) {
    Summary.find(function(err, summary) {
        if (err)
            res.send(err);

        res.json(summary);
    });
  },
 summaryByWeek : function(res) {
    Summary.find(function(err, summary) {
        if (err)
            res.send(err);

        res.json(summary);
    });
 },
  summaryByItem : function(res) {
    Summary.find(function(err, summary) {
        if (err)
            res.send(err);

        res.json(summary);
    }); 
  }
};