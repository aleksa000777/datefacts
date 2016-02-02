var express = require('express');
var router = express.Router();
var DateFact = require('../../models/date');

router.post('/', function(req,res){
  var dataFactData = req.body.dateFacts
  var newDataFact = new DateFact(dataFactData);
  newDataFact.save(function(err, databaseDateFact){
    res.json(databaseDateFact);
  });
});

router.get('/', function(req,res){
  DateFact.find({}, function(err, dbfacts){
      res.json({dateFacts:dbfacts})
  });
});

module.exports = router;
