const db = require("./db")();

exports.getAllTaiKhoan = (callback) => {
  db.query("select * from taikhoan", (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.addTaiKhoan = (callback, taikhoan, matkhau) => {
  db.query("INSERT INTO `taikhoan` (`taikhoan`,`matkhau`) VALUES (?,?)", [taikhoan, matkhau], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.deleteTaiKhoan = (callback, mataikhoan) => {
  db.query("Delete from taikhoan where mataikhoan=?", [mataikhoan], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
exports.login = (callback, taikhoan, matkhau) => {
  db.query("SELECT manv,tennv,sdt,nhanvien.ma_taikhoan,ma_chucvu,taikhoan.taikhoan,taikhoan.matkhau FROM `nhanvien` JOIN `taikhoan` ON nhanvien.ma_taikhoan = taikhoan.mataikhoan WHERE taikhoan.taikhoan = ? and taikhoan.matkhau= ? ",
    [taikhoan, matkhau],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.updateTaiKhoan = (
  callback,
  taikhoan,
  matkhau,
  mataikhoan
) => {
  db.query(
    "Update taikhoan set taikhoan=?,matkhau=? where mataikhoan=?",
    [taikhoan, matkhau, mataikhoan],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};