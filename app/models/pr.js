const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var PRSchema = new mongoose.Schema({
    date: Number, 
    employeeID: String, 
    prID: String,
    prURL: String, 
    bugID: String,
    resolvedIssue: Boolean, 
    notes: String,
    reviewedBy: Object, /* {
        employeeID: String,
        name: String,
        date: Number,
        notes: String
    },*/
},{collection:'prs'});

module.exports = mongoose.model('PRs', PRSchema);
