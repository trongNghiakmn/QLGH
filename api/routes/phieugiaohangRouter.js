const express = require("express");
const pghService = require("../service/phieugiaohangService");

var route = express.Router();
route.use(express.json());
route.get("/getall", function (req, res) {
  pghService.getAllPhieuGiaoHang((result) => {
    res.send(result);
  });
});
route.get("/getpghtheoma", function (req, res) {
  pghService.getPGHTheoMa((result) => {
    res.send(result.reverse());
  }, req.query.maphieugiaohang);
});
route.get("/getallnvdhpgh", function (req, res) {
  pghService.getAllPhieuGiaoHangNVDH((result) => {
    res.send(result.reverse());
  }, req.query.ma_kho);
});
route.get("/gettheosipper", function (req, res) {
  pghService.getPhieuGiaoHangTheoShipper((result) => {
    res.send(result.reverse());
  }, req.query.nguoigiao);
});
route.get("/gettheophieugh", function (req, res) {
  pghService.getAllDhPhieugiaohang((result) => {
    res.send(result.reverse());
  }, req.query.maphieugiaohang);
});
route.get("/getdhpghngtt", function (req, res) {
  pghService.getAllDhPghNgTt((result) => {
    res.send(result.reverse());
  }, req.query.nguoigiao,
    req.query.ma_trangthai
  );
});
route.post("/add", (req, res) => {
  pghService.addPhieuGiaoHang(
    (result) => {
      res.send(result);
    },
    req.body.ngaylapphieu,
    req.body.nguoilapphieu,
    req.body.nguoigiao
  );
});
// route.get("/deletephieugiaohang", function (req, res) {
//   var a = req.query.magh;
//   pghService.deletePhieuGiaoHang(a, (result) => {
//     res.send(result);
//   });
// });
// route.post("/updatephieugiaohang", function (req, res) {
//   const id = req.body.magh;
//   const newData = {
//     ngaylapphieu: req.body.ngaylapphieu,
//     shipper: req.body.shipper,
//     nguoinhan: req.body.nguoinhan,
//   };
//   pghService.updatePhieuGiaoHang(id, newData, function (results) {
//     res.send(results);
//   });
// });

module.exports = route;
