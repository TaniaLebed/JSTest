const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  password: "root",
});

module.exports = connection;
