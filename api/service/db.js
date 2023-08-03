var mysql = require('mysql')

const initDB = () => {
    return con = mysql.createConnection({
        host:"localhost",
        user : "root",
        password :"",
        database:"appqlvc"
    })
}
  module.exports = initDB;