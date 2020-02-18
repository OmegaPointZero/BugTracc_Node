const express = require('express')
const router = express.Router()
const passport = require('passport')
const Users = require('../models/user')
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', isAuthed, (req,res) => {
    res.redirect('/dashboard')
});

router.get('/login',(req,res) => {
    res.render('login.html')
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/',
    /*failureFlash: true,*/
}));

router.get('/dashboard', isAuthed, (req,res) => {
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
