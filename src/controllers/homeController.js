const connection = require("../config/connect");

const getHomepage = (req, res) => {
  return res.render("home");
};

const getEjsPage = (req, res) => {
  res.render("sample");
};

const createNewUser = (req, res) => {
  // var email = req.body.email;
  // var name = req.body.name;
  // var city = req.body.city;
  var { email, name, city } = req.body;
  connection.query(
    `INSERT INTO Users(email, name, city) 
      VALUES (?,?,?)`,
    [email, name, city],
    (err, results) => {
      try {
        console.log(res.data);
        res.send("Created successfully!");
      } catch (err) {
        console.log(err);
      }
    }
  );
};

module.exports = {
  getHomepage,
  getEjsPage,
  createNewUser,
};
