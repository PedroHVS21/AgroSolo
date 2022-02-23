const express = require('express')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.get('/', (req, res) => {
    exemploModel.findOne(
        {'idArduino':'123'})
    .exec()
    .then((result) => {
        console.log(result);
        res.send(result)
    })
    .catch(error => {
                res.json({
                    msg: 'Ocorreu um erro'
                })
            })
        })

module.exports = router
