const connection = require("../config/connect");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home", { listUsers: results });
};

const getEjsPage = (req, res) => {
  res.render("sample");
};

const createNewUser = async (req, res) => {
  var { email, name, city } = req.body;
  var [results, fields] = await connection.query(
    "INSERT INTO Users(email, name, city) VALUES (?,?,?)",
    [email, name, city]
  );
  res.send("Created Successfully");
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create");
};

const getEditPage = async (req, res) => {
  let user = await getUserById(req.params.id);
  res.render("edit", { user: user });
};

const updateUser = async (req, res) => {
  var { email, name, city, id } = req.body;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};

const deleteUser = async (req, res) => {
  let user = await getUserById(req.params.id);
  res.render("delete", { user: user });
};

const handleDeleteUser = async (req, res) => {
  await deleteUserById(req.body.id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getEjsPage,
  createNewUser,
  getCreatePage,
  getEditPage,
  updateUser,
  deleteUser,
  handleDeleteUser,
};
