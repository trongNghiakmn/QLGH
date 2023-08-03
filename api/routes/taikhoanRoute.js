const express = require("express");
const tkService = require("../service/taikhoanService");

var route = express.Router();
route.use(express.json())

route.get("/getall", function (req, res) {
    tkService.getAllTaiKhoan((result) => {
        res.send(result);
    });
});
route.post("/add", function (req, res) {
    try {
        tkService.addTaiKhoan(
            (result) => {
                res.send(result);
            },
            req.body.taikhoan,
            req.body.matkhau
        );
    } catch (err) {
        res.send(err);
    }
});
route.get("/delete", function (req, res) {
    var a = req.query.mataikhoan;
    tkService.deleteTaiKhoan((result) => {
        res.send(result);
    }, a);
});
route.get("/login", function (req, res) {
    try {
        tkService.login((result) => {
            res.send(result);
        },
            req.query.taikhoan,
            req.query.matkhau,
        );
    } catch (err) {
        res.send(err);
    }
});
route.post("/update", function (req, res) {
    try {
        tkService.updateTaiKhoan(
            (result) => {
                res.send(result);
            },
            req.body.taikhoan,
            req.body.matkhau,
            req.body.mataikhoan,
        );
    } catch (err) {
        res.send(err);
    }
});


module.exports = route;