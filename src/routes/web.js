const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatPage,
  getUpdatePage,
} = require("../controllers/honeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatPage);

router.get("/update", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
