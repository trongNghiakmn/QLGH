const db = require("./db")();

exports.getAllDonhang = (callback) => {
  db.query(
    "SELECT * FROM `donhang` JOIN kho on donhang.ma_kho=kho.makho JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai",
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.getAllDonhangDangSuLy = (callback, ma_trangthai, ma_kho) => {
  db.query(
    "SELECT * FROM `donhang` JOIN kho on donhang.ma_kho=kho.makho JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai WHERE donhang.ma_trangthai=? AND donhang.ma_kho=?",
    [ma_trangthai, ma_kho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.getDHTheoMa = (callback, madonhang) => {
  db.query(
    "SELECT * FROM `donhang` JOIN kho on donhang.ma_kho=kho.makho JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai WHERE donhang.madonhang=?",
    [madonhang],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.getAllDonhangTheoKho = (callback, ma_kho) => {
  db.query(
    "SELECT * FROM `donhang` JOIN kho on donhang.ma_kho=kho.makho JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai where donhang.ma_kho=?",
    [ma_kho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.getAllDonhangTheoThang = (callback, thang, ma_kho) => {
  db.query(
    "SELECT * FROM `donhang` JOIN kho on donhang.ma_kho=kho.makho JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai WHERE MONTH(ngaytaodon) =? AND kho.makho=?",
    [thang, ma_kho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.addDonhang = (
  callback,
  ten_nguoigui,
  sdt_nguoigui,
  ten_nguoinhan,
  sdt_nguoinhan,
  diachi_nguoinhan,
  ghichu,
  hinhanh,
  ma_trangthai,
  ma_phieugiaohang,
  ma_phieuchuyenkho,
  ma_kho,
  giatri,
  khoiluong,
  ngaytaodon
) => {
  db.query(
    "INSERT INTO `donhang` (`ten_nguoigui`, `sdt_nguoigui`, `ten_nguoinhan`, `sdt_nguoinhan`, `diachi_nguoinhan`, `ghichu`, `hinhanh`, `ma_trangthai`,`ma_phieugiaohang`,`ma_phieuchuyenkho`,`ma_kho`,`giatri`,`khoiluong`,`ngaytaodon`) VALUES (?, ?, ?, ?, ?, ?, NULL, ?,NULL,NULL,?,?,?,?) ",
    [
      ten_nguoigui,
      sdt_nguoigui,
      ten_nguoinhan,
      sdt_nguoinhan,
      diachi_nguoinhan,
      ghichu,
      //hinhanh,
      ma_trangthai,
      ma_kho,
      giatri,
      khoiluong,
      ngaytaodon
    ],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.addDonhangChuyenKho = (
  callback,
  ten_nguoigui,
  sdt_nguoigui,
  ten_nguoinhan,
  sdt_nguoinhan,
  diachi_nguoinhan,
  ghichu,
  hinhanh,
  ma_trangthai,
  ma_phieugiaohang,
  ma_phieuchuyenkho,
  ma_kho,
  giatri,
  khoiluong,
  ngaytaodon
) => {
  db.query(
    "INSERT INTO `donhang` (`ten_nguoigui`, `sdt_nguoigui`, `ten_nguoinhan`, `sdt_nguoinhan`, `diachi_nguoinhan`, `ghichu`, `hinhanh`, `ma_trangthai`, `ma_phieugiaohang`, `ma_phieuchuyenkho`, `ma_kho`, `giatri`, `khoiluong`, `ngaytaodon`) VALUES (?, ?, ?, ?, ?, ?, NULL, ?, NULL, ?, ?, ?, ?, ?) ",
    [
      ten_nguoigui,
      sdt_nguoigui,
      ten_nguoinhan,
      sdt_nguoinhan,
      diachi_nguoinhan,
      ghichu,
      ma_trangthai,
      ma_phieuchuyenkho,
      ma_kho,
      giatri,
      khoiluong,
      ngaytaodon
    ],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
// exports.deleteDonhang = (callback, madh) => {
//   db.query("Delete from donhang where madh=?", [madh], (err, result) => {
//     if (err) throw err;
//     callback(result);
//   });
// };

exports.updateGiaoDonhang = (
  callback,
  ma_trangthai,
  ma_phieugiaohang,
  madonhang
) => {
  db.query(
    "Update donhang set ma_trangthai=?,ma_phieugiaohang=? where madonhang=?",
    [ma_trangthai, ma_phieugiaohang, madonhang],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.updateChuyenKhoDonhang = (
  callback,
  ma_trangthai,
  ma_kho,
  madonhang
) => {
  db.query(
    "Update donhang set ma_trangthai=?,ma_kho=? where madonhang=?",
    [ma_trangthai, ma_kho, madonhang],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};

exports.findDonhang = (callback, sdt_nguoigui) => {
  db.query("select * from donhang JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai  where sdt_nguoigui=?", [sdt_nguoigui], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.findDonhangNhan = (callback, sdt_nguoinhan) => {
  db.query("select * from donhang JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai  where sdt_nguoinhan=?", [sdt_nguoinhan], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.updateStatusDonhangById = (callback, ma_trangthai, madonhang) => {
  //console.log(idtrangthai + " " + madh);
  db.query(
    "Update donhang set ma_trangthai = ? where madonhang = ?",
    [ma_trangthai, madonhang],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
