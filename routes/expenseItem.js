
var express = require('express');
var router = express.Router();
var ExpenseItemRepo = require("../repository/expenseItemRepository");

router.get('/expenseItem/list', function(req, res) {
    ExpenseItemRepo.getAll(req, res);
});

router.post('/expenseItem/add', function(req, res) {
    ExpenseItemRepo.Save(req, res);
});

router.put('/expenseItem/edit', function(req, res) {

});

router.delete('/expenseItem/delete', function(req, res) {

});

module.exports = router;