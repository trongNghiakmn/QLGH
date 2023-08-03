const express = require("express");
const ttService = require("../service/trangthaiService");

var route = express.Router();

route.use(express.json())

route.get("/getall", function (req, res) {
  ttService.getAllTrangthai((result) => {
    res.send(result);
  });
});

module.exports = route;
