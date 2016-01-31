var express = require('express')
var morgan = require('morgan')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));

var indexRouting = require('./routes/index');

app.use('/', indexRouting);



var port = 8080;
app.listen(port, function(){
  console.log('listening on potr: '+port);
})
