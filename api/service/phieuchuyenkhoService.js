const db = require("./db")();

exports.getAllPhieuChieuKho = (callback, ma_khoden) => {
  db.query("select * from phieuchuyenkho JOIN donhang on phieuchuyenkho.maphieuchuyenkho = donhang.ma_phieuchuyenkho JOIN kho on phieuchuyenkho.ma_khogui = kho.makho WHERE phieuchuyenkho.ma_khoden=?",
    [ma_khoden],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.getAllPhieuChieuKhoGui = (callback, ma_khogui) => {
  db.query("select * from phieuchuyenkho JOIN donhang on phieuchuyenkho.maphieuchuyenkho = donhang.ma_phieuchuyenkho JOIN kho on phieuchuyenkho.ma_khoden = kho.makho WHERE phieuchuyenkho.ma_khogui=?",
    [ma_khogui],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.getAllPhieuChieuKhoTheoMa = (callback, ma_khoden) => {
  db.query("select * from phieuchuyenkho JOIN donhang on phieuchuyenkho.maphieuchuyenkho = donhang.ma_phieuchuyenkho JOIN kho on phieuchuyenkho.ma_khogui = kho.makho WHERE phieuchuyenkho.maphieuchuyenkho=?",
    [ma_khoden],
    (err, result) => {
      if (err) throw err;
      callback(result);
    });
};
exports.addPhieuChuyenKho = (callback, ngaylapphieu, nguoilapphieu, nguoigiao, ma_khoden, ma_khogui) => {
  db.query("INSERT INTO phieuchuyenkho (`ngaylapphieu`,`nguoilapphieu`,`nguoigiao`,`ma_khoden`,`ma_khogui` ) VALUES (?,?,?,?,?)",
    [ngaylapphieu, nguoilapphieu, nguoigiao, ma_khoden, ma_khogui],
    (error, results) => {
      if (error) throw error;
      callback(results);
    });
};
exports.updateNoiDungPCK = (callback, noidung, maphieuchuyenkho) => {
  db.query(
    "UPDATE phieuchuyenkho SET noidung = ? WHERE maphieuchuyenkho= ? ",
    [noidung, maphieuchuyenkho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.updateKhoPCK = (callback, ma_khogui, ma_khoden, maphieuchuyenkho) => {
  db.query(
    "UPDATE phieuchuyenkho SET ma_khogui = ?,ma_khoden=? where maphieuchuyenkho= ? ",
    [ma_khogui, ma_khoden, maphieuchuyenkho],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};
exports.deletePhieuChuyenKho = (callback, maphieuchuyenkho) => {
  db.query(
    "DELETE FROM phieuchuyenkho WHERE mack = ?",
    [maphieuchuyenkho],
    (error, results) => {
      if (error) throw error;
      callback(results);
    }
  );
};
// exports.updatePhieuChuyenKho = (data, callback) => {
//   db.query("INSERT INTO phieuchuyenkho SET ?", data, (error, results) => {
//     if (error) throw error;
//     callback(results);
//   });
// };
// exports.updatePhieuChuyenKho = (data, callback) => {
//   const id = data.id;
//   delete data.id;
//   db.query(
//     "UPDATE phieuchuyenkho SET ? WHERE id = ?",
//     [data, id],
//     (error, results) => {
//       if (error) throw error;
//       callback(results);
//     }
//   );
// };

exports.getAllDhPhieuchuyenkho = (id, callback) => {
  db.query(
    "select * from donhang,phieuchuyenkho where phieuchuyenkho.maphieuchuyenkho = donhang.ma_phieuchuyenkho and phieuchuyenkho.maphieuchuyenkho=?",
    [id],
    (error, results) => {
      if (error) throw error;
      callback(results);
    }
  );
};
