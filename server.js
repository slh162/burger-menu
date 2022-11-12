const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const db = require("mongoose");
// reads the pages
app.use(express.static("pages"));
app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/pages/signin.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/pages/signup.html");
});
app.get("/menu", (req, res) => {
  res.sendFile(__dirname + "/pages/menu.html");
});
// creates a scheme of users
const userSchema = db.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const listUsers = db.model("svusers", userSchema);
// inserts users signing up into date base
app.post("/signup", (req, res) => {
  let user = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.ema,
    password: req.body.Password,
  };
  const add = async (us) => {
    await listUsers.insertMany(us);
    console.log("add works");
    res.sendFile(__dirname + "/pages/signin.html");
  };
  add(user);
});
// check and posts user from date
app.post("/signin", (req, res) => {
  const findUser = async () => {
    let resultData = await listUsers.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (resultData == null) {
      res.send("user not found");
    } else {
      res.send(resultData);
    }
  };

  findUser();
});
// db connection
db.connect("mongodb://localhost:27017/svburger", () => {
  console.log("db is on");
});
// server host
app.listen(3000, () => {
  console.log("3000 works");
});
