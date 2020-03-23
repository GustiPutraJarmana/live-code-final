const {Report, Country} = require('../models')

class ReportController {
    static findAll(req, res, next) {
        console.log('masukkkkkkkk')
        Report.findAll({include : [Country], where : {UserId : req.user.id}})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {next(err)})
    }

    static addReport(req, res, next) {
        const userId = req.user.id
        const body = {
            cases : req.body.cases,
            CountryId : req.body.CountryId,
            UserId : userId
        }
        Report.create(body)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {next(err)})

    }
    static deleteReport(req, res, next) {
        const id = +req.params.id
        const hapus = Report.destory({where : {id : id}})
        const find = Report.findOne({where : {id : id}})
            Promise.all([find, hapus])
                .then(data => {
                    res.status(200).json({country : data[0], report : 'seccesfully delete'})
                })
                .catch(err => {next(err)})
        
        
    }

}

module.exports = ReportController