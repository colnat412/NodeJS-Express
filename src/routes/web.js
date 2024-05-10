const express = require("express");
const { getHomepage, getEjsPage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/ejs", getEjsPage);

module.exports = router;
