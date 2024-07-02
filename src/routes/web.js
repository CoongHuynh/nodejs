const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatPage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatPage);

router.get("/update/:id", getUpdatePage);
// router.get("/update", getUpdatePage);

router.post("/update-user", postUpdateUser);
router.post("/create-user", postCreateUser);
module.exports = router;
