const reportController = require('../controllers/reportController')
const router = require('express').Router()
const authentication = require('../middleware/authentication')

router
    .use(authentication)
    .get('/reports', reportController.findAll)
    .post('/reports', reportController.addReport)
    .delete('/reports/:id', reportController.deleteReport)




module.exports = router