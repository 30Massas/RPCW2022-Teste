const mongoose = require('mongoose');

var Ligacao = require('../models/ligacao')

module.exports.listar = () => {
    return Ligacao
        .find()
        .exec()
}

module.exports.showInfoOrigem = o => {
    return Ligacao
        .find({origem:o})
        .exec()
}

module.exports.listarDist = dist => { 
    return Ligacao
        .find({distancia: { $gte: dist}},{_id:0, id: 1, origem: 1, destino: 1})
        .exec()
}