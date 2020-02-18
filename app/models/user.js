const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    date: Number,                     /*date created*/
    employeeID: String,
    email: String,
    password: String,             
    firstName: String,            
    lastName: String,          
    submittedPRs: Array,      /*array of PRIDs */ 
    submittedBugs: Array,
    role: String,            /* (["Developer", "Project Manager"])*/ 
    avatar: String,
    assignedBugs: Array,    /* Array of bug IDs assigned to user */ 
    resolvedBugs: Array,    /* Array of bug IDs resolved by user */  
    messages: Object,
    alerts: Array,
},{collection:'users'}); 

// Hashing the password 
userSchema.methods.generateHash = function(password){ 
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null) 
} 

// Compare and check if password is correct 
userSchema.methods.validPassword = function(password){ 
    return bcrypt.compareSync(password, this.password) 
} 


module.exports = mongoose.model('User', userSchema); 
