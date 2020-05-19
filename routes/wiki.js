const express = require("express");
const router = express.Router();
const {Page} = require("../models/index")

router.get('/',(req,res,next)=>{
    Page.findAll()
    .then((paginas)=>{
        res.send(paginas)
    })
})

router.post("/add", (req, res,next) => {
var title = req.body.title
var content = req.body.content;
var status = req.body.status;
var date= req.body.date;

    Page.create({title: title, content:content,status:status,date:date})
    .then(()=>{ res.send("Pagina creada")})
    .catch(e=>console.log(e))
    
});

router.get("/add", (req, res,next) => {
  res.render("addpage");
});

module.exports = router;