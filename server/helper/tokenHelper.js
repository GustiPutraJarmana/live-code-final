"use strict"
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateTok = (obj) => {
    return jwt.sign(obj, process.env.TEKEN_KEY)
}

const verifyTok = (token) => {
    return jwt.verify(token, process.env.TEKEN_KEY)
}

module.exports = {generateTok, verify}