"use strict"
const {User} = require('../models')
const {varifyTok} = require('../helper/tokenHelper')

module.exports =(req, res, next) => {
    const token = req.headers.token
    if (!token) res.status(401).json('access denied. you dont have token')
    try {
        const decode = varifyTok(token)
        User.findOne({where : {id : decode.id}})
            .then(data => {
                if (data.id === decode.id) {
                    req.user = decode
                    next()
                }

            })
            .catch(err => {
                res.status(401).json('access denied. you dont have token')
            })
    } catch(err) {
        const error = {
            status : 404,
            message : 'invaled token'
        }
        next(err)
    }
}
