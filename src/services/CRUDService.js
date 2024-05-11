const connection = require("../config/connect");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select *from Users");
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    "select *from Users where id = ?",
    [id]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, id) => {
  var [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
    [email, name, city, id]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};
