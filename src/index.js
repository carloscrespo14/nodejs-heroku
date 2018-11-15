'use strict'

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./settings/config')
const path = require('path');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//middlewares
app.use('/api', require('./routes/listas.routes'));

//server listening

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(config.DB,{ useNewUrlParser: true },(err, res) =>{
    console.log('Trying connect with database services')
    if(err){
        return console.log('db connection process failed', err)
    } else {
        console.log('api ready connected with database service')
        app.listen(config.PORT, ()=>{
            console.log(`App running`)
            console.log(`Use Ctrl + C to stop`)
        })
    }
})
