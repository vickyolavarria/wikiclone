const express = require("express");
const router = express.Router();
const modelos = require("../models/index");

router.post("/", (req, res, next) => {
  var name = req.body.name
  var email = req.body.email;

  User.create({
    name: name,
    email: email,
  })
    .then(() => {
      res.send("user creado");
    })
    .catch((e) => console.log(e));
});

module.exports = router;