const connection = require("../config/connection");

class People {
  static create(person) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO project.people(id, name, age, gender, company, email, phone, address) VALUE (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          person.id,
          person.name,
          person.age,
          person.gender,
          person.company,
          person.email,
          person.phone,
          person.address,
        ],
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  }
}

module.exports = People;
