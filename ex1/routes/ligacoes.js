var express = require('express');
var router = express.Router();

const Cidade = require("../controllers/cidade")
const Ligacao = require("../controllers/ligacao")

router.get('/', function(req, res, next) {
    if(req.query["origem"] != undefined){
      Cidade.listar()
        .then(cidades => {
          cidades.forEach(cidade => cidades[cidade.id]=cidade.nome)
          Ligacao.showInfoOrigem(req.query["origem"])
            .then(data => {
              let ligacao = []
              data.forEach(e => {
                t = {}
                t.id = e.id
                t.destino = e.destino
                t.cidadeDestino=cidades[e.destino]
                ligacao.push(t)
              })
              res.status(200).jsonp(ligacao)
            })
            .catch(erro => {
              res.status(506).jsonp({error:erro})
        })
        .catch(erro => {
          res.status(507).jsonp({error:erro})
      })
    })
  }else if (req.query["dist"] != undefined){
        Cidade.listar()
          .then(cidades => {
            cidades.forEach(cidade => cidades[cidade.id]=cidade.nome)
            Ligacao.listarDist(req.query["dist"])
              .then(data => {
                let ligacao = []
                console.log(data)
                data.forEach(e => {
                  t={}
                  t.id=e.id
                  t.origem=e.origem
                  t.destino=e.destino
                  t.cidadeOrigem=cidades[e.origem]
                  t.cidadeDestino=cidades[e.destino]
                  ligacao.push(t)
                })
                res.status(200).jsonp(ligacao)
              })
              .catch(erro => {
                res.status(508).jsonp({error:erro})
              })
          })
          .catch(erro => {
            res.status(509).jsonp({error:erro})
    })
  }
});

module.exports = router;