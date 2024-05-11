const express = require("express");
const {
  getHomepage,
  getEjsPage,
  createNewUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ejs", getEjsPage);
router.post("/create-user", createNewUser);

module.exports = router;
