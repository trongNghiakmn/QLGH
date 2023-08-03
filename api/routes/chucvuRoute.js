const express = require("express");
const cvService = require("../service/chucvuService");

var route = express.Router();
route.use(express.json());
route.get("/getall", function (req, res) {
    cvService.getAllTrangthai((result) => {
        res.send(result);
    });
});

module.exports = route;