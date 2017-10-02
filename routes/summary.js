
var express = require('express');
var router = express.Router();
var SummaryRepo = require("../repository/summaryRepository");

router.get('/summary/test', function(req, res) {
  res.send('we are in summary route');
});

router.get('/summary/list', function(req, res) {
    SummaryRepo.getAll(res);
});

router.get('/summary/list/item', function(req, res) {
    SummaryRepo.summaryByItem(res);
});

router.get('/summary/list/month', function(req, res) {
    SummaryRepo.summaryBymonth(res);
});

router.get('/summary/list/week', function(req, res) {
    SummaryRepo.summaryByWeek(res);
});

module.exports = router;