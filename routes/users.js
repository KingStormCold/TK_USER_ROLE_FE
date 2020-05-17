var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/abc', function(req, res, next) {
  res.render('admin/home', { title: 'Tuan 123' });
});

module.exports = router;
