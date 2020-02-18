const express = require('express');
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const morgan = require('morgan'); //log reqs
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
require('dotenv').config();
const session = require('express-session');
const flash = require('connect-flash');
const configURL = process.env.CONFIGURL /*$3rverMain!*/


/* Prevent CORS issues */
var cors = (function(req,res,next){
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
      } else {
        res.header('Access-Control-Allow-Origin', '*');
      }
    next();
});
app.use(cors)

/* MongoDB/Mongoose configuration */
mongoose.connect(configURL/*, {useNewUrlParser:true}*/).then(res => console.log('Successfully connected to Mongo database')).catch(err=>console.log(err))
mongoose.set('useCreateIndex', true);

require('./config/passport')(passport);
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(flash())

app.use(function(req,res,next){
    res.setTimeout(480000, function(){
        console.log('Request has timed out');
        res.sendStatus(408);
    });
    next();
});

app.use(session({secret:process.env.SESSION_SECRET,resave:true,saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

const routes = require('./app/routes/routes.js');
const api = require('./app/routes/api.js');
const userlogic = require('./app/routes/users.js');
const bugs = require('./app/routes/bugs.js');

app.use('/', routes);
app.use('/api', api);
app.use('/user', userlogic);
app.use('/bugs', bugs);

app.engine('html', require('ejs').renderFile);
app.set('views', 'views');
app.set('view engine', 'html');

const port = process.env.PORT || 8080

app.listen(port,function(){
    console.log('Listening on ' + port)
})
