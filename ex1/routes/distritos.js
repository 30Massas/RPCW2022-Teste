var express = require('express');
var router = express.Router();

const Cidade = require("../controllers/cidade")
const Ligacao = require("../controllers/ligacao")

router.get('/', function(req, res, next) {
    Cidade.listar()
        .then(data => {
            var distrito = {}
            data.forEach(ele => {
                if(!(ele.distrito in distrito))
                    distrito[ele.distrito] = []
                distrito[ele.distrito].push({"id":ele.id,"nome":ele.nome})
            })
            var resultado = []
            for(k in distrito){
                t = {}
                t.distrito=k
                t.cidades=distrito[k]
                resultado.push(t)
            }
            res.status(200).jsonp(resultado);
        })
        .catch(erro => {
            res.status(505).jsonp({error:erro})
        })
});

module.exports = router;