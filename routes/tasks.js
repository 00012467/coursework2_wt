const express = require('express')
const router = express.Router()

const {getAllTasks} = require('../public/javascripts/tasks')

router.route('/').get(getAllTasks)

module.exports = router