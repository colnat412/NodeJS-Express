const express = require("express");
const {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
  getEditPage,
  updateUser,
  deleteUser,
  handleDeleteUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ejs", getEjsPage);

router.get("/create", getCreatePage);
router.post("/create-user", createNewUser);

router.get("/edit/:id", getEditPage);
router.post("/update-user", updateUser);

// router.get("/delete", )
router.post("/delete-user/:id", deleteUser);
router.post("/delete-user/", handleDeleteUser);

module.exports = router;
