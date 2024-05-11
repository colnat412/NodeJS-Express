require("dotenv").config();
const express = require("express");
const port = 3000;
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/connect");

const app = express();

// Config
configViewEngine(app);

// ROUTE
app.use("/", webRoutes);

app.listen(port, () => {
  console.log("Server is running at http://localhost:3000");
});
