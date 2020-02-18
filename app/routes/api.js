const express = require('express')
const router = express.Router()
const Users = require('../models/user')
const PRs = require('../models/pr')
const Bugs = require('../models/bugs')
const initData = require('../models/initd')

router.get('/', (req,res) => {
    res.send({messageResponse:"This is where the API lives!"})
})    



module.exports = router;
