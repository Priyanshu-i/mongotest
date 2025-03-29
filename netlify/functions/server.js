const express = require("express");
const dotenv = require("dotenv");
const serverless = require('serverless-http');
const mongoose = require("mongoose");
const connectDB = require("../../config/db");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

dotenv.config(); //env
connectDB();

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

const userRoutes = require("../../routes/userRoutes");
app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
module.exports.handler = serverless(app);