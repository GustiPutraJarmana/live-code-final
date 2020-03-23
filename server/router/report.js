const reportController = require('../controllers/reportController')
const router = require('express').Router()
const authentication = require('../middleware/authentication')

router
    .use(authentication)
    .get('/reports', reportController.findAll)




module.exports = router