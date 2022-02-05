const mongoose = require('mongoose')

const exemplo = mongoose.Schema({
    'idArduino' : {'type': 'String'},
    'tempAr' : {'type': 'Number'},
    'humAr' : {'type': 'Number'},
    'estadoSolo': {'type' : 'String'},
    date: {'type': Date, default: Date.now}
})

module.exports = mongoose.model('exemploModel',exemplo)