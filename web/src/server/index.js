const express = require("express");
const os = require("os");
const app = express();
require('dotenv').config();

var apiRouter = require("./controllers/api.js")


app.use(express.static("dist"));
app.use("/api", apiRouter);

app.listen(8080, () => console.log("Listening on port 8080!"));