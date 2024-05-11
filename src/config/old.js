require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DBS_HOST,
  user: process.env.DBS_USER,
  database: process.env.DBS_NAME,
  port: process.env.DBS_PORT, // default: 3306
  password: process.env.DBS_PASSWORD, // default: empty
});

module.exports = connection;
