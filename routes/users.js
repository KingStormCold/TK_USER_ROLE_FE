var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/role', function(req, res, next) {
  res.render('admin-home', { title: 'Tuan 123' });
});

router.get('/user', function(req, res, next) {
  res.render('admin-user', { title: 'Tuan 123' });
});
module.exports = router;
