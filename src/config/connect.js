require("dotenv").config();
const mysql = require("mysql2/promise");

// POOL to maintain server
const connection = mysql.createPool({
  host: process.env.DBS_HOST,
  user: process.env.DBS_USER,
  database: process.env.DBS_NAME,
  port: process.env.DBS_PORT, // default: 3306
  password: process.env.DBS_PASSWORD, // default: empty
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
