const express = require("express");
const bodyParser = require("body-parser");
const People = require("./db/models/People");
const utils = require("./utils");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const isDeleted = await utils.deleteDataFromTable();
    if (isDeleted) {
      const people = req.body;
      const answers = [];
      const errors = [];
      for (let person of people) {
        try {
          answers.push(await People.create(person));
        } catch (err) {
          errors.push(err);
        }
      }
      if (errors.length || people.length !== answers.length) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    res.sendStatus(400);
  }
});

app.listen(3001, () => {
  console.log("Сервер запущен на 3001 порту");
});
