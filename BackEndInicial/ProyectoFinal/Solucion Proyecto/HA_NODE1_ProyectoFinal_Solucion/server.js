require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const routes = require("./routes");
const views = require("./config/views");
const sessions = require("./config/sessions");
const passport = require("./passport");

const PORT = process.env.APP_PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

views(app);

sessions(app);

passport(app);

routes(app);

module.exports = app;
