const express = require('express')
const router = express.Router()
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const User = require('../models/user')
const initData = require('../models/initd')

router.get('/', isAuthed, (req,res,next) => {
    res.redirect('/bugs/all')
})    

router.get('/all', isAuthed, (req,res,next) => {
    Bugs.find({},function(err,bugs){
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"All Bugs",tableTitle:"Displaying Bugs",tableType:"Bug"})
    })
})

router.get('/unassigned', isAuthed, (req,res) => {
    Bugs.find({status:"Unassigned"},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"Unassigned Bugs",tableTitle:"Displaying Bugs",tableType:"Bug"})
    })
})     

router.get('/mine', isAuthed, (req,res) => {
    Bugs.find({assignedTo:req.user.employeeID},function(err,bugs){
        if(err){
            console.log(err)
        }
        res.render('tableview.ejs', {user:req.user,passedItems:bugs,title:"My Bugs",tableTitle:"Displaying Bugs",tableType:"Bug"})
    })
})    

router.get('/bug/:id', isAuthed, (req,res) => {
    Bugs.findOne({bugID:req.params.id},function(err,bug){
        if(err){
            console.log(err)
        }
        res.render('bugid.ejs', {user:req.user,passedItems:bug})
    })
})

router.get('/pr/:id', isAuthed, (req,res) => {
    PRs.findOne({"prID":req.params.id},function(err,PR){
        if(err){
            console.log(err)
        }
        res.render('PRs.ejs', {user:req.user,PR:PR})
    })
})

router.get('/pr', isAuthed, (req,res) => {
    PRs.find({},function(err,PRs){
        res.render('tableview.ejs',{user:req.user,passedItems:PRs,title:"PRs",tableTitle:"Submitted PRs",tableType:"PR"})
    })
})

router.get('/new', isAuthed, (req,res) => {
    res.render('newbug.ejs', {user:req.user})
})

router.post('/new', isAuthed, (req,res) => {
    var BG = new Bugs()
    BG.repo = req.body.repo
    BG.summary = req.body.summary
    BG.type = req.body.type
    BG.dateFiled = new Date().getTime()
    BG.filedByID = req.user.employeeID
    BG.fliedByName = req.user.firstName
    BG.description = req.body.description
    BG.status = "Unassigned"
    BG.active = true;
    BG.submittedPRs = []
    BG.fixedOn = 0
    BG.finalPR = ""
    BG.bugID = Math.floor(Math.random()*BG.dateFiled).toString(16)
    BG.assignedTo = ""
    BG.assignedName = ""
    BG.project = "Employee Management Suite"
    BG.commit = "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06"
    BG.save(function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/bugs/all')
    })
})

router.post('/submitfix', isAuthed, (req,res) =>{
    
    let prid = (Math.random()*new Date()).toString(16).slice(0,9)
    console.log(req.body)
    var PR = new PRs()
    PR.date = new Date().getTime()
    PR.prID = prid
    PR.employeeID = req.user.employeeID;
    PR.prURL = req.body.prURL;
    PR.bugID = req.body.bugID;
    PR.resolvedIssue = false;
    PR.notes = req.body.notes;
    PR.reviewedBy = {}
    PR.save(function(err){
        if(err){
            console.log("Error saving PR:")
            console.log(err)
        }
        Bugs.findOneAndUpdate({"bugID":req.body.bugID},{$push:{"submittedPRs":prid},$set:{"status":"Under Review"}},function(error,thisbug){
            if(error){
                console.log("Error updating Bugs:")
                console.log(error)
            }
            if(!thisbug){
                console.log("Error: Bug not found")
            }
            User.findOneAndUpdate({"employeeID":req.user.employeeID},{$push:{"submittedPRs":prid}},function(e,thisuser){
                if(e){
                    console.log("Error updating user:")
                    console.log(e)
                }
                if(!thisuser){
                    console.log("Error: User not found")
                }
                res.redirect('/bugs/bug/'+req.body.bugID)
            })
        })
    })
})

router.post('/reassign', isAuthed, (req,res) => {
        console.log(req.body)
     Bugs.findOneAndUpdate({"bugID":req.body.bugID},{$set:{"assignedTo":req.body.employeeID,"assignedName":req.body.firstName}},function(err,results){
        if(err){
            console.log("Error reassigning bug to "+req.user.employeeID+":")
            console.log(err)
        }
        User.findOneAndUpdate({"employeeID":req.body.employeeID},{$push:{"assignedBugs":req.body.bugID}},function(e,newUser){
            if(e){
                console.log("Error updating new owner's profile:")
                console.log(e)
            }
            res.send({"code":"successful","reassigned":true})
        })
    })
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
