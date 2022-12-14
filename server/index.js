// const { json } = require("express")
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "empsystem",
});

app.post("/create", (req, res) => {
  const facName = req.body.name;
  const Age = req.body.age;
  const location = req.body.location;
  const Countary = req.body.countary;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO emp(facName,age,location,Countary,salary) VALUES(?,?,?,?,?)",
    [facName, Age, location, Countary, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("port is working");
});
