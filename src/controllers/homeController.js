const getHomepage = (req, res) => {
  res.send("Home");
};

const getEjsPage = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  getEjsPage,
};
