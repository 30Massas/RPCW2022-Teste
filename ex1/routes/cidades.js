var express = require('express');
var router = express.Router();

const Cidade = require("../controllers/cidade")
const Ligacao = require("../controllers/ligacao")

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query["distrito"] != undefined){
    Cidade.listarPorDistrito(req.query["distrito"])
      .then(data => {
        res.status(200).jsonp(data)
      })
      .catch(erro => {
        res.status(501).jsonp({error:erro})
      })
  }else{
    Cidade.listar()
      .then(data => {
        res.status(200).jsonp(data)
      })
      .catch(erro => {
        res.status(502).jsonp({error:erro})
      })
  }
});

router.get("/nomes", (req,res) => {
  Cidade.listarPorNome()
    .then(data => {
      res.status(200).jsonp(data)
    })
    .catch(erro => {
      res.status(503).jsonp({error:erro})
    })
})

router.get("/:id", (req,res) => {
  Cidade.lookUp(req.params.id)
    .then(data => {
      res.status(200).jsonp(data)
    })
    .catch(erro => {
      res.status(504).jsonp({error:erro})
    })
})



module.exports = router;
