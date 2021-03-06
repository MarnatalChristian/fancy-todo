const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')

router.use('/', user)
router.use('/todos', todo)

module.exports = router
