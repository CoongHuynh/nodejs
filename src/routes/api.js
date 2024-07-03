const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.send("Hello world with apis");
});

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postCreateUserAPI);

module.exports = routerAPI;
