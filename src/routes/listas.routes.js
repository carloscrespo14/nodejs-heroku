'use strict'

const express = require('express');
const router = express.Router();

const listaCtrl = require('../controllers/listas.controller');

router.get('/listas', listaCtrl.getAll);
router.post('/listas/nueva', listaCtrl.createOne);

module.exports = router;