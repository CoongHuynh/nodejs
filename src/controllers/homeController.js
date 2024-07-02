const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
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

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    [email, name, city]
  );

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
const postHandleRemoveUser = (req, res) => {
  res.send("ok delete");
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
