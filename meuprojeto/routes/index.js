var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lab', function(req, res, next) {
  res.render('lab', {title: 'Laboratorio'})
});

module.exports = router;
