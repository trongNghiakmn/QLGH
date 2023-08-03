const db = require("./db")();

exports.getAllTrangthai = (callback) => {
  db.query("select * from chucvu", (err, result) => {
    if (err) throw err;
    callback(result);
  });
};