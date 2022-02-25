const express = require('express')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.post('/', (req, res) => {
    console.log(req.body)
    exemploModel.find({'idArduino':{$eq: req.body.idArduino}})
    .exec()
    .then((result)=>{
        if(result == 0){
            newArduino = new exemploModel({
               idArduino: req.body.idArduino,
               tempAr: req.body.tempAr,
               humAr: req.body.humAr,
               estadoSolo: req.body.estadoSolo,
            })
            newArduino.save()
            .then(result => {
                console.log('Objeto criado')
                res.json({msg: 'Objeto criado'})
            })
            .catch(error => {
                console.log(error)
                res.json({msg: 'Ocorreu um erro'})
            })
        }
        else {
            res.json({msg:'Equipamento existente'})
            console.log(result)
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router


