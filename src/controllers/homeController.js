const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHomepage = async (req, res) => {
  let results = [];
  // console.log(">>>Check row:", results);
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

  // console.log(">>>email = ", email, "\n>>>name = ", name, "\n>>>city= ", city);

  // connection.query(
  //   `INSERT INTO
  //   Users (email,name,city)
  //   VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //   }
  // );

  // let [results, fields] = await connection.query(
  //   `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
  //   [email, name, city]
  // );

  await User.create({
    email: email,
    name: name,
    city: city,
  });

  res.send("create user succeed");
};
const getCreatPage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  // res.send("Update user succeed");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatPage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
