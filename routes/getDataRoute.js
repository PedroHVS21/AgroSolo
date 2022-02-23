const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.get('/:idArduino', (req, res) => {
    exemploModel.findOne({'idArduino':{$eq: req.params.idArduino}})
    .exec()
    .then((result)=>{
        if(result != 0){
            return res.json({ 
                tempAr:result.tempAr,
                humAr: result.humAr,
                estadoSolo: result.estadoSolo
            })
        }
        return res.json({
            msg:'não encontrado'
        })
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router



