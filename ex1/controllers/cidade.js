const mongoose = require('mongoose');

var Cidade = require('../models/cidade')

module.exports.listar = () => {
    return Cidade
        .find({},{_id:0,id:1,nome:1,distrito:1})
        .exec()
}

module.exports.lookUp = id => {
    return Cidade
        .find({id:id},{_id:0})
        .exec()
}

module.exports.listarPorNome = () => {
    return Cidade
        .find({},{_id:0, nome: 1})
        .sort('nome')
        .exec()
}

module.exports.listarPorDistrito = d => {
    return Cidade
        .find({distrito: new RegExp(d+"$")},{_id:0,id:1,nome:1})
        .exec()
}