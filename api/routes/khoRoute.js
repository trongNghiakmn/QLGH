const express = require("express");
const kService = require("../service/khoService");
var route = express.Router();
route.use(express.json());

route.get("/getall", function (req, res) {
  kService.getAllKho((result) => {
    res.send(result);
  });
});

module.exports = route;