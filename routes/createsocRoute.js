const express = require('express')
const router = express.Router()

router.post('/',(request,response)=>{
    console.log(request.body)
    response.json({
        msg: 'Pedido recebido!'
    })
})

module.exports = router