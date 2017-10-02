var express = require('express');
var router = express.Router();
var IncomeRepo = require("../repository/IncomeRepository");

router.get('/income/list', function(req, res) {
    IncomeRepo.getAll(res);
});

router.post('/income/add', function(req, res) {
    console.log("in income add...route");
    IncomeRepo.Save(req, res);
});

router.put('/income/edit', function(req, res) {
    IncomeRepo.Save(req, res);
});

router.delete('/income/delete', function(req, res) {
    IncomeRepo.delete(req);
});

module.exports = router;