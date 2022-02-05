const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: './private/.env' })
const app = express()



app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use('/create', require('./routes/createRoute'))
app.use('/update', require('./routes/updateRoute'))
app.use('/createsoc', require('./routes/createsocRoute'))


mongoose.connect(process.env.MONGOURI, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to MongoDB"));


app.listen( process.env.PORT || 5000,(error)=>{
    if(error) throw error
    console.log('Api listening on port 5000')
})

