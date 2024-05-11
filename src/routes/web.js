const express = require("express");
const {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ejs", getEjsPage);
router.get("/create", getCreatePage);
router.post("/create-user", createNewUser);

module.exports = router;
