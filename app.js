// modules
var express    =   require('express'),
    morgan     =   require('morgan'),
    bodyParser =   require('body-parser'),
    mongoose   =   require('mongoose');





    // set app & config
    var app = express();
    app.use(express.static('./public'));
    app.use(morgan('dev'));
    // app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');
    mongoose.connect('mongodb://localhost/datefacts-03')

    // routes
    var indexRouter = require('./routes/index');
    var dateFactsRouter = require('./routes/api/datafacts')

    app.use('/', indexRouter);
    app.use('/api/datefacts', dateFactsRouter)


// listening
var port = 8080;
app.listen(port, function(){
  console.log('listening on port: '+port);
})
