const express = require('express')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.post('/', (req, res) => {
    exemploModel.findOne(
        { 'idArduino': { $eq: req.body.idArduino } })
        .exec()
        .then((result) => {
            if (result == null) {
                res.json({
                    msg: 'Objeto não encontrado',
                })
            }
            else {
                exemploModel.findOneAndUpdate(
                    { 'idArduino': { $eq: req.body.idArduino } },
                    { $set: { 'tempAr': req.body.tempAr, 'humAr': req.body.humAr, 'estadoSolo': req.body.estadoSolo } },
                    { new: true }
                )
                    .then((obj) => {
                        res.json({
                            msg: 'Objeto alterado',
                            data: obj
                        })
                    })
                    .catch(error => {
                        res.json({
                            msg: 'Ocorreu um erro'
                        })
                    })
            }

        })

        .catch(error => {
            res.json({
                msg: 'Ocorreu um erro'
            })
        })

})

module.exports = router