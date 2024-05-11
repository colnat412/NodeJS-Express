const connection = require("../config/connect");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home", { listUsers: results });
};

const getEjsPage = (req, res) => {
  res.render("sample");
};

const createNewUser = async (req, res) => {
  // var email = req.body.email;
  // var name = req.body.name;
  // var city = req.body.city;
  var { email, name, city } = req.body;
  // connection.query(
  //   `INSERT INTO Users(email, name, city)
  //     VALUES (?,?,?)`,
  //   [email, name, city],
  //   (err, results) => {
  //     try {
  //       res.send("Created successfully!");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // );
  var [results, fields] = await connection.query(
    "INSERT INTO Users(email, name, city) VALUES (?,?,?)",
    [email, name, city]
  );
  console.log(">>> results: ", results);
  res.send("Created successfully!");

  // connection.query(
  //   `select *from Users u`,
  //   (err,results,fields){
  //     console.log(">>>results:", results);
  //   }
  // )
  // const [results, fields] = await connection.query("select *from Users u");
  // console.log(">>> results: ", results);
};
const getCreatePage = (req, res) => {
  res.render("create");
};

module.exports = {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
};
