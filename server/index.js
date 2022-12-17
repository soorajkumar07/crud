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
  password: "123456789",
  database: "empsystem",
});

app.post("/create", (req, res) => {
  const facName = req.body.name;
  const Age = req.body.age;
  const Location = req.body.location;
  const Countary = req.body.countary;
  const Salary = req.body.Salary;

  db.query(
    "INSERT INTO emp(facName,age,Location,Countary,Salary) VALUES(?,?,?,?,?)",
    [facName, Age, Location, Countary, Salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserted");
      }
    }
  );
});
app.get("/emp", (req, res) => {
  db.query("SELECT * FROM emp", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const facid = req.body.facid;
  const Salary = req.body.Salary;
  db.query(
    "UPDATE emp SET Salary = ? WHERE facid = ?",[Salary,facid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// app.delete()

app.listen(3001, () => {
  console.log("port is working");
});
