const countryContloller = require('../controllers/countryController')
const router = require('express').Router()
const authentication = require('../middleware/authentication')

router
    .use(authentication)
    .get('/country' ,countryContloller.findAll)
module.exports = router