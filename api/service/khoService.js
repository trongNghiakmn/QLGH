const db = require("./db")();

exports.getAllKho = (callback) => {
    db.query("select * from kho", (err, result) => {
        if (err) throw err;
        callback(result);
    });
};