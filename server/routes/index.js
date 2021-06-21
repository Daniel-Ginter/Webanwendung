var express = require("express");
var router = express.Router();
const glob = require("glob");

var getDirectories = function (src, callback) {
  glob(src + "/*", callback);
};
var getDB = function (src, callback) {
  glob(src + "/*db.json", callback);
};
var getDBs = function (src, callback) {
  glob(src + "/**/*/*db.json", callback);
};
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  getDirectories("public/sites", function (err, resu) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(resu);
      res.send(resu);
    }
  });
});

router.get("/dbs", function (req, res, next) {
  //Get all testDir
  getDBs("public/tests", function (err, resu) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(resu);
      res.send(resu);
    }
  });
});


router.get("/db", function (req, res, next) {
  //Get all testDir
  getDirectories("public/tests", function (err, resu) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(resu);
      //foreach testDir get stepDir
      resu.forEach((element) => {
        getDirectories(element, function (err, resul) {
          if (err) {
            console.log("Error", err);
          } else {
            //foreach step get db.json
            console.log(resul);
            const stepName = new Map();
            resul.forEach((element) => {
              getDB(element, function (err, result) {
                if (err) {
                  console.log("Error", err);
                } else {
                  stepName.set(element,result);
                  console.log(stepName);
                  res.send(stepName);
                }
              });
            });
          }
        });
      });
    }
  });
});

module.exports = router;
