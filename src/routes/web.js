const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatPage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
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
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);
module.exports = router;
