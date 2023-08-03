const express = require("express")
const nvService = require('../service/nhanvienService')

var route = express.Router();
route.use(express.json());
route.get('/getall', function (req, res) {
  nvService.getAllNhanVien((result) => {
    res.send(result)
  })
});
route.get('/gettheochucvu', function (req, res) {
  nvService.getNhanVienTheoCV((result) => {
    res.send(result)
  }, req.query.ma_chucvu);
});
route.get('/gettheoma', function (req, res) {
  nvService.getNhanVienTheoMa((result) => {
    res.send(result)
  }, req.query.manhanvien);
});
route.post("/add", function (req, res) {
  try {
    nvService.addNhanvien(
      (result) => {
        res.send(result);
      },
      req.body.tennv,
      req.body.sdt,
      req.body.ma_taikhoan,
      req.body.ma_chucvu,
    );
  } catch (err) {
    res.send(err);
  }
});

route.post("/updatechucvu", function (req, res) {
  try {
    nvService.updateChucVuNhanVienById(
      (result) => {
        res.send(result);
      },
      req.body.ma_chucvu,
      req.body.manv
    );
  } catch (err) {
    res.send(err);
  }
});
route.post("/updatenv", function (req, res) {
  try {
    nvService.updateNhanVien(
      (result) => {
        res.send(result);
      },
      req.body.ma_chucvu,
      req.body.tennv,
      req.body.sdt,
      req.body.manv
    );
  } catch (err) {
    res.send(err);
  }
});
route.get("/delete", function (req, res) {
  var a = req.query.manv;
  nvService.deleteNhanVien((result) => {
    res.send(result);
  }, a);
});

module.exports = route