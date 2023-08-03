const express = require("express");
const dhService = require("../service/donhangService");
var route = express.Router();
route.use(express.json());
route.use(
  express.urlencoded({
    extended: true,
  })
);
route.get("/getall", function (req, res) {
  dhService.getAllDonhang((result) => {
    res.send(result.reverse());
  });
});
route.get("/getalldangsuly", function (req, res) {
  dhService.getAllDonhangDangSuLy((result) => {
    res.send(result.reverse());
  }, req.query.ma_trangthai,
    req.query.ma_kho);
});
route.get("/gettheoma", function (req, res) {
  dhService.getDHTheoMa((result) => {
    res.send(result);
  }, req.query.madonhang);
});
route.get("/getalltheokho", function (req, res) {
  dhService.getAllDonhangTheoKho((result) => {
    res.send(result.reverse());
  }, req.query.ma_kho);
});
route.get("/getalltheothang", function (req, res) {
  dhService.getAllDonhangTheoThang((result) => {
    res.send(result.reverse());
  }, req.query.thang,
    req.query.ma_kho);
});
route.get("/find", function (req, res) {
  dhService.findDonhang((result) => {
    res.send(result.reverse());
  }, req.query.sdt_nguoigui);
});
route.get("/findnhan", function (req, res) {
  dhService.findDonhangNhan((result) => {
    res.send(result.reverse());
  }, req.query.sdt_nguoinhan);
});

// route.get("/deletedonhang", function (req, res) {
//   var a = req.query.madh;
//   dhService.deleteDonhang((result) => {
//     res.send(result);
//   }, a);
// });

route.post("/add", function (req, res) {
  console.log(req.body);
  try {
    dhService.addDonhang(
      (result) => {
        res.send(result);
      },
      req.body.ten_nguoigui,
      req.body.sdt_nguoigui,
      req.body.ten_nguoinhan,
      req.body.sdt_nguoinhan,
      req.body.diachi_nguoinhan,
      req.body.ghichu,
      req.body.hinhanh,
      req.body.ma_trangthai,
      req.body.ma_phieugiaohang,
      req.body.ma_phieuchuyenkho,
      req.body.ma_kho,
      req.body.giatri,
      req.body.khoiluong,
      req.body.ngaytaodon
    );
  } catch (err) {
    res.send(err);
  }
});
route.post("/addchuyenkho", function (req, res) {
  console.log(req.body);
  try {
    dhService.addDonhangChuyenKho(
      (result) => {
        res.send(result);
      },
      req.body.ten_nguoigui,
      req.body.sdt_nguoigui,
      req.body.ten_nguoinhan,
      req.body.sdt_nguoinhan,
      req.body.diachi_nguoinhan,
      req.body.ghichu,
      req.body.hinhanh,
      req.body.ma_trangthai,
      req.body.ma_phieugiaohang,
      req.body.ma_phieuchuyenkho,
      req.body.ma_kho,
      req.body.giatri,
      req.body.khoiluong,
      req.body.ngaytaodon
    );
  } catch (err) {
    res.send(err);
  }
});
route.post("/updategiaodonhang", function (req, res) {
  try {
    dhService.updateGiaoDonhang(
      (result) => {
        res.send(result);
      },
      req.body.ma_trangthai,
      req.body.ma_phieugiaohang,
      req.body.madonhang,
    );
  } catch (err) {
    res.send(err);
  }
});
route.post("/updatechuyenkhodonhang", function (req, res) {
  try {
    dhService.updateChuyenKhoDonhang(
      (result) => {
        res.send(result);
      },
      req.body.ma_trangthai,
      req.body.ma_kho,
      req.body.madonhang,
    );
  } catch (err) {
    res.send(err);
  }
});

route.post("/updatestatus", function (req, res) {
  try {
    dhService.updateStatusDonhangById(
      (result) => {
        res.send(result);
      },
      req.body.ma_trangthai,
      req.body.madonhang
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
