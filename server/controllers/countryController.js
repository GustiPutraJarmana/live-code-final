"use strict"
const {Country} = require('../models')

class CountryController {
    static findAll(req, res, next) {
        console.log('masukkkkkkkk')
        Country.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {next(err)})
    }

}
module.exports = CountryController