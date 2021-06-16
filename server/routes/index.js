var express = require('express');
var router = express.Router();
const glob = require("glob");


var getDirectories = function (src, callback) {
 glob(src + '/**/*/*db.json', callback);
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send("Test");
});

router.get('/db', function(req, res, next) {
  getDirectories('public/sites',function (err, resu) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(resu)
      res.send(resu);
    }
  });
});

module.exports = router;
