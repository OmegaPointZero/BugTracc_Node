const express = require('express')
const router = express.Router()
const Users = require('../models/user')
    
router.get('/team', isAuthed, (req,res) => {
    Users.find({},function(err,users){
        res.render('tableview.ejs', {user:req.user,passedItems:users,title:"My Team",tableTitle:"Displaying Team Members",tableType:"Team",})
    })
})

router.get('/profile/:id', isAuthed, (req,res) => {
    Users.findOne({"employeeID":req.params.id},function(err,employee){
        res.render('profile.ejs', {user:req.user,employee:employee})
    })
})

router.get('/profile', isAuthed, (req,res) => {
    res.render('profile.ejs', {user:req.user,employee:req.user})
})

router.get('/messages/:id', isAuthed, (req,res) => {
    var currentUserThreadObject = req.user.messages.threads.filter(function(a){return a.senderID === req.params.id})[0]
    var prevUnread = currentUserThreadObject.unread
    var prevUnreadThreads = req.user.messages.unreadThreads
    var prevUnreadMessages = req.user.messages.unreadMessages
    var nUM = prevUnreadMessages - prevUnread
    var nUT
    if(prevUnread > 0){
        nUT = prevUnreadThreads - 1
    } else {
        nUT = prevUnreadThreads
    }

    Users.findOneAndUpdate({
        'employeeID':req.user.employeeID,
        'messages.threads.senderID':req.params.id
    },{
        $set:{
            'messages.threads.$.unread':0,
            'messages.unreadMessages':nUM,
            'messages.unreadThreads':nUT
        }
    },function(error,stuff){
        if(error){
            console.log('Error fetching messages and updating DB:')
            console.log(error)
        }
        console.log(stuff)
        res.render('message.ejs', {user:req.user,msgID:req.params.id})
    })
})

router.get('/messages', isAuthed, (req,res) => {
    res.render('tableview.ejs', {user:req.user,passedItems:req.user.messages.threads,title:"Threads",tableTitle:"Threads",tableType:"threads"})
})

router.post('/sendMessage', isAuthed, (req,res) => {
    var newMessage = {"type":"OUT","time":new Date().getTime(),message:req.body.messageBody,read:false} 
    var tgt = req.user.messages.threads.filter(function(e){return e.senderID === req.body.target})[0]
    Users.findOneAndUpdate({
        'employeeID':req.user.employeeID,
        'messages.threads.senderID':req.body.target
    },{
        $push:{
            'messages.threads.$.messages':newMessage
        },
    },function(err){
        if(err){
            console.log('Error updating sender\'s message threads:')
            console.log(err)
        }

        console.log('Updating sender\'s information completed, attempting to update receiver\'s info...')
        // START OF UPDATE BLOCK: DYNAMICALLY QUERYING THIS MIGHT BE HARDER
        // END OF BLOCK
    })

    newMessage.type = "IN";
    Users.findOne({
        'employeeID':req.body.target,
        'messages.threads.senderID':req.user.employeeID
    },function(error,recipient){
        if(error){
            console.log('Error finding receiver\'s message threads:')
            console.log(error)
        }

        //     var currentUserThreadObject = req.user.messages.threads.filter(function(a){return a.senderID === req.params.id})[0]
        var recBeforeUpdate = recipient.messages;
        var rBUThread = recBeforeUpdate.threads.filter(function(a){return a.senderID === req.user.employeeID})[0]
        var unreadThreads = recBeforeUpdate.unreadThreads
        if(rBUThread.unread === 0){
            unreadThreads += 1
        }
        Users.findOneAndUpdate({
            'employeeID':req.body.target,
            'messages.threads.senderID':req.user.employeeID
        },{
            $set:{
            'messages.threads.$.unread': rBUThread.unread+1,
            'messages.unreadMessages':recBeforeUpdate.unreadMessages+1,
            'messages.unreadThreads':unreadThreads
            },
            $push:{
                'messages.threads.$.messages':newMessage
            }
        },function(e,r){
            if(e){
                console.log(e)
            }
            res.redirect('/user/messages/'+req.body.target)
        })

    })
})

function isAuthed(req,res,next){
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router;
