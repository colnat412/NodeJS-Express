const express = require("express");
const {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
  getEditPage,
  updateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ejs", getEjsPage);

router.get("/create", getCreatePage);
router.post("/create-user", createNewUser);

router.get("/edit-user/:id", getEditPage);
router.post("/update", updateUser);

module.exports = router;
