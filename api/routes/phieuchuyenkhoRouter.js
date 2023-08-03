const express = require("express");
const pckService = require("../service/phieuchuyenkhoService");

var route = express.Router();
route.use(express.json());

route.get("/getall", function (req, res) {
  pckService.getAllPhieuChieuKho((result) => {
    res.send(result);
  }, req.query.ma_khoden);
});
route.get("/getallgui", function (req, res) {
  pckService.getAllPhieuChieuKhoGui((result) => {
    res.send(result);
  }, req.query.ma_khogui);
});
route.get("/getalltheoma", function (req, res) {
  pckService.getAllPhieuChieuKhoTheoMa((result) => {
    res.send(result);
  }, req.query.ma_khoden);
});
route.get("/getdonhangphieuchuyenkho", (req, res) => {
  pckService.getAllDhPhieuchuyenkho(req.query.id, (result) => {
    res.send(result);
  });
});


route.post("/add", (req, res) => {
  pckService.addPhieuChuyenKho(
    (result) => {
      res.send(result);
    },
    req.body.ngaylapphieu,
    req.body.nguoilapphieu,
    req.body.nguoigiao,
    req.body.ma_khoden,
    req.body.ma_khogui
  );
});
route.post("/updatenoidung", function (req, res) {
  try {
    pckService.updateNoiDungPCK(
      (result) => {
        res.send(result);
      },
      req.body.noidung,
      req.body.maphieuchuyenkho
    );
  } catch (err) {
    res.send(err);
  }
});
route.post("/updatekho", function (req, res) {
  try {
    pckService.updateKhoPCK(
      (result) => {
        res.send(result);
      },
      req.body.ma_khogui,
      req.body.ma_khoden,
      req.body.maphieuchuyenkho
    );
  } catch (err) {
    res.send(err);
  }
});
route.get("/delete", function (req, res) {
  var a = req.query.maphieuchuyenkho;
  pckService.deletePhieuChuyenKho((result) => {
    res.send(result);
  }, a);
});

// route.post("/updatephieuchuyenkho", function (req, res) {
//   const id = req.body.id;
//   const newData = {
//     ngaylapphieu: req.body.ngaylapphieu,
//     makhogui: req.body.makhogui,
//     nguoilapphieu: req.body.nguoilapphieu,
//     soxe: req.body.soxe,
//     makhoden: req.body.makhoden,
//   };

//   pckService.updatePhieuChuyenKho(id, newData, function (results) {
//     res.send(results);
//   });
// });

module.exports = route;
