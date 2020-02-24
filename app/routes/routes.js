const express = require('express');
const router = express.Router();
const passport = require('passport');
const Users = require('../models/user');
const PRs = require('../models/pr');
const Bugs = require('../models/bugs');
const initData = require('../models/initd');

// Analytics
const snowplow = require('snowplow-tracker');
var emitter = snowplow.emitter;
var tracker = snowplow.tracker;
var e = emitter(
    '127.0.0.1',
    'http',
    9999,
    'POST',
    3,
    function(err, body, res){
        if(err){
            console.log('Error connecting to Snowplow Scala Stream collector:')
            console.log(err)
        }
    },
    { maxSockets: 6 }
);

var t = tracker([e], 'myFirstTracker', 'myApp', /*no base64*/ false);
t.setPlatform("Server")

const setScreenSizeTracker = (function(cookies){
    t.setScreenResolution(cookies.screenResolutionWidth, cookies.screenResolutionHeight)
    t.setViewport(cookies.viewportWidth, cookies.viewportHeight)
})

router.get('/', isAuthed, (req,res) => {
    console.log(req.cookies)
    res.redirect('/dashboard')
});

router.get('/login',(req,res) => {
    console.log(req.cookies)
    res.render('login.html')
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    /*failureFlash: true,*/
}));

router.get('/dashboard', isAuthed, (req,res) => {
    console.log(req.cookies)
    Users.find({},function(error,users){
        PRs.find({},function(err,prs){
            Bugs.find({},function(e,bugs){
                res.render('dashboard.ejs', {user: req.user, users: users, prs: prs, bugs:bugs})
            })
        })
    })
})

router.get('/initialize', (req,res) => {
    var clearCollection = (collection) => {
        return collection.deleteMany({}).exec()
    }

    clearCollection(Users)
    clearCollection(PRs)
    clearCollection(Bugs)
    initData.forEach(function(initd){
        col = initd.collection;
        var target;
        if(initd.db === "Users"){
            target = Users;
        }else if(initd.db === "PRs"){
            target = PRs;
        }else if(initd.db === "Bugs"){
            target = Bugs;
        }
        col.forEach(function(item){
            var T = new target();
            var keys = Object.keys(item)
            keys.forEach(function(key){ 
                T[key] = item[key];
            });
            T.save(function(err){
                if(err){
                    throw(err);
                }
            });
        })
    });
    res.send('Reinitialization successful')

})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
