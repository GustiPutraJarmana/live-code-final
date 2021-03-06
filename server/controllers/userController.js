"use strict"
const {User} = require('../models')
const {generateTok} = require('../helper/tokenHelper')

class UserController {
    
    static login(req, res, next) {
        const {username, password} = req.body
        User.findOne({where : {username}})
            .then(data => {
                if(data && password === data.password) {

                    console.log(data.id)
                    res.status(200).json({token : generateTok({id : data.id, username : username}),id : data.id, username : data.username })
                } else {
                    const error = {
                        status : 400,
                        message : 'email or email wrong'
                    }
                    throw error
                }
            })
            .catch(err => {next(err)})
    }

}

module.exports = UserController