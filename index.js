const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: './private/.env' })
const app = express()
 


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use('/create', require('./routes/createRoute'))
app.use('/update', require('./routes/updateRoute'))
app.use('/getData', require('./routes/getDataRoute'))


app.get('/', (req,res) => {
    res.send('Qualquer coisa')
})


mongoose.connect(process.env.MONGOURI || 5000, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to MongoDB"));



app.listen('agrosolo.herokuapp.com',(error)=>{
    if(error) throw error
    console.log('Api listening on port 5000')
})

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

