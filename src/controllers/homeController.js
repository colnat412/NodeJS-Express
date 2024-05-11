const connection = require("../config/connect");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

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
  res.send("Created Successfully");
  res.redirect("/");

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

const updateUser = async (req, res) => {
  var { email, name, city, id } = req.body;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};

const getEditPage = async (req, res) => {
  let user = await getUserById(req.params.id);
  res.render("edit", { user: user });
};

module.exports = {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
  getEditPage,
  updateUser,
};
