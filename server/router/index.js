"use strict"
const router = require('express').Router()
const user = require('./user')
const country = require('./country')
const report = require('./report')

router
    .use(user)
    .use(country)
    .use(report)

module.exports = router