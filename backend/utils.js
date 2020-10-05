const fs = require("fs");
const connection = require("./db/config/connection");

exports.deleteDataFromTable = () => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM project.people", [], (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};
