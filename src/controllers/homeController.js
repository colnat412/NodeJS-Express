const connection = require("../config/connect");

const getHomepage = (req, res) => {
  return res.render("home");
};

const getEjsPage = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  getEjsPage,
};
