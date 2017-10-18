
var express = require('express');
var router = express.Router();
var ExpenseRepo = require("../repository/ExpenseRepository");

router.get('/expense/list', function(req, res) {
    ExpenseRepo.getAll(res);
});

router.post('/expense/add', function(req, res) {
    ExpenseRepo.Save(req, res);
});

router.put('/expense/edit', function(req, res) {
    ExpenseRepo.Save(req, res);
});

router.delete('/expense/delete', function(req, res) {
    ExpenseRepo.delete(req);
});

module.exports = router;