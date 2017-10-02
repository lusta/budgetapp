
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
// var token = req.body.token || req.query.token || req.headers['x-access-token'];

//   // decode token
//   if (token) {

//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;    
//         next();
//       }
//     });

//   } else {

//     // if there is no token
//     // return an error
//     return res.status(403).send({ 
//         success: false, 
//         message: 'No token provided.' 
//     });

//   }
// });