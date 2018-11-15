'use strict'

const ListaModel = require('../models/lista');

const listasCtrl = {}

listasCtrl.getAll =  async (req, res) => {
    await ListaModel.find({}, (err, lista) => {
        if(err) return res.status(500).send({msg:'algo salio mal'});
        return res.status(200).send(lista);
    });
}

listasCtrl.createOne = async (req, res) => {
    const {title, owner, items, created_date} = req.body;
    const lista = new ListaModel({title, owner, items, created_date});
    await lista.save((err) =>{
        if(err) return res.status(500).send({msg:'algo salio mal'});
    });
    res.status(200).send({msg:'Lista Guardada'});
}


module.exports = listasCtrl;