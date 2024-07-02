const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  console.log(">>>Check row:", results);
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>>email = ", email, "\n>>>name = ", name, "\n>>>city= ", city);

  // connection.query(
  //   `INSERT INTO
  //   Users (email,name,city)
  //   VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    [email, name, city]
  );

  console.log(results);
  res.send("create user succeed");
};
const getCreatPage = (req, res) => {
  res.render("create.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatPage,
};
