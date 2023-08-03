const db = require("./db")();

exports.getAllTrangthai = (callback) => {
  db.query("select * from trangthai", (err, result) => {
    if (err) throw err;
    callback(result);
  });
};
