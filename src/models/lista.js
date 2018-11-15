'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
    title: {type: String, lowercase:true},
    body: {type: String, lowercase:true},
    date: Date
});

const ListaSchema =  new Schema({
    title:{type: String, lowercase:true},
    owner:{type: String, lowercase: true},
    items: [ItemSchema],
    created_date:{type:Date, default:Date.now()}
});


module.exports = mongoose.model('Lista', ListaSchema);