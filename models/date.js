var mongoose = require('mongoose');

var DateFactSchema =  mongoose.Schema({
  day: {type: String},
  month: {type: String},
  text: {type: String},
  year: {type: String},
  number: {type: String},
  created_at: { type: Date },
  updated_at: { type: Date }

});

DateFactSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var DateFact = mongoose.model('DateFact', DateFactSchema);
module.exports = DateFact;
