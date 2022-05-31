var express = require('express');
var router = express.Router();
const axios = require('axios');

const TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNDYwNiwiZXhwIjoxNjU0MDQzNDA2fQ.T7Yx-NzXwsj1KJL0h_JYiyIkcjNCYQ3fibIL3_xY5HnyvlOIv6Rm9C2T-39Fyr7bpgNeYpIVqkcsaY3pcpo5_cwJOH5noS0EsaOxoPq8qjEdVZFRiS50denVGS966GT-dvu7XBzL47Wd5RH5dHUacxG2xezGuW1_dwbr4BSEohR0jH2UKWwoh-fdS0F0oj8pW5Lqc03HoFQxYS37N2FsBjLd_NDHxAlxGl2-W6Wny_6p29ClRS-X2ahLx4Vv661xCivdkTsDe6j32SyL_UizRtgtd2kOmUYy9qMcGupIpMLBbm-mBNJYfbb3fG3ZKZIqvcUVp5di6uncA0NCD3N-bg"
const API = "http://clav-api.di.uminho.pt/v2/"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RPCW2022 - CLAV Exercise' });
});

router.get("/classes", (req,res)=>{
  axios.get(API+"/classes?nivel=1&token="+TOKEN)
  .then(data=>{
    content= data.data
    prev = req.get('referer')
    res.render('nivel1',{data:content,prev:prev})
  })
  .catch(erro => {
    res.render('error',{error:erro})
  })
})

router.get("/classes/:id", (req,res) => {
  axios.get(API+"/classes/c"+req.params.id+"?token="+TOKEN)
  .then(data => {
    content=data.data
    prev = req.get('referer')
    res.render("classe",{data:content,prev:prev})
  })
  .catch(erro => {
    res.render('error',{error:erro})
  })
})

router.get("/termos", (req,res)=>{
  axios.get(API+"/termosIndice?token="+TOKEN)
  .then(data=>{
    content=data.data
    prev = req.get('referer')
    res.render("termos",{data:content,prev:prev})
  })
  .catch(erro => {
    res.render('error',{error:erro})
  })
})

module.exports = router;
