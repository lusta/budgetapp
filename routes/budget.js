
var express = require('express');
var router = express.Router();
var BudgetRepo = require("../repository/budgetRepository");

router.get('/budget/list', function(req, res) {
    BudgetRepo.getAll(req, res);
});

router.post('/budget/add', function(req, res) {
    BudgetRepo.Save(req, res);
});

router.put('/budget/edit', function(req, res) {

});

router.delete('/budget/delete', function(req, res) {

});

module.exports = router;