var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '조동휘의 페이지', pageName:'home.ejs' });
});

module.exports = router;
