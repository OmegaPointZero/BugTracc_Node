const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var bugSchema = new mongoose.Schema({
    project: String, /* Name */
    repo: String, /* URL of the project repo */
    commit: String, /* Commit with known bug */
    dateFiled: Number, /* Date Bug was filed on */
    bugID: String,
    assignedTo: String, /* employeeID of employee assigned Bug */
    assignedName: String,
    filedByID: String,
    filedByName: String,
    summary: String,
    description: String,
    status: String, /* (["Unassigned", "Assigned", "In Progress", "Under Review", "PR Rejected", "Resolved"]) */
    type: String, /* (["Critical", "High", "Medium", "Low", "Documentation", "Feature Request"]) */
    active: Boolean, /* set to false after Bug is resolved */
    submittedPRs: Array, /* array of objects containing PRs outlined below */
    fixedOn: Number, /*timestamp of when issue was fixed*/
    finalPR: String, /*PRID of submittedPR object in submittedPRs array*/
},{collection:'bugs'});

module.exports = mongoose.model('Bug', bugSchema);
