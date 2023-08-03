const db = require('./db')()

exports.getAllNhanVien = (callback) => {
  db.query("select * from nhanvien", (err, result) => {
    if (err) throw err;
    callback(result); xx
  });
}
exports.getNhanVienTheoCV = (callback, ma_chucvu) => {
  db.query("SELECT nhanvien.manv,tennv,sdt,chucvu.tenchucvu,taikhoan.taikhoan,taikhoan.matkhau FROM `nhanvien` JOIN chucvu ON nhanvien.ma_chucvu=chucvu.machucvu JOIN taikhoan ON nhanvien.ma_taikhoan=taikhoan.mataikhoan WHERE nhanvien.ma_chucvu=?", [ma_chucvu], (err, result) => {
    if (err) throw err;
    callback(result);
  });
}
exports.getNhanVienTheoMa = (callback, manhanvien) => {
  db.query("SELECT * FROM `nhanvien` JOIN taikhoan on taikhoan.mataikhoan=nhanvien.ma_taikhoan JOIN chucvu on chucvu.machucvu=nhanvien.ma_chucvu WHERE nhanvien.manv=?",
    [manhanvien],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
}
exports.addNhanvien = (callback, tennv, sdt, ma_taikhoan, ma_chucvu) => {
  db.query("INSERT INTO `nhanvien` (`tennv`,`sdt`,`ma_taikhoan`,`ma_chucvu`) VALUES (?,?,?,?)",
    [tennv, sdt, ma_taikhoan, ma_chucvu],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.updateChucVuNhanVienById = (callback, ma_chucvu, manv) => {
  db.query(
    "Update nhanvien set ma_chucvu = ? where manv = ?",
    [ma_chucvu, manv],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.updateNhanVien = (callback, ma_chucvu, tennv, sdt, manv) => {
  db.query(
    "Update nhanvien set ma_chucvu = ?,tennv=?,sdt=? where manv = ?",
    [ma_chucvu, tennv, sdt, manv],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.deleteNhanVien = (callback, manv) => {
  db.query("Delete from nhanvien where manv=?", [manv], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};