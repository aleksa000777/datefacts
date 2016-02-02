var mongoose = require('mongoose');

var DateFactSchema =  mongoose.Schema({
  day: {type: String},
  month: {type: String},
  text: {type: String},
  year: {type: String},
  number: {type: String}
  // found:{type: String},
  // type:{type: String}

});

var DateFact = mongoose.model('DateFact', DateFactSchema);
module.exports = DateFact;
