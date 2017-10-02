
var express = require('express');
var router = express.Router();
var TransactionRepo = require("../repository/transactionRepository");

router.get('/transaction/test', function(req, res) {
  res.send('we are in transaction route');
});

router.get('/transaction/list', function(req, res) {
    TransactionRepo.getAll(res);
});
router.post('/transaction/add', function(req, res) {
    ExpenseRepo.Save(req, res);
});
module.exports = router;