const db = require("./db")();

exports.getAllPhieuGiaoHang = (callback) => {
  db.query("select * from phieugiaohang", (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.getPGHTheoMa = (callback, maphieugiaohang) => {
  db.query("select * from phieugiaohang JOIN  nhanvien on phieugiaohang.nguoilapphieu=nhanvien.manv WHERE phieugiaohang.maphieugiaohang=?",
    [maphieugiaohang],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.getAllPhieuGiaoHangNVDH = (callback, ma_kho) => {
  db.query("SELECT * FROM phieugiaohang JOIN nhanvien on nhanvien.manv=phieugiaohang.nguoigiao JOIN donhang on donhang.ma_phieugiaohang=phieugiaohang.maphieugiaohang JOIN trangthai ON donhang.ma_trangthai=trangthai.matrangthai WHERE donhang.ma_kho=?",
    [ma_kho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.addPhieuGiaoHang = (callback, ngaylapphieu, nguoilapphieu, nguoigiao) => {
  db.query("INSERT INTO phieugiaohang (`ngaylapphieu`,`nguoilapphieu`,`nguoigiao` ) VALUES (?,?,?)",
    [ngaylapphieu, nguoilapphieu, nguoigiao],
    (error, results) => {
      if (error) throw error;
      callback(results);
    });
};
exports.getPhieuGiaoHangTheoShipper = (callback, nguoigiao) => {
  db.query("SELECT *, COUNT(donhang.madonhang) AS sldh FROM phieugiaohang JOIN nhanvien ON phieugiaohang.nguoilapphieu=nhanvien.manv JOIN donhang ON donhang.ma_phieugiaohang=phieugiaohang.maphieugiaohang JOIN kho ON donhang.ma_kho=kho.makho  WHERE nguoigiao=? GROUP BY phieugiaohang.maphieugiaohang",
    [nguoigiao],
    (error, results) => {
      if (error) throw error;
      callback(results);
    });
};
exports.getAllDhPhieugiaohang = (callback, maphieugiaohang) => {
  db.query(
    "select * from donhang,phieugiaohang,trangthai where phieugiaohang.maphieugiaohang = donhang.ma_phieugiaohang and donhang.ma_trangthai=trangthai.matrangthai AND phieugiaohang.maphieugiaohang=?",
    [maphieugiaohang],
    (error, results) => {
      if (error) throw error;
      callback(results);
    }
  );
};
exports.getAllDhPghNgTt = (callback, nguoigiao, ma_trangthai) => {
  db.query(
    "select * from donhang,phieugiaohang,trangthai where phieugiaohang.maphieugiaohang = donhang.ma_phieugiaohang and donhang.ma_trangthai=trangthai.matrangthai AND phieugiaohang.nguoigiao=? AND donhang.ma_trangthai=?",
    [nguoigiao, ma_trangthai],
    (error, results) => {
      if (error) throw error;
      callback(results);
    }
  );
};
// exports.deletePhieuGiaoHang = (data, callback) => {
//   db.query(
//     "DELETE FROM phieugiaohang WHERE magh = ?",
//     data,
//     (error, results) => {
//       if (error) throw error;
//       callback(results);
//     }
//   );
// };

// exports.updatePhieuGiaoHang = (data, callback) => {
//   const id = data.id;
//   delete data.id;
//   db.query(
//     "UPDATE phieugiaohang SET ? WHERE id = ?",
//     [data, id],
//     (error, results) => {
//       if (error) throw error;
//       callback(results);
//     }
//   );
// };
